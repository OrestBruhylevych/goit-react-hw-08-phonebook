import { StyledForm, ErrorText } from '../components/Form/MyForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().required('Name is required'),
  password: Yup.string().required('Number is required'),
  name: Yup.string().required('Number is required'),
});

export default function RegisterPage() {
  return (
    <div>
      <h1>Register Page</h1>

      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        <StyledForm autoComplete="off">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" required />
          <ErrorMessage
            name="name"
            render={message => <ErrorText>{message}</ErrorText>}
          />
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" required />
          <ErrorMessage
            name="email"
            render={message => <ErrorText>{message}</ErrorText>}
          />

          <label htmlFor="password">Password</label>
          <Field name="password" required />
          <ErrorMessage
            name="password"
            render={message => <ErrorText>{message}</ErrorText>}
          />

          <button type="submit">LogIn</button>
        </StyledForm>
      </Formik>
    </div>
  );
}
