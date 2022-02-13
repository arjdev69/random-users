import React from 'react';

// import { Container } from './styles';

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
    <div>
      {usersList.map((value: Item) => (
        <p>{value.name.first}</p>
      ))}
    </div>
  );
}

export default BoxUsers;