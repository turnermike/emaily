// validate a single email address

const re = /^.+@[^.].*\.[a-z]{2,}$/;

export default (email) => {

  const validEmail = re.test(email);
  // console.log('validEmail', validEmail);

  if ( ! validEmail) {
    return `The email addres is invalid: ${email}`;
  }

  // no invalid emails, return undefined
  return;

};