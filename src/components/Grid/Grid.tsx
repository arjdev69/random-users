import React from 'react';

import {Item} from './types-grid'

import GridItem from './Item/Item'

import Styles from './grid-styles.scss';

interface Props {
  data: any[],
  clickBtnView(any): any 
}

const Grid: React.FC<Props> = ({data, clickBtnView}) => {
  return (
    <div className={Styles.gridContainer}>
      {data.map((value: Item) => (
        <GridItem 
          data={value}
          clickBtnView={clickBtnView}
        />
      ))}
    </div>
  )
}

export default Grid;