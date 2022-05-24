import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import Fade from 'react-reveal/Fade';

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });

    console.log(note);
  };

  const addEvent = (e) => {
    e.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="container-fluid py-lg-5 pt-5 pb-0"> 
      
        <div className="col-lg-4 col-md-6 col-10 mx-auto">
        
          <div className="card px-3 py-5 position-relative shadow-sm">
            <div className="card-body">
              <div className="main_note ">
                <form className="d-flex flex-column" action="">
                  <input
                    className="h3 mb-3 border-0 fw-semibold"
                    type="text"
                    name="title"
                    value={note.title}
                    onChange={InputEvent}
                    placeholder="Title"
                    autoComplete="off"
                  />
                  <textarea
                    className="border-0 fw-semibold"
                    value={note.content}
                    onChange={InputEvent}
                    name="content"
                    id=""
                    cols=""
                    rows=""
                    placeholder="Write a note..."
                  ></textarea>
                  <button
                    onClick={addEvent}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Add Note"
                    className="btn w-md-20 w-40 rounded-3 bg-warning position-absolute top-100 start-100 translate-middle"
                  >
                    <GrAdd />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Fade left>
        <h1 className="fw-bold my-5 text-md-start text-center">Your Notes:</h1>   
        </Fade>
      </div>
    </>
  );
};

export default CreateNote;
