import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom';
import millie from '../../images/millie.JPG'
import im2 from '../../images/im1.png'
import lisa from '../../images/lisa.png'
import matt from '../../images/matt.jpeg'
import justin from '../../images/justin.jpeg'
import gal from '../../images/gal.jpeg'
import joe from '../../images/joe.jpeg'
import { Button, Dimmer, Header, Image, Icon, Modal, Comment, Form } from 'semantic-ui-react'

export default class Tile extends Component {


    state = {
        active: false,
        open: false
    }

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })


    render() {
        const { active, open } = this.state
        const content = (
            <div >

                <a className='mr-3 cardIcon' >
                    <Icon name='like' style={{ cursor: 'pointer' }}
                    />100

                </a>
                <Modal
                    closeIcon
                    open={open}
                    onClose={() => this.setState({ open: false })}
                    onOpen={() => this.setState({ open: true })}
                    trigger={
                        <a className='cardIcon'>

                            <Icon name='comment' style={{ cursor: 'pointer' }} />20

                        </a>}

                >
                    <Modal.Header className='username mt-3'><Image className="ui avatar image mr-3" src={millie} wrapped ui={false} fluid />Lisa <span className='user-space mr-3'>Follow</span></Modal.Header>
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
                                    <Comment.Avatar src={matt} />
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
                                    <Comment.Avatar src={joe} />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Joe</Comment.Author>
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
                                    <Comment.Avatar src={justin} />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Justin</Comment.Author>
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
                                    <Comment.Avatar src={gal} />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Gal</Comment.Author>
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
                            <Button content='Add Reply' labelPosition='left' icon='edit' className='mainColor' />
                        </Form>

                    </Modal.Actions>
                </Modal>
            </div >
        )

        return (
            <Dimmer.Dimmable
                as={Image}
                dimmed={active}
                dimmer={{ active, content }}
                onMouseEnter={this.handleShow}
                onMouseLeave={this.handleHide}
                size='large'
                src={im2}
            />
        )
    }
}