import React from 'react';
import { FormControlLabel, Radio } from '@mui/material';

import { RadioSection, TextInput } from '../index';

import './index.scss';

const SignUpForm = () => {
  return (
    <section className='sign-up-section'>
      <h2 className='form-title'>Working with POST request</h2>
      <form className='form-wrapper'>
        <TextInput label='Your name' />
        <TextInput label='Email' />
        <TextInput label='Phone' />
        <RadioSection label='Select your position'>
          <FormControlLabel
            value='Frontend developer'
            control={<Radio />}
            label='Frontend developer'
          />
          <FormControlLabel
            value='Backend developer'
            control={<Radio />}
            label='Backend developer'
          />
          <FormControlLabel
            value='Designer'
            control={<Radio />}
            label='Designer'
          />
          <FormControlLabel value='QA' control={<Radio />} label='QA' />
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
