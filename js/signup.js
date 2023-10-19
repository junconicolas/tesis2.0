const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const apellido = document.querySelector("#apellido").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const sexo = document.querySelector("#sexo").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = Users.find((user) => user.email === email);
  if (isUserRegistered) {
    return alert("El usuario ya esta registrado");
  }

  Users.push({
    name: name,
    apellido: apellido,
    email: email,
    password: password,
    sexo: sexo,
  });

  localStorage.setItem("users", JSON.stringify(Users));
  alert("Registro exitoso");

  window.location.href = "login.html";
  ("C:Users\nicojOneDriveEscritorioDesarrollo Front-end\tesis.1login.html");
});
