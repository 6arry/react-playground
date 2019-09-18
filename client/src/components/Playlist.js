import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getSongs, deleteSong } from '../actions/songActions';
import PropTypes from 'prop-types'

class Playlist extends Component {

    componentDidMount() {
        this.props.getSongs();
    }

    onDeleteClick =(id) => {
        this.props.deleteSong(id)
    }

    render() {
        const { songs } = this.props.song;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="playlist">
                        {songs.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm"
                                        onClick={this.onDeleteClick.bind(this, id)}>&times;</Button>
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

Playlist.propTypes = {
    getSongs: PropTypes.func.isRequired,
    song: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    song: state.song
})
export default connect(mapStateToProps, { getSongs, deleteSong })(Playlist);