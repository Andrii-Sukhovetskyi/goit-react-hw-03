import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ContactForm = ({ handleAddContact }) => {
  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={({ name, number }, actions) => {
          handleAddContact({
            id: nanoid(),
            name,
            number,
          });
          actions.resetForm();
        }}
        validationSchema={contactSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name"></Field>
            <ErrorMessage name="name" component="span" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number"></Field>
            <ErrorMessage name="number" component="span" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;