import React from 'react';
import TextField from '@mui/material/TextField';

import './index.scss';

const TextInput = (props) => {
  const {
    label,
    value,
    onChange,
    name,
    errors,
    touched,
    helperText = '',
  } = props;
  return (
    <TextField
      className='text-field'
      label={label}
      name={name}
      error={errors[name] && touched[name]}
      helperText={errors[name] && touched[name] ? errors[name] : helperText}
      variant='outlined'
      fullWidth
      color='primary'
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
