import React from 'react';

import Styles from './grid-styles.scss';

interface Props {
  data: []
}

interface Item {
  gender: string,
  name: {
    title: string,
    first: string,
    last: string
  }
}

const Grid: React.FC<Props> = ({data}) => {
  return (
    <div className={Styles.gridContainer}>
      {data.map((value: Item) => (
        <div className={Styles.gridItem}>{value.name.first}</div>
      ))}
    </div>
  )
}

export default Grid;