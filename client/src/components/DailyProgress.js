import React, { Component } from 'react';
import { Container, Table, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import { v1 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import moment from 'moment';

class DailyProgress extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;

    const filteredItems = items.filter((item) => {
      if (this.props.isAuthenticated) {
        if (item.email === this.props.auth.user.email) {
          return item;
        } else {
          return null;
        }
      } else {
        return null;
      }
    });

    return (
      <Container style={{ marginTop: '2rem' }}>
        {this.props.isAuthenticated && filteredItems.length === 0 ? (
          <div>
            <h4>You have not solved any problem</h4>
            <Table striped>
              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>Problem Name</th>
                  <th>Date</th>
                  {/* <th>Delete button</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No problem to show</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
        ) : null}
        {this.props.isAuthenticated && filteredItems.length !== 0 ? (
          //{filteredItems.length !== 0 ? }
          <div>
            <h4>Here are the problems you have solved</h4>
            <Table striped>
              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>Problem Name</th>
                  <th>Date</th>
                  <th></th>
                  <th></th>
                  {/* <th>Delete button</th> */}
                </tr>
              </thead>
              <tbody>
                {filteredItems.map(({ _id, name, email, link, date }) => (
                  <tr>
                    {/* <th scope='row'>1</th> */}
                    <td>{name}</td>
                    <td>{date}</td>

                    <td>
                      <a href={link} target='_blank' class='btn btn-primary'>
                        Open problem
                      </a>
                    </td>
                    <td>
                      <Button
                        className='remove-btn'
                        color='danger'
                        size='sm'
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times;
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

export default connect(mapStateToProps, { getItems, deleteItem })(
  DailyProgress
);
