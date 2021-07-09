import React, {useContext, useState} from 'react';
import NotesContext from '../context/notes-context';

const AddNoteForm = () => {
    
    const {dispatch} = useContext(NotesContext);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        dispatch({
            type : "ADD_NOTE", 
            title, 
            body 
        })
        // setNotes([
        //     ...notes,
        //     { title, body }
        // ])
        setTitle('');
        setBody('');
    }

    return (
        <>
            <h3>Add Note</h3>
            <form onSubmit={addNote}>
                <p><input required value={title} placeholder="Title" onChange={e => setTitle(e.target.value)}/></p>
                <p><textarea required value={body} placeholder="Body" onChange={e => setBody(e.target.value)}></textarea></p>
                <p><button>Add Note</button></p>
            </form>
        </>
    )
}

export default AddNoteForm;