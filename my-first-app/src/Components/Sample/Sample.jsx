import React from 'react'
import './Sample.css'



const Sample = () => {
    function ListItem(){
        return(
            <div className="list-item">
                        <hr />
                        <div className="div-title">
                            <h4>My title one</h4>
                        </div>
                        <div className="list-detail">
                            This is a very big description
                        </div>
                        <div className="list-label">
                            <span>First one</span>
                            <span>Second one</span>
                            <span>Third one</span>
                        </div>
                        <hr />
                    </div>
        )
    }
  return (
    <div className='app'>
        <div className="app_header">
            <div className='left'>
                <h1 className='header-title'>Sample</h1>
            </div>
            <div className='right'>
                <span>Home</span>
                <span>Account</span>
                <span>Me</span>
                <span>About</span>
            </div>
            
        </div>


        <div className="app-body">
            <div className="app-list">
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
        </div>
      
    </div>
  )
}

export default Sample
