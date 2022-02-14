import React from 'react';

import { GridContent } from '@/components';

import Styles from '../Styles/container-styles.scss'

interface Props {
  usersList: []
}

const BoxUsers: React.FC<Props> = ({ usersList }) => {

  return (
    <div className={Styles.box}>
      <span>Title</span>
      <div className={Styles.contentBox}>
        <GridContent data={usersList} />
      </div>
      <span>Rodapé</span>
    </div>
  );
}

export default BoxUsers;