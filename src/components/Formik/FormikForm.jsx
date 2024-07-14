import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./FormikForm.module.css";
import * as Yup from "yup";

const FormikForm = () => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .min(3, "Name must be more than 3 charts!")
      .max(15, " Name must be lesa than 20 charts!")
      .matches(/^[a-zA-Z]+$/, "Must be only chars!"),
    surname: Yup.string()
      .required("This field is required")
      .min(3, "Surname must be more than 3 charts!")
      .max(15, " Surname must be lesa than 20 charts!"),
    age: Yup.number()
      .required("This field is required")
      .min(14, "You must be more than 14 years!")
      .max(100, "Woow so slow!"),
    role: Yup.string().oneOf(["user", "admin"]),
    email: Yup.string()
      .required("This field is required")
      .email("Email is not valid!"),
  });

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
    // console.log(actions);
    actions.resetForm();
  };

  return (
    <div className={s.formwrapper}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Surname:</span>
            <Field name="surname" className={s.input} />
            <ErrorMessage name="surname" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Age:</span>
            <Field name="age" className={s.input} />
            <ErrorMessage name="age" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field name="email" className={s.input} type="email" />
            <ErrorMessage
              name="email"
              component="span"
              className={s.error}
            />{" "}
          </label>
          <label className={s.label}>
            <span>Role</span>
            <Field as="select" name="role" className={s.input}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Field>
            <ErrorMessage name="role" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>About</span>
            <Field name="about" as="textarea" className={s.input}></Field>
            <ErrorMessage name="about" component="span" className={s.error} />
          </label>
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
