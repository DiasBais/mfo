import React from 'react';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
// import {validEmail, requiredd, iinValidation} from '../../defaults/validations';
import axios from 'axios'
import {Formik, Form, ErrorMessage, FieldArray, Field} from 'formik';
import Link from 'next/link'

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      message: null,
      errorMessage: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 async handleSubmit(values) {
   this.setState({
     btnLoading:true
   })
   axios.post(`https://api.money-men.kz/api/password/create`, values)
    .then((response) => {
      console.log(response)
      this.setState({
        btnLoading: false,
        message: response.data.message
      })

    })
    .catch((error) => {
      this.setState({
        btnLoading: false,
        errorMessage: error.response.data.message
      })
    });
  }
  render() {
    return (
      <div>
        <section className="otherPages">
          <div className="container">
            <section className="oplata feedback row">
              <div className=" oplate--form feedbackForm">
              <nav aria-label="container breadcrumb">
                <ol className="breadcrumb text-center">
                  <li className="breadcrumb-item "><AppLink className='br-item' href='/login'>Личный кабинет</AppLink></li>

                  <li className="breadcrumb-item active" aria-current="page">Сброс пароля</li>
                </ol>
              </nav>
                <Formik
                  initialValues={{
                    username: '',
                    password: "",
                  }}
                  onSubmit={values=> {
                    this.handleSubmit(values)
                  }}
                >
                {({ errors, touched, isValidating, isSubmitting }) =>(
                  <Form className="oplataform">

                <h2 className="text-center mb-5">Сброс пароля</h2>
                    {this.state.message !== null ?
                      <div className="alert alert-success" role="alert">
                        <strong> {this.state.message}</strong>
                      </div> : null
                    }
                    {this.state.errorMessage !== null ?
                      <div className="alert alert-danger" role="alert">
                        <strong> {this.state.errorMessage}</strong>
                      </div> : null
                    }

                   <div className='input-group'>
                    <label htmlFor="email">
                      <h2>Email адрес:</h2>
                    </label>
                      <Field name='email' type='email' placeholder="Ваш email адрес"/>
                   </div>
                   <div className="buttonForm">
                      {this.state.btnLoading === true ?
                      <Spinner className="loading" size={200} spinnerColor={"#ef2221"} spinnerWidth={2} visible={true} /> :
                      <button className="loginbutton" type="submit">Сбросить</button>}
                    </div>
                  </Form>
                )}
                </Formik>
              </div>
            </section>
          </div>
        </section>
      </div>
      );
    }
  }

export default Login