import React, { Component, Fragment } from 'react';
import ItemModal from '../ItemModal';
import DailyGoals from '../DailyGoals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';
import { quest } from '../../Questions/questions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Topics extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <Container>
        {isAuthenticated ? (
          <div>
            <h5>Dashboard</h5>
            <h2>Welcome {user.name}</h2>
          </div>
        ) : null}

        <div>
          {quest.map((item) => (
            <Link to={item.link}>
              <Button className='m-1' color='primary' type='button'>
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Topics);
