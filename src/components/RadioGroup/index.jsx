import React from 'react';
import { FormControl, FormLabel, RadioGroup } from '@mui/material';

import './index.scss';

const RadioSection = (props) => {
  const { children, value, label, onChange } = props;
  return (
    <FormControl className='radio-group-wrapper'>
      <FormLabel id='radio-buttons-group-label'>{label}</FormLabel>
      <RadioGroup
        aria-labelledby='radio-buttons-group-label'
        name='radio-buttons-group'
        value={value}
        onChange={onChange}
      >
        {children}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioSection;
