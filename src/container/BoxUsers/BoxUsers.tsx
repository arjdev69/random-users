import React from 'react';

import _ from 'lodash';

import { GridContent, Loading } from '@/components';

import Styles from '../Styles/container-styles.scss'

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
          src="https://cdn-icons.flaticon.com/png/512/1307/premium/1307714.png?token=exp=1644888199~hmac=75c3ab2b736d49017e748ffd292c87ab" 
          height="48"
          width="48" 
        />
        <span>
          User List
        </span>
      </div>
      <div className={Styles.contentBox}>
        {
          _.isEmpty(usersList)
            ? <span>Sem usuários</span>
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