import React from 'react';
import PropTypes from 'prop-types';
import { cond } from 'lodash/fp';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { shouldDisplayError, shouldDisplayErrorMessage } from '../../../helpers';

const ValidatedFormField = ({
  name, label, meta, children
}) => (
  <div className={classNames({ 'has-error': shouldDisplayError({ ...meta }) })}>
    <label htmlFor={name}>
      {label}
    </label>
    {children}
    {shouldDisplayErrorMessage({ ...meta }) && (
      <span>
        {meta.error}
      </span>
    )}
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
