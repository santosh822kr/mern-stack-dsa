import React, { Component, Fragment } from 'react';
import { listofproblems } from '../../Questions/final';
import { Container, Card, CardBody, CardTitle, Button } from 'reactstrap';
import ItemModal from '../ItemModal';

class Trie extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Trie</h1>
          {listofproblems[12].trie.map((item) => (
            <Card>
              <CardBody>
                <CardTitle tag='h5'>{item.name}</CardTitle>
                <a href={item.link} target='_blank' class='btn btn-primary'>
                  Open problem
                </a>
                <ItemModal />

                {/* <a href='{{link}}' target='_blank' class='btn btn-primary'>
                  ToDo
                </a> */}
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}

export default Trie;
