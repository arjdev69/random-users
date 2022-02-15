import React from 'react';

import _ from 'lodash';

import { LABELS } from '@/utils/Contants'

import { GridContent, Loading } from '@/components';

import Styles from '../Styles/container-styles.scss'

import { logo } from '@/assets'

interface Props {
  usersList: any[],
  callback(): any,
  clear(): any
}

const BoxUsers: React.FC<Props> = ({ usersList, clear, callback }) => {

  return (
    <div className={Styles.box}>
      <div className={Styles.topBox}>
        <img
          src={logo}
          height="48"
          width="48"
        />
        <span>
          {LABELS.boxUser.labels.titleBox}
        </span>
      </div>
      <div className={Styles.contentBox}>
        {
          _.isEmpty(usersList)
            ? <span>{LABELS.boxUser.labels.noItems}</span>
            : <GridContent data={usersList} />
        }
      </div>
      <div className={Styles.footerBox}>
        <span>Total users: {usersList.length}</span>
        <div>
          <button
            onClick={clear}
            className={`${Styles.btnClear}`}>
            -
          </button>
          <button
            onClick={callback}
            className={Styles.button}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Loading(BoxUsers);