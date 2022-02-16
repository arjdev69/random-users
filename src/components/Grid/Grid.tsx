import React from 'react';

import {Item} from './types-grid'

import GridItem from './Item/Item'

import Styles from './grid-styles.scss';

interface Props {
  data: any[]
}

const Grid: React.FC<Props> = ({data}) => {
  return (
    <div className={Styles.gridContainer}>
      {data.map((value: Item) => (
        <GridItem data={value} />
      ))}
    </div>
  )
}

export default Grid;