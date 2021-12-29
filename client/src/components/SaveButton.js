// import React, { Component } from 'react';
// import { Container, Table } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// //import { v1 as uuid } from 'uuid';
// import { connect } from 'react-redux';
// import { getItems, deleteItem } from '../actions/itemActions';
// import PropTypes from 'prop-types';
// import moment from 'moment';

// export const SaveButton = (problemName) => {
//   const propTypes = {
//     item: PropTypes.object.isRequired,
//   };

//   const { items } = this.props.item;

//   const filteredItems = items.filter((item) => {
//     if (this.props.isAuthenticated) {
//       if (item.email === this.props.auth.user.email) {
//         return item;
//       } else {
//         return null;
//       }
//     } else {
//       return null;
//     }
//   });

//   //const checkProblem = (problemName) => {
//   let count = 0;
//   //console.log(notSolvedLink.toString());
//   for (let i = 0; i < filteredItems.length; i++) {
//     //text += cars[i] + "<br>";
//     //console.log(solvedProblems[i].body.toString());
//     if (problemName.toString() == filteredItems[i].name.toString()) {
//       count = 1;
//       break;
//     }
//   }
//   if (count == 1) {
//     return true;
//   } else {
//     return false;
//   }
//   //};
// };

// const mapStateToProps = (state) => ({
//   item: state.item,
// });

// export default connect(mapStateToProps, null)(SaveButton);
