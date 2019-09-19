import React, { Component } from 'react';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody,
    Input, 
    Label, 
    Form, 
    FormGroup 
} from 'reactstrap';
import { connect } from  'react-redux';
import { addSong } from '../actions/songActions';
import PropTypes from 'prop-types';

class SongModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        
        const newSong = {
            name: this.state.name
        }

        this.props.addSong(newSong);

        this.toggle();
    };

    render() {
        return(
            <div>
                { this.props.isAuthenticated ? (<Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Song</Button>) : (<h4 className="mb-3 ml-4">Please login to join the party</h4>)}


                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Playlist</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="song">Song</Label>
                                <Input type="text" name="name" id="song" placeholder="Add song" onChange={this.onChange} />
                                <Button color="dark" style={{marginTop: '2rem'}} block>Add Song</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    song: state.song,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(
    mapStateToProps, 
    { addSong }
)(SongModal);