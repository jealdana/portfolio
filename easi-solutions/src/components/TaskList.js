import React, {useState} from 'react';

const ListTasks = (props) => {
  return(
    <ul>
    {props.items.map(i=>
      {return(
        <div className="row">
          <div className="col">{i.text}</div>
          <div className="col">{i.key}</div>
          <div className="col" key={i.key} onClick={()=>{props.RemoveItemHandler(i.key)}}>
            <button >Remove</button>
          </div>
        </div>
      )}
      )}
    </ul>
  )
}

function TaskList() {
  const [newListItem, setNewListItem] = useState({key:'',text:''})
  const [items,setItems] = useState([{key:'123',text:'test'}])
  
  const AddTodoListHandler = e => {
    e.preventDefault();
    setItems([...items,newListItem])
    setNewListItem({key:'',text:''})
  }

  const RemoveItemHandler = key => {
    const newListItems = (item) => {if (item.key !== key) return item.key}
    setItems(items.filter(newListItems))
  }

  return(
    <div className='tasks'>
      <form onSubmit={AddTodoListHandler}>
        <input placeholder="Task"
        value={newListItem.text}
        onChange={event => setNewListItem({key: Date.now(), text:event.target.value})}
        placeholder='New task'
        />
        <button type="submit"> Add Task </button>
      </form>

      <ListTasks items={items} RemoveItemHandler={RemoveItemHandler} />
      </div>
  )
}

export default TaskList;