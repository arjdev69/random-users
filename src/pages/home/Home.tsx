import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { getListUsersSuccess } from '@/store/modules/users/actions'

import {BoxUsers} from '@/container'

import Styles from './home-styles.scss';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {users, loading} = useSelector((state: any) => state.users);

  const fetchUsers = () => {
    dispatch(getListUsersSuccess());
  };

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className={Styles.home}>
      {!loading && <BoxUsers usersList={users.results} />}
    </div>
  )
}

export default Home;