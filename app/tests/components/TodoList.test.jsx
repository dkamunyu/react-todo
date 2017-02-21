let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ = require('jquery');

let TodoList = require('TodoList');
let Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
    
    it('should render one Todo component for each todo item', () => {
        let todos = [{
            id: 1,
            text: 'do something'
        }, {
            id: 2,
            text: 'Check Mail'
        }];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
        let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        
        expect(todoComponents.length).toBe(todos.length);
    });
});
