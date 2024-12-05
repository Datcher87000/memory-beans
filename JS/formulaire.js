import {
  emailValidator,
  passwordValidator,
  identifiantValidator,
} from "./moduleForm/validator.js";
import { displayFieldError, clearFieldErrors } from "./moduleForm/errorMsg.js";


function handleSubmit(event) {
    event.preventDefault();
    clearFieldErrors();

    const formData = {
      identifiant: document.getElementById("identifiant").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    
    let hasError = false;

     if (!emailValidator(formData.email)) {
       displayFieldError("email", "Email invalide");
       hasError = true;
     }

     if (!passwordValidator(formData.password)) {
       displayFieldError(
         "password",
         "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule , un chiffre et un caractère spécial"
       );
       hasError = true;
     }
     if (!identifiantValidator(formData.identifiant)) {
       displayFieldError("identifiant", "Veuillez renseigner un identifiant");
     }
      if (hasError) {
        return;
      }
          saveToLocalStorage(formData);
    alert('Inscription réussie !');
    event.currentTarget.reset();

}
document.getElementById('userForm').addEventListener('submit', handleSubmit)

    