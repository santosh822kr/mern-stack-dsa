import React, { Component, Fragment } from 'react';
import { listofproblems } from '../../Questions/final';
import ItemModal from '../ItemModal';

import { Container, Card, CardBody, CardTitle, Button } from 'reactstrap';

class Binarysearch extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Bianry Search Trees</h1>
          {listofproblems[6].binarysearchtree.map((item) => (
            <Card>
              <CardBody>
                <CardTitle tag='h5'>{item.name}</CardTitle>
                <a href={item.link} target='_blank' class='btn btn-primary'>
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

export default Binarysearch;
