import React from 'react';

import Styles from '../Styles/container-styles.scss'

interface Props {
  usersList: []
}

interface Item {
  gender: string,
  name: {
    title: string,
    first: string,
    last: string
  }
}

const BoxUsers: React.FC<Props> = ({ usersList }) => {

  return (
    <div className={Styles.box}>
      {usersList.map((value: Item) => (
        <p>{value.name.first}</p>
      ))}
    </div>
  );
}

export default BoxUsers;