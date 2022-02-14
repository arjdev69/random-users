import React from 'react';

import _ from 'lodash';

import { GridContent } from '@/components';

import Styles from '../Styles/container-styles.scss'

interface Props {
  usersList: any[],
  callback(): any,
  clear(): any
}

const BoxUsers: React.FC<Props> = ({ usersList, clear, callback }) => {

  return (
    <div className={Styles.box}>
      <div className={Styles.topBox}>Top</div>
      <div className={Styles.contentBox}>
        {
          _.isEmpty(usersList)
            ? <span>Sem usuários</span>
            : <GridContent data={usersList} />
        }
      </div>
      <div className={Styles.footerBox}>
        <span>Total users: {usersList.length}</span>
        <button
          onClick={clear}
          className={`${Styles.btnClear}`}>
          Clear
        </button>
        <button
          onClick={callback}
          className={Styles.button}>
          +
        </button>
      </div>
    </div>
  );
}

export default BoxUsers;