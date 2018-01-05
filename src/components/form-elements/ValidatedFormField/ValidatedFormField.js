import React from 'react';
import PropTypes from 'prop-types';
import { cond } from 'lodash/fp';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import './ValidationFormField.less';

import { shouldDisplayError, shouldDisplayErrorMessage } from '../../../helpers';

const ValidatedFormField = ({
  name, label, meta, children
}) => (
  <div className={classNames('validated-form-field', { 'has-error': shouldDisplayError({ ...meta }) })}>
    <label
      htmlFor={name}
      className="validated-form-field__label"
    >
      {label}
    </label>
    {children}
    <span className={classNames('validated-form-field__error-message', { 'validated-form-field__error-message_visible': shouldDisplayErrorMessage({ ...meta }) })}>
      {meta.error}
    </span>
  </div>
);

ValidatedFormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  meta: PropTypes.shape({
    active: PropTypes.bool,
    touched: PropTypes.bool,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
  }).isRequired,
  // forceValidationView: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

ValidatedFormField.defaultProps = {
  label: '',
  // forceValidationView: false
};

export default ValidatedFormField;
