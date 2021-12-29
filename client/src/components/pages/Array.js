import React, { Component, Fragment } from 'react';
import { listofproblems } from '../../Questions/final';
import ItemModal from '../ItemModal';
import { SaveButton } from '../SaveButton';

import { Container, Card, CardBody, CardTitle, Button } from 'reactstrap';

class Array extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Array</h1>
          {listofproblems[0].array.map((item) => (
            <Card>
              <CardBody>
                <CardTitle tag='h5'>{item.name}</CardTitle>
                <a
                  style={{ margin: 2 }}
                  href={item.link}
                  target='_blank'
                  class='btn btn-primary'
                >
                  Open problem
                </a>
                <ItemModal />
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}

export default Array;
