export const shouldDisplayError = ({
  active, touched, invalid, submitting
}) => {
  if (active) return false;
  if (invalid && submitting) return true;
  if (invalid && touched) return true;
  return false;
};
