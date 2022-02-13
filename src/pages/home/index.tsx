import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { getListUsersSuccess } from '@/store/modules/users/actions'

import Styles from './home-styles.scss';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);

  const fetchApi = () => {
    dispatch(getListUsersSuccess());
  };

  useEffect(() => {
   fetchApi();
  }, [])
  
  return (
    <div className={Styles.home}>
      Home
    </div>
  )
}

export default Home;