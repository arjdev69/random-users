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
      <img src={logo} width={68} />
      <Link to="/">
        <span>
          {title}
        </span>
      </Link>
    </div>
  )
}

export default Header;