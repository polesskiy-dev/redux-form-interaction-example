import { isEmail } from 'validator';
import { cond, eq, flow, trim, isEmpty, constant, stubTrue, noop, size } from 'lodash/fp';

import messages from './validation.messages';

export const required = flow(trim, cond([
  [isEmpty, constant(messages.enterValue)],
  [stubTrue, noop]
]));

export const has4Length = cond([
  [flow(size, eq(4)), noop],
  [stubTrue, constant(messages.shouldHave4Length)]
]);

export const email = cond([
  [v => isEmail(v), noop],
  [stubTrue, constant(messages.enterValidEmail)]
]);

export const samePassword = (confirmPassword, { password }) => cond([
  [eq(password), noop],
  [stubTrue, constant(messages.samePassword)]
])(confirmPassword);
