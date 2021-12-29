import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import { v1 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class DailyGoals extends Component {
  // filterItems = (item) => {

  // };

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

    // if (this.props.isAuthenticated) {

    // } else {
    //   const filteredItems = items;
    // }

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
      <Container>
        {/* <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Goal');
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { id: uuid(), name }],
              }));
            }
          }}
        >
          Add your goal
        </Button> */}

        {this.props.isAuthenticated ? (
          <ListGroup>
            <TransitionGroup className='goals-list'>
              {filteredItems.map(({ _id, name, email }) => (
                <CSSTransition key={_id} timeout={500} classNames='fade'>
                  {/* {email === this.props.auth.user.email
                  ? console.log('yesssss')
                  : null} */}
                  <ListGroupItem>
                    {/* {this.props.isAuthenticated ? (
                      <Button
                        className='remove-btn'
                        color='danger'
                        size='sm'
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times;
                      </Button>
                    ) : null} */}
                    {name}
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
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
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

export default connect(mapStateToProps, { getItems, deleteItem })(DailyGoals);
