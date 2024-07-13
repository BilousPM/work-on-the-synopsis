import { useEffect, useState } from "react";
import s from "../UncontrolledForm/FormStyles.module.css";

const ControlledForm = ({ register }) => {
  const [isShownPass, setIsShownPass] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
    country: "Ukraine",
    aboutMe: "",
    gender: "male",
    agree: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
    setFormData({
      userName: "",
      password: "",
      email: "",
      country: "Ukraine",
      aboutMe: "",
      gender: "male",
      agree: false,
    });
  };

  // const handleChangeUserName = (e) => {
  //   setFormData({ ...formData, userName: e.target.value });
  // };
  // const handleChangeUserEmail = (e) => {
  //   setFormData({ ...formData, email: e.target.value });
  // };
  // const handleChangeUserPassword = (e) => {
  //   setFormData({ ...formData, password: e.target.value });
  // };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    if (name === "agree") {
      return setFormData({ ...formData, agree: !formData.agree });
    }

    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };
  // Приклад валідації
  useEffect(() => {
    if (formData.userName === "Pedro") {
      alert("Petro is not valid user name");
    }
  });

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            onChange={handleChangeInput}
            value={formData.userName}
            name="userName"
            type="text"
            placeholder="Enter yor first name..."
            className={s.input}
          ></input>
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            onChange={handleChangeInput}
            value={formData.email}
            name="email"
            type="text"
            placeholder="Enter yor Email"
            className={s.input}
          ></input>
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input
            onChange={handleChangeInput}
            value={formData.password}
            name="password"
            type={isShownPass ? "text" : "password"}
            placeholder="Enter yor Password"
            className={s.input}
          ></input>
        </label>
        <button type="button" onClick={() => setIsShownPass((prev) => !prev)}>
          show password
        </button>
        <label className={s.label}>
          <span>Country</span>
          <select
            name="country"
            className={s.input}
            onChange={handleChangeInput}
            value={formData.country}
          >
            <option value="Ukraine">Ukraine</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </label>
        <label className={s.label}>
          <span>About me</span>
          <textarea
            name="aboutMe"
            value={formData.aboutMe}
            onChange={handleChangeInput}
          ></textarea>
        </label>{" "}
        <label>
          <input
            onChange={handleChangeInput}
            checked={formData.gender === "male"}
            type="radio"
            name="gender"
            value="male"
          />
          <span>Male</span>
          <input
            onChange={handleChangeInput}
            checked={formData.gender === "female"}
            type="radio"
            name="gender"
            value="female"
          />
          <span>Female</span>
        </label>
        <label>
          <input
            checked={formData.agree}
            type="checkbox"
            onChange={handleChangeInput}
            name="agree"
          />
          <span>Agrement</span>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ControlledForm;
