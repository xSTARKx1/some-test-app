import React from 'react';
import { FormControl, FormLabel, RadioGroup } from '@mui/material';

import './index.scss';

const RadioSection = (props) => {
  const { children, value, label } = props;
  return (
    <FormControl className='radio-group-wrapper'>
      <FormLabel id='radio-buttons-group-label'>{label}</FormLabel>
      <RadioGroup
        aria-labelledby='radio-buttons-group-label'
        // defaultValue='female'
        name='radio-buttons-group'
        value={value}
        onChange={(e) => console.log(e.target.value)}
      >
        {children}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioSection;
