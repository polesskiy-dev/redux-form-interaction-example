export const fakeAjax = (url, payload) => {
  console.log('send request to url %s with payload %O', url, payload);

  return (Math.random() >= 0.5)
    ? Promise.resolve('Successfully signed up!')
    : Promise.reject(new Error('Something goes wrong with server, please change your sign up information!'));
};
