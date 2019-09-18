import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class Playlist extends Component {
    state = {
        songs: [
            { id: uuid(), name: 'Timezones' },
            { id: uuid(), name: 'Miss Me?' },
            { id: uuid(), name: 'Youth Water' },
            { id: uuid(), name: 'Silver Skies' },
        ]
    }

    render() {
        const { songs } = this.state;
        return(
            <Container>
                <Button color="dark" style={{margonBottom: '2rem'}} onClick={() => {
                    const name = prompt('Enter Song');
                    if(name) {
                        this.setState(state => ({
                            songs: [...state.songs, { id: uuid(), name}]
                        }));
                    }
                }}>Add Song</Button>

                <ListGroup>
                    <TransitionGroup className="playlist">
                        {songs.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                songs: state.songs.filter(song => song.id !== id)
                                            }));
                                        }}>&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default Playlist;