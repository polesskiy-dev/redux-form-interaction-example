export const shouldDisplayError = ({
  active, touched, invalid, submitting
}) => {
  if (active) return false;
  // if (invalid && submitting) return true;
  if (invalid && touched) return true;
  return false;
};

export const shouldAsyncValidate = asyncBlurFields => ({
  syncValidationPasses, trigger, pristine, initialized, blurredField
}) => {
  if (!asyncBlurFields.includes(blurredField)) return false;

  if (!syncValidationPasses) {
    return false;
  }
  switch (trigger) {
  case 'blur':
    return true;
  case 'submit':
    // submitting, so only async validate if form is dirty or was never initialized
    // conversely, DON'T async validate if the form is pristine just as it was
    // initialized
    return !pristine || !initialized;
  default:
    return false;
  }
};
