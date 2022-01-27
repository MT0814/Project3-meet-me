import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';
import {
  Dropdown, Button, Icon, Modal, Image, Input, Segment,
  Divider, Tab, Message, Form
} from 'semantic-ui-react'

import Auth from '../../utils/auth';

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
  };


  const fileInputRef = React.createRef();
  const onFormSubmit = e => {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
    });
  };

  const fileChange = e => {
    this.setState({ file: e.target.files[0] }, () => {
      console.log("File chosen --->", this.state.file);
    });
  };

  // const fileUpload = file => {
  //   const url = "/some/path/to/post";
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   const config = {
  //     headers: {
  //       "Content-type": "multipart/form-data"
  //     }
  //   };
  //   return put(url, formData, config);
  // };

  // const  fileExport = file => {
  //   // handle save for export button function
  // };

  return (
    <div>
      {/* <h3>What's on your mind?</h3> */}

      {Auth.loggedIn() ? (
        <>

          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12">
              {/* <Button
                content="Choose File"
                labelPosition="left"
                icon="file"
              onClick={() => this.fileInputRef.current.click()}
              /> */}
              <Input
                // ref={this.fileInputRef}
                type="file"
                hidden
                className='mainColor'
              // onChange={this.fileChange}
              />
              <textarea
                name="thoughtText"
                placeholder="Here's a new thought..."
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
              <p
                className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
                  }`}
              >
                Character Count: {characterCount}/280
              </p>
            </div>

            {/* <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Thought
              </button>
            </div> */}
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ThoughtForm;
