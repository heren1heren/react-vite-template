import { count } from 'console';
import { Component, useState } from 'react';
export class CountClass extends Component {
  constructor(props) {
    // how to pass down ClassInput state to its child class
    super(props);
    this.state = {
      someOtherState: 11, // it doesn't work because props is not ClassInput.props
    };
  }
  render() {
    const count = this.props.count; // here we access props here.

    return <div className="count-display-block"> Count:{count}</div>;
  }
}
export class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncreaseCount = () => {
    this.setState(() => ({
      ...this.state,
      count: this.state.count + 1,
    }));
  };
  handleDecreaseCount = () => {
    this.setState(() => ({
      ...this.state,
      count: this.state.count - 1,
    }));
  };
  render() {
    return (
      <div id="wrapper">
        <CountClass count={this.state.count} />
        <ClassInput
          handleIncreaseCount={this.handleIncreaseCount}
          handleDecreaseCount={this.handleDecreaseCount}
        />
      </div>
    );
  }
}
export class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: '',
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  };
  handleDeleteList = (e) => {
    const newTodos = this.state.todos.filter((task) => {
      return task !== e.target.id;
    });

    this.setState(() => ({
      todos: newTodos,
      inputVal: '',
    }));
    this.props.handleDecreaseCount();
  };
  handleCheck = (target) => {
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i] === target.id) {
        return true;
      }
    }
    return false;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleCheck(e.target)) {
      return;
    }
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
    this.props.handleIncreaseCount();
  };

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <ListItem
              key={todo} // why does it requires me to pass a key here even if I has pass a key inside ListItem component ?
              todo={todo}
              handleDeleteList={this.handleDeleteList}
            />
          ))}
        </ul>
      </section>
    );
  }
}
function ListItem({ todo, handleDeleteList }: { todo: string }) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(todo);
  const handleEditClick = () => {
    setIsEdit((state) => !state);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <li id={todo}>
      {isEdit ? (
        <input
          className="item-input"
          value={inputValue}
          onChange={handleInputChange}
        />
      ) : (
        inputValue
      )}
      <button className="delete-btn" id={todo} onClick={handleDeleteList}>
        Delete
      </button>
      <EditButton handleEditClick={handleEditClick} isEdit={isEdit} />
    </li>
  );
}
function EditButton({ isEdit, handleEditClick }) {
  return (
    <button className="edit/reSubmit-btn" onClick={handleEditClick}>
      {isEdit ? 'Resubmit' : 'Edit'}{' '}
      {/** how to change info based on edit state? */}
    </button>
  );
}
/**
 * 
    Implement an edit button for each task. It should replace the todo with an input field, and change the button itself to ‘Resubmit’,
    so the edits can be saved. This is a comparatively harder task, kudos for when you finish it!

 */

export const App = () => <h1>Our First Test</h1>;
