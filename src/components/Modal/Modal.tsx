import React from 'react';
import { useEffect, useRef } from 'react';
import Styles from './modal-styles.scss';

const Modal = props => {
  const modalRef = useRef();

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === modalRef.current) {
        props.setShow(false);
      }
    };
    window.addEventListener('click', clickOutsideContent);
    return () => {
      window.removeEventListener('click', clickOutsideContent);
    };
  }, [props]);

  return <div ref={modalRef} className={`${Styles.modal} ${props.show ? Styles.active : ''}`}>
    <div className={Styles.modal__content}>
      {
        !props.hideCloseButton && <span onClick={() => props.setShow(false)} className={Styles.modal__close}>
          &times;
                </span>
      }
      {props.children}
    </div>
  </div>;
};

export default Modal;

export const ModalHeader = props => {
  return (
    <div className={Styles.modal__header}>
      {props.children}
    </div>
  );
}

export const ModalBody = props => {
  return (
    <div className={Styles.modal__body}>
      {props.children}
    </div>
  );
}

export const ModalFooter = props => {
  return (
    <div className={Styles.modal__footer}>
      {props.children}
    </div>
  );
}