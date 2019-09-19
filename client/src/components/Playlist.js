import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getSongs, deleteSong } from '../actions/songActions';
import PropTypes from 'prop-types'

class Playlist extends Component {
    static propTypes = {
        getSongs: PropTypes.func.isRequired,
        song: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getSongs();
    }

    onDeleteClick = id => {
        this.props.deleteSong(id);
    };

    render() {
        const { songs } = this.props.song;
        return(
            <Container>
                { this.props.isAuthenticated ? (
                    <ListGroup>
                        <TransitionGroup className="playlist">
                                {songs.map(({ _id, name}) => (
                                    <CSSTransition key={_id} timeout={500} classNames="fade">
                                        <ListGroupItem>
                                            <Button className="remove-btn" color="danger" size="sm"
                                                onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                                            {name}
                                        </ListGroupItem>
                                    </CSSTransition>
                                ))}
                        </TransitionGroup>
                    </ListGroup>
                ) : null}
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    song: state.song,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(
    mapStateToProps, 
    { getSongs, deleteSong }
)(Playlist);