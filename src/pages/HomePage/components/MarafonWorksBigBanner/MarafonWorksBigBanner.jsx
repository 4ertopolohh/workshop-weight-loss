import '../MarafonWorksBigBanner/MarafonWorksBigBanner.scss'
import MarafonWorksList from '../MarafonWorksList/MarafonWorksList';

const MarafonWorksBigBanner = () => {

    const marafonWorksList = [
        { text: 'Учим снижать вес постепенно и удерживать результат навсегда' },
        { text: 'Вместо диет — помогаем разобраться с пищевыми привычками' },
        { text: 'Повышаем осознанность питания — без запретов и насилия над собой' },
        { text: 'Помогаем составить индивидуальный план для достижения результата' },
        { text: 'Научим идти самостоятельно и не зависеть от тренеров и марафонов' },
        { text: 'Устраняем не следствия, а причины лишнего веса' },
        { text: 'Доводим до результата без голода' },
        { text: 'Обучаем спокойному отношению к еде и процессу похудения' },
        { text: 'Строим путь похудения в реальной жизни с работой, семьёй, стрессами и вечерами на диване' }
    ]

    return(
        <div className='marafonWorksBigBanner'>
            <div className='titles'>
                <div>
                    <h2>Практикум это алгоритм знаний 👉</h2>
                    <h5>По физиологии, психологии и нутрициологии</h5>
                </div>
                <h6>Поддерживаем и мотивируем на каждом этапе</h6>
            </div>
            <MarafonWorksList marafonWorksItems={marafonWorksList}/>
        </div>
    )
}

export default MarafonWorksBigBanner;