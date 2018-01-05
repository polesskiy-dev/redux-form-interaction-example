import React from 'react';
import PropType from 'prop-types';
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

ValidatedFormField.propTypes = {
  name: PropType.string,
  input: PropType.shape({
    name: PropType.string,
    onChange: PropType.func
  }).isRequired,
  type: PropType.string,
};

ValidatedFormField.defaultProps = {
  type: 'text',
};

export default ValidatedInput;
