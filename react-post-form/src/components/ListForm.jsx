import React from 'react'
import { useState} from 'react'
import axios from "axios"

function ListForm() {

     const[formData,setFormData]=useState({
    author: "",
    title: "",
    body: "",
    public: false,
    
  })
  
  
    const debug=()=>{
        console.log(formData)
    }
    // const aggiornaAutore=(e)=>{
        
    //     let newPost=formData;
    //     newPost.author=e.target.value;
    //     setFormData(newPost);
    // }
    const aggiornaDati=(e)=>{
        const nomeCampo = e.target.name;
        const valore = e.target.value;
        console.log(nomeCampo, valore);

        let newPost = formData;
        newPost[nomeCampo] = valore;
        setFormData(newPost);
        console.log(formData);
    }
    const invia=()=>{
        axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', formData).then(response=>{
            console.log(response.data.id)
        }).catch(err=>{
            console.log(err)
        })
           
    }
  return (
    <div>
        <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h2 onClick={debug}> BLOG </h2>
          </div>
          <div className="col-12">
            <form action="" className='border rounded p-4'>
              <div className="rowg-3">
                <div className="col-12">
                  <label htmlFor=""className='control-label'>
                    Author {formData.author}
                  </label>
                  <input type="text" 
                  onInput={aggiornaDati}
                 
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
                  onInput={aggiornaDati}
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
                  onInput={aggiornaDati}
                   name="body"
                   id="body"
                   className='form-control'
                   placeholder='body'/>
                </div>
              </div>
            </form>
          </div>
          <input type="checkbox"
          name="update"
          id='update'
          className='input-ceck'/>
          <button onClick={invia}></button>
        </div>
      </div>
      
      
    </div>
  )
}

export default ListForm
