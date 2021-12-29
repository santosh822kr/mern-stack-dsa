import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
//import { v1 as uuid } from 'uuid';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
    email: '',
    link: '',
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ [e.target.link]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      //id: uuid(),
      name: this.state.name,
      link: this.state.link,
      email: this.props.auth.user.email,
      isDone: true,
    };

    this.props.addItem(newItem);

    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color='dark'
            style={{ marginBottom: '2rem' }}
            onClick={this.toggle}
          >
            Save the problem
          </Button>
        ) : (
          <h4 className='mb-3 ml-4'>Please login to save problem</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Save the problem</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='item'
                  placeholder='Add the problem name'
                  onChange={this.onChange}
                />
                <Label for='item'>Link</Label>
                <Input
                  type='text'
                  name='link'
                  id='item'
                  placeholder='Add the problem link'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Save
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
