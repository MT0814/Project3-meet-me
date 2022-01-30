import React from 'react';
import { Link } from 'react-router-dom';
import userimg from '../../images/millie.JPG'
import Auth from '../../utils/auth';
import {
  Dropdown, Button, Icon, Modal, Image
} from 'semantic-ui-react'
import bunny from '../../images/bunny.png'
import ThoughtForm from '../ThoughtForm';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [open, setOpen] = React.useState(false)

  return (
    <header className="mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-main" to="/">
            <h1 className="m-0 meet-font">Impress ME</h1>
          </Link>
          <p className="m-0 text-light">Share the things you love as a Brand Ambassador</p>
        </div>

        <div>
          {
            Auth.loggedIn() ? (
              <Button className='mainColor'><Dropdown text='Menu'>
                <Dropdown.Menu>
                  <Modal
                    closeIcon
                    open={open}
                    trigger={<Dropdown.Item icon='add' text='New Post' style={{ color: 'rgb(85, 85, 85)' }} />}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                  >
                    <Modal.Header icon='archive' content='Create new post' />
                    <Modal.Content image>
                      <Image size='large' src={bunny} wrapped />
                      <Modal.Description>
                        <ThoughtForm></ThoughtForm>
                      </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>


                      <Button className='mainColor' type="submit">
                        <Icon name='add' /> Add Thought
                      </Button>
                      {/* <Button color='green' onClick={() => setOpen(false)}>
                        <Icon name='checkmark' /> Yes
                      </Button> */}
                    </Modal.Actions>
                  </Modal>

                  <Dropdown.Item className="text-main" to="/me" style={{ cursor: 'pointer' }} icon='user' text={Auth.getProfile().data.username} />
                  <Dropdown.Divider />
                  <Dropdown.Item icon='logout' text='Logout' style={{ color: 'rgb(85, 85, 85)' }} onClick={logout} className='fontColor' />
                </Dropdown.Menu>
              </Dropdown></Button>
            ) : (
              <></>
            )
          }
        </div>
      </div>
    </header >
  );
};

export default Header;



// {
//   Auth.loggedIn() ? (
//     <div className='display-flex'>
//       <div>
//         <Icon size='large' color='#ff889c' name='add circle' style={{ cursor: 'pointer' }}></Icon>
//       </div>
//       <Link className="text-main" to="/me" style={{ cursor: 'pointer' }}>
//         <div className="content">
//           <img className="ui avatar image" src={userimg} alt="user"></img>{Auth.getProfile().data.username}
//         </div>
//       </Link>

//       <p className="text-main" style={{ cursor: 'pointer' }} onClick={logout}>
//         Logout
//       </p>
//     </div>
//   ) : (
//     <>
{/* <Link className="btn mainColor btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn subColor  btn-lg btn-light m-2" to="/signup">
                Signup
              </Link> */}
//     </>
//   )
// }
