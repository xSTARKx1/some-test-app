import React, { useEffect } from 'react';
import { FormControlLabel, Radio } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { RadioSection, TextInput } from '../index';
import {
  getRolesFromServer,
  getUserRoles,
} from '../../features/users/userRolesSlice';

import './index.scss';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const userRoles = useSelector(getUserRoles);

  useEffect(() => {
    dispatch(getRolesFromServer());
  }, [dispatch]);
  return (
    <section className='sign-up-section'>
      <h2 className='form-title'>Working with POST request</h2>
      <form className='form-wrapper'>
        <TextInput label='Your name' />
        <TextInput label='Email' />
        <TextInput label='Phone' />
        <RadioSection label='Select your position'>
          {userRoles.map(({ id, name }) => (
            <FormControlLabel
              key={id}
              value={name}
              control={<Radio />}
              label={name}
            />
          ))}
        </RadioSection>

        <label htmlFor='file-upload' className='custom-file-upload'>
          <span className='upload-button'>Upload</span>
          <span className='upload-input'>Upload your photo</span>
          <input
            type='file'
            id='file-upload'
            className='file-input'
            placeholder='Select photo'
          />
        </label>

        <div className='button-wrapper'>
          <button className='sign-up-button'>Sign up</button>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
