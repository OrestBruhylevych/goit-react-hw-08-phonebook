import { StyledForm, ErrorText } from '../components/Form/MyForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().required('Name is required'),
  password: Yup.string().required('Number is required'),
});

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        <StyledForm autoComplete="off">
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
