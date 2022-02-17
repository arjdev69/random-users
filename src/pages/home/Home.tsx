import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import _ from 'lodash'
import {scrollToBottom} from '@/utils'

import { getListUsersSuccess } from '@/store/modules/users/actions'

import { BoxUsers } from '@/container'

import Styles from './home-styles.scss';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: any) => state.users);
  const [usersList, setListUsers] = useState([])

  const fetchUsers = () => {
    dispatch(getListUsersSuccess());
  };

  useEffect(() => {
    scrollToBottom("contentBox")

    if (!_.isEmpty(users)) {
      setListUsers([
        ...usersList,
        ...users.results
      ])
    }
  }, [users])

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className={Styles.home}>
      <BoxUsers
        isLoading={loading}
        usersList={usersList}
        callback={fetchUsers}
        clear={() => {
          setListUsers(usersList.slice(0, usersList.length - 1))
        }}
      />
    </div>
  )
}

export default Home;