import React from 'react';
import '../style/outils/modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;