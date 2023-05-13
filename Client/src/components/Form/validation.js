const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var regexPassword =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

export default function validation(userData, errors, setErrors) {
  if (!userData.email) {
    setErrors({ ...errors, email: "The text field is empty" });
  } else if (userData.email.length > 36) {
    setErrors({ ...errors, email: "Cannot be more than 35 characters" });
  } else if (!regexEmail.test(userData.email)) {
    setErrors({ ...errors, email: "Not recognized as an email" });
  } else {
    setErrors({ ...errors, email: "" });
  }

  if (!userData.password) {
    setErrors({ ...errors, password: "The text field is empty" });
  } else if (userData.password.length < 7 || userData.password.length > 16) {
    setErrors({ ...errors, password: "invalid password length" });
  } else if (!regexPassword.test(userData.password)) {
    setErrors({
      ...errors,
      password:
        "Must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
    });
  } else {
    setErrors({ ...errors, password: "" });
  }
}
