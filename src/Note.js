import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import Bounce from 'react-reveal/Bounce';

const Note = (props) => {

    const deleteNote = (e) => {
      e.preventDefault();
      props.deleteItem(props.id);
    };

  return (
    <>
    

     
        <div className="note mx-lg-5 mx-2">
        <div className="col-lg-2 col-md-6 col-10 mx-auto mb-3">
        <Bounce bottom>
        <div className="card px-2 py-5 position-relative shadow-sm">
            <div className="card-body">
              <div className="main_note ">
                  <h1>{props.title}</h1>
                  <p>{props.content}</p>
                  <button onClick={deleteNote} data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Note" className="btn w-md-20 w-40 rounded-pill bg-white  shadow-sm  position-absolute top-0 start-100 translate-middle">
                    <RiDeleteBin6Line />
                  </button>

              </div>
            </div>
          </div>
          </Bounce>
          </div>
        </div>
    </>
  )
}

export default Note