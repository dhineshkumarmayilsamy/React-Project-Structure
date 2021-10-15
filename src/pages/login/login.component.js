import React from 'react';
import LoginForm from './login-form.component';

const LoginPage = ({ classNamees }) => {
  console.log(classNamees);
  return (
    <section className="text-center">
      <LoginForm></LoginForm>
    </section>
  );
};

export default LoginPage;