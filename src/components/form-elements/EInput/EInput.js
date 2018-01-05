import React from 'react';
import Input from 'antd/lib/input';

import ValidatedFormField from '../ValidatedFormField/ValidatedFormField';

const ValidatedInput = ({
  type, name, input, ...restProps
}) => (
  <ValidatedFormField
    name={name || input.name}
    {...restProps}
  >
    <Input
      size="large"
      type={type}
      {...input}
    />
  </ValidatedFormField>
);

// TODO prop types

export default ValidatedInput;
