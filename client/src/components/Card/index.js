import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import millie from '../../images/millie.JPG'
import im2 from '../../images/im1.png'

function Card({ thought, showUsername }) {
    return (
        <div class="ui grid">
            <div class="three column row">
                <div class="column">
                    <div className="ui card" key={thought._id} >
                        <div className="content">
                            <img className="ui avatar image" src={millie}></img> Millie
                        </div>
                        <div className="image">
                            <img src={im2} alt="emily"></img>
                        </div>
                        <div className="content">
                            <span className="right floated">
                                <i className="heart outline like icon"></i>
                                17 likes
                            </span>
                            <i className="comment icon"></i>
                            3 comments
                        </div>
                        <div className="extra content">
                            <div className="ui large transparent left icon input">
                                <i className="heart outline icon"></i>
                                <input type="text" placeholder="Add Comment..."></input>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card


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