import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModal';
import DailyGoals from './components/DailyGoals';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Dp from './components/pages/Dp';
import Array from './components/pages/Array';
import Matrix from './components/pages/Matrix';
import String from './components/pages/String';
import Searching from './components/pages/Searching';
import Linkedlist from './components/pages/LinkedList';
import Binarytree from './components/pages/BinaryTree';
import Binarysearch from './components/pages/Bst';
import Greedyalgo from './components/pages/GreedyAlgo';
import Backtracking from './components/pages/Backtracking';
import Stack from './components/pages/Stack';
import Heap from './components/pages/Heap';
import Graph from './components/pages/Graph';
import Trie from './components/pages/Trie';
import Bit from './components/pages/Bit';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className='App'>
            <AppNavbar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/array' element={<Array />} />
              <Route path='/matrix' element={<Matrix />} />
              <Route path='/string' element={<String />} />
              <Route path='/searchingsorting' element={<Searching />} />
              <Route path='/linkedlist' element={<Linkedlist />} />
              <Route path='/binarytrees' element={<Binarytree />} />
              <Route path='/binarysearchtrees' element={<Binarysearch />} />
              <Route path='/greedyalgorithm' element={<Greedyalgo />} />
              <Route path='/backtracking' element={<Backtracking />} />
              <Route path='/stackandqueues' element={<Stack />} />
              <Route path='/heap' element={<Heap />} />
              <Route path='/graph' element={<Graph />} />
              <Route path='/trie' element={<Trie />} />
              <Route path='/bitmanipulation' element={<Bit />} />

              <Route path='/dp' element={<Dp />} />
            </Routes>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
