import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const location = useLocation();
  const [navigationHistory, setNavigationHistory] = useState([{ path: '/', timestamp: Date.now() }]);

  useEffect(() => {
    setNavigationHistory(prev => {
      const exists = prev.some(item => item.path === location.pathname);
      if (!exists) {
        return [...prev, { path: location.pathname, timestamp: Date.now() }];
      }
      return prev;
    });
  }, [location]);

  const getNavigationChain = (currentPath) => {
    const history = [...navigationHistory];
    const currentIndex = history.findIndex(item => item.path === currentPath);
    
    if (currentIndex === -1) {
      return [getPageInfo('/'), getPageInfo(currentPath)];
    }
    
    const chain = history.slice(0, currentIndex + 1);
    
    return chain.map(item => getPageInfo(item.path));
  };

  const getPageInfo = (path) => {
    switch (path) {
      case '/':
        return { text: 'Главная страница', link: '/' };
      case '/reviews':
        return { text: 'Отзывы', link: '/reviews' };
      case '/program':
        return { text: 'Программа практикума', link: '/program' };
      case '/experts':
        return { text: 'Эксперты', link: '/experts' };
      case '/i-in':
        return { text: 'Я в деле!', link: '/i-in' };
      case '/pay':
        return { text: 'Оплата', link: '/pay' };
      default:
        return { text: 'Главная страница', link: '/' };
    }
  };

  return (
    <NavigationContext.Provider value={{ navigationHistory, getNavigationChain }}>
      {children}
    </NavigationContext.Provider>
  );
};