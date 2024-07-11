import s from "./FormStyles.module.css";

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  // console.log("form submited");
  console.log(form);
  console.log(form.elements);
  console.log(form.elements.userName);
  const { userName, email, password } = form.elements;
  console.log({
    password: password.value,
    userName: userName.value,
    email: email.value,
  });
  form.reset();
};

const UnContrForm = () => {
  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            name="userName"
            type="text"
            placeholder="Enter yor first name..."
            className={s.input}
          ></input>
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            name="email"
            type="text"
            placeholder="Enter yor Email"
            className={s.input}
          ></input>
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input
            name="password"
            type="password"
            placeholder="Enter yor Password"
            className={s.input}
          ></input>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UnContrForm;
