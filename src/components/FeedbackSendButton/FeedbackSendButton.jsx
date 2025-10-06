import '../FeedbackSendButton/FeedbackSendButton.scss'

const FeedbackSendButton = ({ onClick, cooldownTime = 0, isLoading = false }) => {
    const getButtonText = () => {
        if (cooldownTime > 0) {
            return 'Отправлено';
        }
        if (isLoading) {
            return 'Отправка...';
        }
        return 'Отправить';
    };

    return(
        <button 
            className={`feedbackSendButton ${cooldownTime > 0 ? 'sent' : ''} ${isLoading ? 'loading' : ''}`} 
            onClick={onClick} 
            disabled={cooldownTime > 0 || isLoading}
        >
            {getButtonText()}
        </button>
    )
}

export default FeedbackSendButton;