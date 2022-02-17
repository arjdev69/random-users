import React, { useState } from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader } from '@/components';
import { Item } from '@/components/Grid/types-grid';

import { MdEmail, MdPhoneAndroid, MdDateRange } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { GiLifeBar } from "react-icons/gi";

import Styles from '../Styles/boxModal-styles.scss'

interface Props {
  modal: boolean,
  setModal(any): any,
  data: Item,
}

const BoxUsersModal: React.FC<Props> = ({ modal, data, setModal }) => {

  const getDate = (_date) => {
    const date = new Date(_date)
    return date.toLocaleDateString()
  }
  
  return (
    !data ? <></> :
    <div className={Styles.modalBox}>
      <Modal
        show={modal}
        setShow={setModal}
      >
        <ModalHeader>
          <span className={Styles.name}>
            {data.name.first + ' ' + data.name.last}
          </span>
        </ModalHeader>
        <ModalBody>
          <div className={Styles.boxImage}>
            <img src={data?.picture?.large} width={80} />
          </div>
        </ModalBody>
        <ModalFooter>
          <div className={Styles.footerBox}>
            <span className={Styles.info}>
              <MdPhoneAndroid size={24} className={Styles.iconName} />
              {data?.phone}
            </span>
            <span className={Styles.info}>
              <MdEmail size={24} className={Styles.iconName} />
              {data?.email}
            </span>
            <span className={Styles.info}>
              <GiLifeBar size={24} className={Styles.iconName} />
              {data?.dob?.age}
            </span>
            <span className={Styles.info}>
              <MdDateRange size={24} className={Styles.iconName} />
              {getDate(data?.dob?.date)}
            </span>
            <span className={Styles.info}>
              <BiWorld size={24} className={Styles.iconName} />
              {data?.nat}
            </span>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default BoxUsersModal;