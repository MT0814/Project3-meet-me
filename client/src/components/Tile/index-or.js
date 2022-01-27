import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import millie from '../../images/millie.JPG'
import im2 from '../../images/im1.png'
import lisa from '../../images/lisa.png'

import { Card, Icon, Image, Button, Modal, Comment, Form, Header, Dimmer } from 'semantic-ui-react'
import ThoughtList from '../ThoughtList';




function Tile({ thought, showUsername }) {
    const [open, setOpen] = React.useState(false)


    return (

        <Card key={thought._id}>

            <Image src={im2} wrapped ui={false} />
            <Card.Content extra>
                <span className="right floated">
                    <a>
                        <Icon name='like'
                        />100

                    </a>
                </span>
                <Modal
                    closeIcon
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    trigger={
                        <a>

                            <Icon name='comment' style={{ cursor: 'pointer' }} />20

                        </a>}

                >
                    <Modal.Header ><Image className="ui avatar image mr-3" src={millie} wrapped ui={false} />Lisa</Modal.Header>
                    <Modal.Content image scrolling>
                        <Image size='large' src={lisa} wrapped />
                        <Modal.Description>
                            <p>
                                This is an example of expanded content that will cause the modal's
                                dimmer to scroll.
                            </p>
                            <Comment.Group>
                                <Header as='h3' dividing>
                                    Comments
                                </Header>

                                <Comment>
                                    <Comment.Avatar src='/images/avatar/small/matt.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Matt</Comment.Author>
                                        <Comment.Metadata>
                                            <div>Today at 5:42PM</div>
                                        </Comment.Metadata>
                                        <Comment.Text>How artistic!</Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                                <Comment>
                                    <Comment.Avatar src='/images/avatar/small/joe.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                        <Comment.Metadata>
                                            <div>5 days ago</div>
                                        </Comment.Metadata>
                                        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                                <Comment>
                                    <Comment.Avatar src='/images/avatar/small/joe.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                        <Comment.Metadata>
                                            <div>5 days ago</div>
                                        </Comment.Metadata>
                                        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                                <Comment>
                                    <Comment.Avatar src='/images/avatar/small/joe.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                        <Comment.Metadata>
                                            <div>5 days ago</div>
                                        </Comment.Metadata>
                                        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                                <Comment>
                                    <Comment.Avatar src='/images/avatar/small/joe.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                        <Comment.Metadata>
                                            <div>5 days ago</div>
                                        </Comment.Metadata>
                                        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                                <Comment>
                                    <Comment.Avatar src='/images/avatar/small/joe.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                        <Comment.Metadata>
                                            <div>5 days ago</div>
                                        </Comment.Metadata>
                                        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>


                            </Comment.Group>
                        </Modal.Description>

                    </Modal.Content>
                    <Modal.Actions>
                        <Form reply>
                            <Form.TextArea />
                            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                        </Form>

                    </Modal.Actions>
                </Modal>

            </Card.Content>



        </Card >


    )
}



export default Tile

/* <div className="right floated meta">
                {showUsername ? (
                    <Link
                        className="text-light"
                        to={`/profiles/${thought.thoughtAuthor}`}
                    >
                        {thought.thoughtAuthor} <br />
                        <span style={{ fontSize: '1rem' }}>
                            had this thought on {thought.createdAt}
                        </span>
                    </Link>
                ) : (
                    <>
                        <span style={{ fontSize: '1rem' }}>
                            You had this thought on {thought.createdAt}
                        </span>
                    </>
                )}
            </div> */



            // to="/thoughts/:thoughtId"