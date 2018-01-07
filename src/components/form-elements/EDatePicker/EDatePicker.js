import React from 'react';
import PropType from 'prop-types';
import DatePicker from 'antd/lib/date-picker';

import ValidatedFormField from '../ValidatedFormField/ValidatedFormField';

const EDatePicker = ({ name, input, ...restProps }) => (
  <ValidatedFormField
    name={name || input.name}
    {...restProps}
  >
    <DatePicker
      size="large"
      {...input}
    />
  </ValidatedFormField>
);

EDatePicker.propTypes = {
  name: PropType.string,
  input: PropType.shape({
    name: PropType.string,
    onChange: PropType.func
  }).isRequired
};

EDatePicker.defaultProps = {
};

export default EDatePicker;
