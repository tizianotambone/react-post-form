import { useState } from 'react'
import './App.css'

function App() {
 

  return (
    <>
    
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h2> BLOG </h2>
          </div>
          <div className="col-12">
            <form action="" className='border rounded p-4'>
              <div className="rowg-3">
                <div className="col-12">
                  <label htmlFor=""className='control-label'>
                    author
                  </label>
                  <input type="text" 
                   name="author"
                   id="author"
                   className='form-control'
                   placeholder='author'/>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12">
            <form action="" className='border rounded p-4'>
              <div className="rowg-3">
                <div className="col-12">
                  <label htmlFor=""className='control-label'>
                    Title
                  </label>
                  <input type="text" 
                   name="title"
                   id="title"
                   className='form-control'
                   placeholder='title'/>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12">
            <form action="" className='border rounded p-4'>
              <div className="rowg-3">
                <div className="col-12">
                  <label htmlFor=""className='control-label'>
                    Body
                  </label>
                  <input type="text" 
                   name="body"
                   id="body"
                   className='form-control'
                   placeholder='body'/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      




    </>
  )
}

export default App
