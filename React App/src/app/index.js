// // import React from "react";
// // import ReactDOM from "react-dom";
// //
// // const Index = () => {
// //   return <div>Hello React!</div>;
// // };
// //
// // ReactDOM.render(<Index />, document.getElementById("index"));
//
// var React = require('react');
// var ReactDOM = require('react-dom');
// // For Routing
// import { Router, Route, browserHistory, Link } from 'react-router';
// // Module requires
// var TodoItem = require('./todoItem');
// var AddItem = require('./addItem');
// var About = require('./about');
// // CSS REQUIRING
// require('./css/index.css');
//
// var App = React.createClass({
//     render: function(){
//         return(
//             <Router history={browserHistory}>
//                 <Route path={"/"} component={TodoComponent}></Route>
//                 <Route path={"/about"} component={About}></Route>
//             </Router>
//         );
//     }
// });
//
// //React Component
// // In this createClass we pass object that contains everything to do with component created
// // In this object we have multiple methods that we can use
// // 1st required method is Rendor Method, and the Rendor Method Returns some HTML code, and this HTML code is going
// // to be added into html document when we will tell react to insert this component
// var TodoComponent = React.createClass({
//
//   getInitialState:function(){ // this function returns object
//         return{
//           // defining props of the state, say its default data at initial stage of this component
//           todos:['Do Dishes','Eat Some Mozarella Sticks','Take a nap']
//           //age:30
//         }
//   },
//
//
//   render:function(){
//     // so here we are making local version of  todos data in initialstate
//     var todos=this.state.todos;
//     // map function takes one array and changes it in another array for output
//     todos=todos.map(function(item,index){
//       return(
//         // <li>{item}</li>
//         <TodoItem key={index} item={item} onDelete={this.onDelete}/>
//       );
//     }.bind(this));
//
//     // Here 'this' refers to component
//     /*
//     var aging=setTimeout(function(){
//       this.setState({
//         age:35
//       });
//     }.bind(this),5000); // 5 seconds
// */
//     return(
//       // here we write HTML Code, we can't write JS code here as it doesn't it to do so, instead we write jsx(i.e HTML here)
//       // as we donot write html code in js, keeping that in view that above and below exists js not jsx
//       // This thing is just like document.createElement, and this is what is going at Background
//       <div id="todo-list"> // as react only allows one html tag
//         // <h1>Ninjaaas</h1>
//         // <p>Helooos</p>
//         // React props
//         // <p>{this.props.msg}</p>
//         // <p><strong>My Cheese Name:</strong>{this.props.cheese.name}</p>
//         // <p><strong>My Cheese Smell:</strong>{this.props.cheese.smellFactor}</p>
//         // <p><strong>My Cheese Price:</strong>{this.props.cheese.price}</p>
//         // React States
//         // We dont pass state into the component, we define the state within the component itself
//         // And we can access the state properties in that component
//         // We actually define states of the component, i.e initial state, final state and etc
//         <Link to={"/about"}>About</Link>
//         <p>The busiest people have the most leisure...</p>
//         //<p onClick={this.clicked}>The busiest people have the most leisure</p>
//         // <p>{this.state.age}</p>
//         <ul>{todos}</ul>
//         // Nested Components
//         //<listComponent todos={this.state.todos}/>
//         <AddItem onAdd={this.onAdd}/>
//       </div>
//     );
//   },// render
//   //Custom Function
//   // clicked: function(){
//   //   console.log('You Clicked Me');
//   // },
//   onDelete: function(item){
//       var updatedTodos = this.state.todos.filter(function(val, index){
//           return item !== val;
//       });
//       this.setState({
//         todos: updatedTodos
//       });
//   },
//   onAdd: function(item){
//       var updatedTodos = this.state.todos;
//       updatedTodos.push(item);
//       this.setState({
//           todos: updatedTodos
//       })
//   // },
//   // Component LifeCycles
//   // componentWillMount:function(){
//   //   console.log('Component Will Mount');
//   // },
//   // componentDidMount:function(){
//   //   console.log('Component Did Mount');
//     // any grabbing of external data
//   // },
//   // componentWillUpdate:function(){
//   //   console.log('Component Will Update');
//     // any grabbing of external data
//   }
// });
//
//
//
//
//
//
// // create toDoItem component [NESTED COMPONENT]
// //Create TodoItem component
// // =========== TAKEN IN ANOTHER FILE
//
//
//
//
// // React props
// //var MyCheese={name:'Mozarella',smellFactor:'Pung',price:'3.50'};
// // Put Component in HTML Page
// // For this we use ReactDOM
// // Parameters are 1st=componentToRender & 2nd=Where we want to Render it
// // ReactDOM.render(<TodoComponent msg="I Like Cheese" cheese={MyCheese}/>,document.getElementById('todo-wrapper'));
// ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
// // Now without refresh the component will be rendered on the page
//
// // Props, these allow us to create our custom properties on Component
// // i.e lets say we pass some data[say msg] to use in component
// // When we say {this.props} we can refer any of the props passed inside the component like in our case we
// // currently have msg prop and cheese prop
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, browserHistory, Link } from 'react-router';

//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

//CSS requires
require('./css/index.css');


//SETUP ROUTING
var App = React.createClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={TodoComponent}></Route>
                <Route path={"/about"} component={About}></Route>
            </Router>
        );
    }
});

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">
                <Link to={"/about"}>About</Link>
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} />
            </div>
        );
    }, //render

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }

});

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
