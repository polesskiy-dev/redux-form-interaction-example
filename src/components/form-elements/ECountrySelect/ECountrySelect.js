import React from 'react';
import PropType from 'prop-types';
import Select from 'antd/lib/select';

import ValidatedFormField from '../ValidatedFormField/ValidatedFormField';
import messages from './ECountrySelect.messages';

const { Option } = Select;

const ECountrySelect = ({ name, input, ...restProps }) => (
  <ValidatedFormField
    name={name || input.name}
    {...restProps}
  >
    <Select
      size="large"
      style={{ display: 'block' }}
      defaultValue={messages.USA}
      {...input}
    >
      <Option value={messages.USA}>{messages.USA}</Option>
      <Option value={messages.Canada}>{messages.Canada}</Option>
      <Option value={messages.Other}>{messages.Other}</Option>
    </Select>
  </ValidatedFormField>
);

ECountrySelect.propTypes = {
  name: PropType.string,
  input: PropType.shape({
    name: PropType.string,
    onChange: PropType.func
  }).isRequired,
  type: PropType.string,
};

ECountrySelect.defaultProps = {
  type: 'text',
};

export default ECountrySelect;

