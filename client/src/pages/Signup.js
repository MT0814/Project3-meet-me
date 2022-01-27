import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Segment placeholder>
        <Grid columns={1} relaxed='very' stackable>
          <Grid.Column>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (

              <Form onSubmit={handleFormSubmit}>
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  label='Username'
                  // className="form-input"
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <Form.Input
                  icon='mail'
                  iconPosition='left'
                  label='Email'
                  // className="form-input"
                  placeholder="mia@me.com"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  label='Password'
                  type='password'
                  // className="form-input"
                  placeholder="******"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                />

                <Button content='Sign up' className='mainColor'
                  style={{ cursor: 'pointer' }}
                  type="submit" />
              </Form>


            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}

          </Grid.Column>
        </Grid>

      </Segment>

    </div >

  );



};

export default Signup;



/* <main className="flex-row justify-center mb-4">
  <div className="col-12 col-lg-10">
    <div className="card">
      <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
      <div className="card-body">
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Your username"
              name="username"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button
              className="btn btn-block btn-primary"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </div>
    </div>
  </div>
</main> */