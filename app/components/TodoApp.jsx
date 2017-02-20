let React = require ('react');
let TodoList = require('TodoList');
let TodoApp = React.createClass({
    getInitialState: function() {
      return {
        todos: [
            {
                id: 1,
                text: 'Go grocery shopping'
            },
            {
                id: 2,
                text: 'Clean the car'
            },
            {
                id: 3,
                text: 'Go for a run'
            },
            {
                id: 4,
                text: 'Study'
            }
        ]  
      };
    },
    render: function(){
        let {todos} = this.state;
        return(
        <div>
            <TodoList todos={todos}/>
        </div>
        )
    }
});

module.exports = TodoApp;