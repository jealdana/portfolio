import React, {useState} from 'react';
import './App.css';
import InputTodoList from './components/TaskList'

// Lessons learned: state hooks, handlers, preventDefault function, filter function, map function 


const houses = [{locationID:1,LocationName:'house1'},{locationID:2,LocationName:'house2'}]

const HousesArrays = () => {
  return(
    <div className='container'>
      <div className="row">
        <div className="col-1">ID</div>
        <div className="col-2">Location Name</div>
        <div className="col">pending tasks</div>
      </div>
      {houses.map((house)=> {return(
        <div className='row'>
            <div className='col-1'>{house.locationID}</div>
            <div className='col-2'>{house.LocationName}</div>
            <div className='col'><InputTodoList /></div>
        </div>
        )})
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <HousesArrays />
    
    </div>
  );
}

export default App;
