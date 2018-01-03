import { isEmail } from 'validator';
import { cond, eq, flow, trim, isEmpty, constant, stubTrue, noop } from 'lodash/fp';

import messages from './validation.messages';

export const required = flow(trim, cond([
  [isEmpty, constant(messages.enterValue)],
  [stubTrue, noop]
]));

export const email = cond([
  [isEmail, noop],
  [stubTrue, constant(messages.enterValidEmail)]
]);

export const samePassword = (confirmPassword, { password }) => cond([
  [eq(password), noop],
  [stubTrue, constant(messages.samePassword)]
])(confirmPassword);
