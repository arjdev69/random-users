import React, { useEffect, useMemo, useState } from 'react';

import _ from 'lodash';
import { filterData } from '@/utils'

import { LABELS } from '@/utils/Contants'

import { MdSearch, MdBackspace, MdAddCircle } from 'react-icons/md';
import { GridContent, Loading } from '@/components';
import BoxUsersModal from './BoxUsersModal';

import Styles from '../Styles/container-styles.scss'
import Input from '../Styles/input-styles.scss'

import { logo } from '@/assets'
import { Item } from '@/components/Grid/types-grid';

interface Props {
  usersList: any[],
  callback(): any,
  clear(): any
}

const BoxUsers: React.FC<Props> = ({ usersList, clear, callback }) => {
  const [searchValue, setSearchValue] = useState('')
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState();

  const memoizedUser = useMemo(() => filterData(usersList, searchValue), [usersList, searchValue]);

  const controlModal = (data) => {
    setModal(!modal)
    setUser(data)
  }

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
          <span className={Styles.text}>Users: {memoizedUser.length}</span>
          <button
            onClick={clear}
            className={`${Styles.btnClear}`}>
            <MdBackspace size={24} />
          </button>
        </div>
      </div>
      <div id="contentBox" className={Styles.contentBox}>
        {
          _.isEmpty(memoizedUser)
            ? <span>{LABELS.boxUser.labels.noItems}</span>
            : <GridContent
              data={memoizedUser}
              clickBtnView={controlModal}
            />
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
                setSearchValue(ev.target.value)
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

      <BoxUsersModal
        modal={modal}
        data={user as Item}
        setModal={setModal}
      />

    </div>
  );
}

export default Loading(BoxUsers);