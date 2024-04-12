import React from "react";

const Note = (props) => (
  <li className="note">
    <input 
      type="text" 
      placeholder="Title" 
      className="note__title"
      value={props.note.title} />
    <textarea 
      placeholder="Description" 
      className="note__description"/>
      value={props.note.description}
    <span className="note__delete">X</span>
  </li>
);

// inputs with a `value` attribute are known as controlled inputs. This means that the value of the input field is controlled by React state (or props in this case) rather than the DOM. 
//  The input field will initially display the value of `props.note.title` as its value

export default Note
