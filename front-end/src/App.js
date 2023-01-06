import './App.css';
import './listItem/ListItem';
import './data/todolist';
import ListItem from './listItem/ListItem';
import todoList from './data/todolist';
import NewListItem from './listItem/NewListItem';
import React from 'react';

function App() {

  const [newItem, setNewItem] = React.useState("");
  const [newTime, setNewTime] = React.useState("");
  const [list, setList] = React.useState(todoList.reverse());

  function handleUpdateNewItem(event) {
    setNewItem(event.target.value);
  }

  function handleUpdateNewTime(event) {
    setNewTime(event.target.value);
  }

  function handleAddItem() {
    if (newItem === '' || newTime === '') {
      return
    }
    setList([{id: list.length, task: newItem, estimatedTime: newTime}, ...list]);
    setNewItem('');
    setNewTime('');
  }

  function handleDeleteItem(event, key) {
    var tempArray = list;
    for (var i = tempArray.length - 1; i >= 0; --i) {
      if (tempArray[i].id === key) {
          tempArray.splice(i,1);
      }
    }
    setList([...tempArray]);
  }

  return (
    <div className="App">
      <NewListItem 
        newItem={newItem}
        newTime={newTime}
        handleAddItem={handleAddItem}
        handleUpdateNewItem={handleUpdateNewItem}
        handleUpdateNewTime={handleUpdateNewTime}
      />
      <ListItem 
        handleDeleteItem={handleDeleteItem}
        items={list}
      />
    </div>
  );
}

export default App;
