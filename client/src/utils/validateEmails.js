// validate a comma seperated string of emails

const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // validate email regex

export default (emails) => {

  const invalidEmails = emails
                      .split(',')
                      .map(email => email.trim(','))
                      .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  // no invalid emails, return undefined
  return;

};