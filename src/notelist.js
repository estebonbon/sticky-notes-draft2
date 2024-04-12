import React from "react";
import Note from "./note.js";

const NotesList = (props) => {
   const noteFactory = (note) => <Note note={note} key={note.id}/> // 2
    const noteElements = props.notes.map(noteFactory) // 1

// the function path starts at 1, mapping over the notes, passed down from the App component file. It then sends the array to be processed by noteFactory.
// noteFactory recieves the information, the notes inside the props.notes array are being processed one by one because of the map() function coordinating everything.
// the individual note information will be passed onto the Note module file, and displayed as JSX in the noteElements array.

  return <ul className="notes-list">{noteElements}</ul>
};

export default NotesList