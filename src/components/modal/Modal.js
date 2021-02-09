import React,{useEffect} from 'react';
import {modal,overlay} from './Modal.module.css';

const Modal = ({children,onClose}) => {

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
          onClose();
        }
      };
    
      useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown);
    
        return function() {
          window.removeEventListener('keydown', handleKeyDown);
        }
    
      },)
    
      const handleClick=e=>{
        e.target.nodeName==="DIV" && onClose();
      }
    return(
        <div className={overlay} onClick={handleClick}>
            <div className={modal}>
                {children}
            </div>
        </div>
    )
}

export default Modal;

