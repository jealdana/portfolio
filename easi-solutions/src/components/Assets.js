import React from 'react'
import InputTodoList from './TaskList'

const houses = [{assetID:1,assetName:'house1'},{assetID:2,assetName:'house2'}]

const AssetsArray = () => {
  return(
    <div className='container'>
      <div className="row">
        <div className="col-1">ID</div>
        <div className="col-2">Asset Name</div>
        <div className="col">pending tasks</div>
      </div>
      {houses.map((house)=> {return(
        <div className='row'>
            <div className='col-1'>{house.assetID}</div>
            <div className='col-2'>{house.assetName}</div>
            <div className='col'><InputTodoList /></div>
        </div>
        )})
      }
    </div>
  )
}

export default AssetsArray;