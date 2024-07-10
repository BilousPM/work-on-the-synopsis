const UncontrolledForm = ({ onLogin }) => {
  const hendleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);

    // Посилання на DOM-елементи
    const { login, password } = e.target.elements;
    // Значення полів
    console.log(login.value, password.value);

    onLogin({ Login: login.value, Password: password.value });

    // Скидаємо значення полів після відправки
    e.target.reset();
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default UncontrolledForm;
