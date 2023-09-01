import axios from "axios";
import swAlert from "@sweetalert/with-react";

function Login() {
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    console.log(regexEmail.test(email));

    if (email === "" || password === "")
      swAlert(<h2>Los campos no pueden estar vacios!</h2>);

    if (email !== "" && !regexEmail.test(email))
      swAlert(<h2>Debes escribir una direccion de correo valida!</h2>);

    console.log(email, password);

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        swAlert(<h2>Se registro correctamente!</h2>);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <h2>Formulario de Login</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email: </label>
        <br />
        <input type="text" name="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input type="password" name="password" />
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </section>
  );
}
export default Login;
