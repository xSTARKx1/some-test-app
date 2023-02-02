import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { Card } from '../index';
import {
  getTokenFromServer,
  getUsersAsync,
  isShowLoader,
  loadMoreUser,
  selectUsers,
  showLoadMoreButton,
} from '../../features/users/usersSlice';

import './index.scss';

const CardList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loadStatus = useSelector(isShowLoader);
  const showButton = useSelector(showLoadMoreButton);

  useEffect(() => {
    dispatch(getUsersAsync(1));
    dispatch(getTokenFromServer());
  }, [dispatch]);

  return (
    <section className='card-list-section'>
      <h2 className='card_list-title'>Working with GET request</h2>
      {loadStatus === 'loading' ? (
        <div className='card-spinner'>
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className='card-list'>
            {users.map((user) => (
              <Card key={user.id} user={user} />
            ))}
          </div>
          <div className='button-wrapper'>
            {showButton ? (
              <button
                className='button'
                type='button'
                onClick={() => dispatch(loadMoreUser())}
              >
                Show more
              </button>
            ) : null}
          </div>
        </>
      )}
    </section>
  );
};

export default CardList;
