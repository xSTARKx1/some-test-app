import React, { useEffect, useState } from 'react';
import { FormControlLabel, Radio } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { RadioSection, TextInput } from '../index';
import {
  getRolesFromServer,
  getUserRoles,
} from '../../features/users/userRolesSlice';
import {
  loadMoreUser,
  refreshUserList,
  token,
} from '../../features/users/usersSlice';
import { signUp } from '../../features/users/usersAPI';

import './index.scss';

const SignUpForm = (props) => {
  const { setIsUserCreated } = props;
  const dispatch = useDispatch();
  const userRoles = useSelector(getUserRoles);
  const serverToken = useSelector(token);

  useEffect(() => {
    dispatch(getRolesFromServer());
  }, [dispatch]);

  const sendDataToServer = async (data) => {
    try {
      await signUp(data, serverToken);
      handleReset(values);
    } catch (e) {}
  };

  const [photo, setPhoto] = useState(null);
  const phonePattern = /^[+]{0,1}380([0-9]{9})$/;

  const { handleChange, values, handleSubmit, errors, touched, handleReset } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        phone: '',
        position_id: 1,
        photo: photo,
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required('Required')
          .min(2, 'Too short!')
          .max(100, 'Too long!'),
        email: Yup.string()
          .email('Invalid email address!')
          .required('Required')
          .min(2, 'Too short!')
          .max(100, 'Too long!'),
        phone: Yup.string()
          .matches(phonePattern, 'Phone number is not valid')
          .required('Phone is required'),
        photo: Yup.mixed().nullable().required('Photo is required'),
      }),
      onSubmit: (values) => {
        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('position_id', values.position_id);
        sendDataToServer(formData)
          .then(() => setIsUserCreated((prev) => !prev))
          .then(() => {
            dispatch(refreshUserList());
            dispatch(loadMoreUser());
          });
      },
    });

  return (
    <section className='sign-up-section'>
      <h2 className='form-title'>Working with POST request</h2>
      <form className='form-wrapper' onSubmit={handleSubmit}>
        <TextInput
          label='Your name'
          name={'name'}
          value={values.name}
          onChange={handleChange}
          errors={errors}
          touched={touched}
        />
        <TextInput
          label='Email'
          name={'email'}
          value={values.email}
          onChange={handleChange}
          errors={errors}
          touched={touched}
        />
        <TextInput
          label='Phone'
          name={'phone'}
          helperText='+38 (XXX) XXX - XX - XX'
          value={values.phone}
          onChange={handleChange}
          errors={errors}
          touched={touched}
          className={'last-input'}
        />
        <RadioSection
          label='Select your position'
          value={values.position_id}
          onChange={handleChange}
        >
          {userRoles.map(({ id, name }) => (
            <FormControlLabel
              key={id}
              name={'position_id'}
              value={id}
              control={<Radio />}
              label={name}
            />
          ))}
        </RadioSection>

        <label htmlFor='file-upload' className='custom-file-upload'>
          <span
            className={
              Object.keys(errors).includes('photo') &&
              Object.keys(touched).includes('photo')
                ? 'upload-button-error'
                : 'upload-button'
            }
          >
            Upload
          </span>
          <span
            className={
              Object.keys(errors).includes('photo') &&
              Object.keys(touched).includes('photo')
                ? 'upload-input-error'
                : 'upload-input'
            }
          >
            {photo ? photo.name : 'Upload your photo'}
          </span>
          <input
            type='file'
            id='file-upload'
            className='file-input'
            accept='image/jpg, image/jpeg'
            name='photo'
            onChange={(e) => {
              values.photo = e.target.files[0];
              setPhoto(e.target.files[0]);
            }}
          />
        </label>
        {Object.keys(errors).includes('photo') &&
        Object.keys(touched).includes('photo') ? (
          <div className='helper-text'>Photo is required</div>
        ) : null}

        <div className='button-wrapper'>
          <button
            className={
              !Object.keys(errors).length || !Object.keys(touched).length
                ? 'sign-up-button active'
                : 'sign-up-button disable'
            }
            type='submit'
          >
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
