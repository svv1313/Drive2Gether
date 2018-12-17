import React, { Component } from "react";
import LogoInForm from "../components/LogoInForm";
import InputField from "../components/InputField";
import '../style/Registration.css'
import ButtonForm from "../components/ButtonForm";

class RegistrationPage extends Component {
  state = {
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
  };

  componentWillMount = () => {};

  onChangeValue = evt => {
    let { name, value } = evt.target;

    const data = { [name]: value };
    this.setState({ ...data });
  };

  render() {
    const { username, password, passwordConfirm, email } = this.state;
    const { onChangeValue } = this;
    const formType = 'registration';
    return (
        <section className='registration'>
          <LogoInForm/>
          <div className='registrationForm row'>
            <form className='container col-4'>
              <InputField
                  name='username'
                  type='name'
                  id='username'
                  placeholder='Имя'
                  formType={formType}
                  value={username}
                  onChangeValue={onChangeValue}
              />
              <InputField
                  name='password'
                  type='password'
                  id='password'
                  placeholder='Пароль'
                  formType={formType}
                  value={password}
                  onChangeValue={onChangeValue}
              />
              <InputField
                  name='passwordConfirm'
                  type='password'
                  id='passwordConfirm'
                  placeholder='Подтверждение пароля'
                  formType={formType}
                  value={passwordConfirm}
                  onChangeValue={onChangeValue}
              />
              <InputField
                  name='email'
                  type='email'
                  id='email'
                  placeholder='E-mail'
                  formType={formType}
                  value={email}
                  onChangeValue={onChangeValue}
              />
              <ButtonForm placeholder='Регистрироваться'/>
            </form>
          </div>
        </section>
    );
  }
}

export default RegistrationPage;
