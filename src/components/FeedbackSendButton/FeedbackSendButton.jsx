import '../FeedbackSendButton/FeedbackSendButton.scss'

const FeedbackSendButton = ({ onClick, cooldownTime = 0 }) => {
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    };

    const getButtonText = () => {
        if (cooldownTime > 0) {
            return `${formatTime(cooldownTime)}`;
        }
        return 'Отправить';
    };

    return(
        <button 
            className='feedbackSendButton' 
            onClick={onClick} 
            disabled={cooldownTime > 0}
        >
            {getButtonText()}
        </button>
    )
}

export default FeedbackSendButton;