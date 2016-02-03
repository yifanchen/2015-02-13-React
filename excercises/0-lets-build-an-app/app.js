//var React = require('react');
//
//var fetchUsers = (cb) => {
//  setTimeout(() => {
//    cb([{name:'Geoge'}, {name:'Yifan'}, {name:'Hostage'}]);
//  },500);
//};
//
//
//var App = React.createClass(){
//  getInitialState(){
//    return {
//      users: [],
//      loaded: false
//    };
//  },
//
//  compendDidmount(){
//    fetchUsers((users) => {
//      this.setState({
//        users,
//        loaded:true
//      });
//    });
//  },
//  
//deleteUsers(target){
//  var users = this.state.users;
//  var withoutUser = user.filter(user => user.name !== target.name);
//  this.setState({users: withoutUser});
//}
//  
//render(){
//  if(!this.state.loaded)
//    return <div>loading</div>;
//  var users = this.state.users.map((user) => {
//    return <li onClick={this.deleteUsers.bind(this.user)}>{user.name}</li>;
//  });
//  return {
//  <div>
//    <h1>Hello</h1>
//    <ul>
//      <li>
//      </li>
//    </ul>
//    }
//    }
//
//},
//
//  
