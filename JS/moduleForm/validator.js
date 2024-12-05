 function emailValidator(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

 function passwordValidator(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!@#$%^_&*])(?=.{6,})/;
  return passwordRegex.test(password);
 }
   function identifiantValidator(identifiant) {
  const passwordRegex =
    /^([a-zA-Z0-9]{3,})/;
  return passwordRegex.test(identifiant);
}




export {
  emailValidator,
  passwordValidator,
  identifiantValidator,
};