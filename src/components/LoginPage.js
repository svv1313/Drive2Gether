import React, { Component } from "react";
import '../style/Login.css'
import InputField from '../components/InputField'
import LogoInForm from '../components/LogoInForm'
import ButtonForm from "../components/ButtonForm";

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  componentWillMount = () => {};

  onChangeValue = evt => {
    let { name, value } = evt.target;

    const data = { [name]: value };
    this.setState({ ...data });
  };

  render() {
    const { username, password } = this.state;
    const { onChangeValue } = this;
    const formType = 'login';
    return (
      <section className='login'>
        <LogoInForm/>
        <div className='loginForm row'>
          <form className='container col-4'>
            <InputField
              name='username'
              type='name'
              id='username'
              formType={formType}
              placeholder='Имя'
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
            <span className='loginForm__passwordForgot'>Забыли пароль?</span>
            <ButtonForm placeholder='Логин'/>
            <div className='loginForm_createAccount'>
              <span>Еще не зарегистрировались?</span><span className='loginForm_createAccount__singUp'>Регистрация</span>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default LoginPage;
