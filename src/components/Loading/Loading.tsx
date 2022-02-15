import React, { useEffect, useState } from 'react';

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import Styles from './loading-styles.scss';

function WithLoading(Component) {

  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading)
      return (
        <Component {...props} />
      );

    return (
      <div className={Styles.mainLoading}>
        <div className={`${Styles.contentLoading} ${Styles.loadingPanel}`}>
          <Player
            autoplay
            loop
            speed={2}
            src="https://assets5.lottiefiles.com/packages/lf20_tz3ykkpy.json"
            style={{ height: '150px', width: '150px' }}
          />
        </div>
        <Component {...props} />
      </div>
    );
  }
}

export default WithLoading;