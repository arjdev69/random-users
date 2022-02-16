import React, { useEffect, useState } from 'react';

import _ from 'lodash';

import { LABELS } from '@/utils/Contants'

import { MdSearch, MdBackspace, MdAddCircle } from 'react-icons/md';
import { GridContent, Loading } from '@/components';


import Styles from '../Styles/container-styles.scss'
import Input from '../Styles/input-styles.scss'

import { logo } from '@/assets'

interface Props {
  usersList: any[],
  callback(): any,
  clear(): any
}

const BoxUsers: React.FC<Props> = ({ usersList, clear, callback }) => {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    setDataList(usersList)
  }, [usersList])

  return (
    <div className={Styles.box}>
      <div className={Styles.topBox}>
        <div className={Styles.groupColumn}>
          <img
            src={logo}
            height="48"
            width="48"
          />
          <span className={Styles.text}>
            {LABELS.boxUser.labels.titleBox}
          </span>
        </div>
        <div className={Styles.groupButton}>
          <span className={Styles.text}>Users: {dataList.length}</span>
          <button
            onClick={clear}
            className={`${Styles.btnClear}`}>
            <MdBackspace size={24} />
          </button>
        </div>
      </div>
      <div id="contentBox" className={Styles.contentBox}>
        {
          _.isEmpty(dataList)
            ? <span>{LABELS.boxUser.labels.noItems}</span>
            : <GridContent data={dataList} />
        }
      </div>
      <div className={Styles.footerBox}>
        <div className={Styles.boxFinder}>
          <div className={Input.searchBox}>
            <button className={Input.btnSearch}>
              <MdSearch size={24} />
            </button>
            <input 
              type="text"
              className={Input.inputSearch}
              placeholder="Type to Search..." 
              onChange={(ev) => {
                console.log(ev.target.value)
              }}
            />
          </div>
        </div>
        <div className={Styles.groupButton}>
          <button
            onClick={callback}
            className={Styles.button}>
            <MdAddCircle size={40} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Loading(BoxUsers);