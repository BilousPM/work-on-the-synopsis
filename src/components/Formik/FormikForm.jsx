import { Field, Form, Formik } from "formik";
import s from "./FormikForm.module.css";

const FormikForm = () => {
  const initialValues = {
    name: "",
    surname: "",
    age: "",
    email: "",
    role: "user",
    about: "",
  };
  const handleSubmit = (data, actions) => {
    console.log(data);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <div className={s.formwrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" className={s.input} />
          </label>
          <label className={s.label}>
            <span>Surname:</span>
            <Field name="surname" className={s.input} />
          </label>
          <label className={s.label}>
            <span>Age:</span>
            <Field name="age" className={s.input} />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field name="email" className={s.input} type="email" />
          </label>
          <label className={s.label}>
            <span>Role</span>
            <Field as="select" name="role" className={s.input}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Field>
          </label>
          <label className={s.label}>
            <span>About</span>
            <Field name="about" as="textarea" className={s.input}></Field>
          </label>
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
