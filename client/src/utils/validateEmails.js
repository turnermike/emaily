// validate a comma seperated string of emails

const re = /^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/;

export default (emails) => {

  const invalidEmails = emails
                      .split(',')
                      .map(email => email.trim(','))
                      .filter(email => re.test(email) === false);
  // console.log('invalidEmails', invalidEmails);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  // no invalid emails, return undefined
  return;

};