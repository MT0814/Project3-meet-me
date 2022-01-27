import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import loginImg from '../images/in2.webp'
import { Form, Button, Divider, Grid, Image } from 'semantic-ui-react'

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Grid>
      <Grid.Column width={8}>
        <Image src={loginImg} />
      </Grid.Column>
      <Grid.Column width={8}>
        <div className="ui center aligned basic segment">
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <Form onSubmit={handleFormSubmit}>
              <Form.Input
                // className="form-input"
                icon='mail'
                placeholder="mia@me.com"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <Form.Input
                // className="form-input"
                icon='lock'
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <Button
                className="ui mainColor submit button"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Login
              </Button>
            </Form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
          <Divider horizontal>Or</Divider>
          <Link className="ui subColor submit button" to="/signup">
            Signup
          </Link>
        </div>
      </Grid.Column>

    </Grid >


  );
};

export default Login;






    // <div class="ui segment">
    //   <div class="ui two column very relaxed grid">
    //     <div class="column">
    //       <img src={loginImg} width="100%" alt="influencer"></img>

    //     </div>
    //     <div class="column">
    //       <div className="ui center aligned basic segment">
    //         <div>
    //           {data ? (
    //             <p>
    //               Success! You may now head{' '}
    //               <Link to="/">back to the homepage.</Link>
    //             </p>
    //           ) : (
    //             <form onSubmit={handleFormSubmit}>
    //               <input
    //                 className="form-input"
    //                 placeholder="mia@me.com"
    //                 name="email"
    //                 type="email"
    //                 value={formState.email}
    //                 onChange={handleChange}
    //               />
    //               <input
    //                 className="form-input"
    //                 placeholder="******"
    //                 name="password"
    //                 type="password"
    //                 value={formState.password}
    //                 onChange={handleChange}
    //               />
    //               <button
    //                 className="ui mainColor submit button"
    //                 style={{ cursor: 'pointer' }}
    //                 type="submit"
    //               >
    //                 Login
    //               </button>
    //             </form>
    //           )}

    //           {error && (
    //             <div className="my-3 p-3 bg-danger text-white">
    //               {error.message}
    //             </div>
    //           )}
    //         </div>
    //         <div className="ui horizontal divider">
    //           Or
    //         </div>
    //         <Link className="ui subColor submit button" to="/signup">
    //           Signup
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="ui vertical divider">
    //     join
    //   </div>
    // </div>