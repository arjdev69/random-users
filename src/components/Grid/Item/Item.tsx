import React from 'react';

import { Item } from '../types-grid'

import { MdOpenInBrowser } from 'react-icons/md';

import Styles from '../grid-styles.scss';

interface Props {
  data: Item;
  clickBtnView(any): any
}

const Item: React.FC<Props> = ({ data, clickBtnView }) => {

  return (
    <div className={Styles.gridItem}>
      <img src={data.picture.large} />
      <div className={Styles.textBox}>
        <span className={Styles.text}>
          Name:  {data.name.first + ' ' + data.name.last}
        </span>
        <span className={Styles.text}>
          Email: {data.email}
        </span>
        <span className={Styles.text}>
          Age:   {data.dob.age}
        </span>
        <span className={Styles.text}>
          Country: {data.nat}
        </span>
        <div className={Styles.actions}>
          <button className={Styles.btn}
            onClick={() => {
              clickBtnView(data)
            }}
          >
            <MdOpenInBrowser size={32} color={'#fff'} title={"View"} />
            <span>View</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item;