import React from 'react';

import Styles from './header-styles.scss'

import { logo } from '@/assets'
import { Link } from 'react-router-dom';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {

  return (
    <div className={Styles.header}>
      <Link to="/">
        <span>
          {title}
        </span>
      </Link>
      <img src={logo} width={48} />
    </div>
  )
}

export default Header;