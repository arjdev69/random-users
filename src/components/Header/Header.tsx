import React from 'react';

import Styles from './header-styles.scss'

import {logo} from '@/assets'

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {

  return (
    <div className={Styles.header}>
      <span>
        {title}
      </span>
      <img src={logo} width={48} />
    </div>
  )
}

export default Header;