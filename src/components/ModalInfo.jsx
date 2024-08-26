import { motion } from 'framer-motion';

const ModalInfo = ({ visible, message, onClose, optionalButtonText, onOptionalButtonClick }) => {
    if (!visible) return null;

    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p>{message}</p>
                <div className="modal-actions">
                    <button className="close-btn-success" onClick={onClose}>X</button>
                    {optionalButtonText && (
                        <button className="optional-btn" onClick={onOptionalButtonClick}>
                            {optionalButtonText}
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ModalInfo;