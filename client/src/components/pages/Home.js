import React, { Component, Fragment } from 'react';
import ItemModal from '../ItemModal';
import DailyProgress from '../DailyProgress';
import Topics from './Topics';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <div>
            <Container>
              <Topics />
              <DailyProgress />
            </Container>
          </div>
        ) : (
          <div
            style={{
              backgroundImage: 'url(/photos/photo1.jpg)',
              height: '100vh',
              marginTop: '-70px',
              fontSize: '50px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Container>
              <Topics />
              <DailyProgress />
            </Container>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(Home);
