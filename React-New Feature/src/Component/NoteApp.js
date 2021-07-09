import React, { useEffect, useReducer} from 'react';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import notesReducer from '../Reducers/NoteReducer';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
    // const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer, []);

    // This will execute only once
    useEffect(() => {
        const LocalNotes = JSON.parse(localStorage.getItem('notes'));
        if(LocalNotes)
        {
            console.log(LocalNotes)
            dispatch({type : 'POPULATE_NOTES', notes : LocalNotes })
            // setNotes(localNotes);
        }
        console.log('Notes loaded from local storage');
    }, []);

    // Added dependency to notes state property
    useEffect(() => {
        console.log('Notes saved to local storage')
        console.log(notes)
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])

    return (
        <NotesContext.Provider value={{notes, dispatch}}>
            <h1>Notes App</h1>
            <AddNoteForm />
            <p>Notes List</p>
            <NoteList />
        </NotesContext.Provider>
    )
}

export default NoteApp;

// <div>
//     <h1>Counter App</h1>
//     <App count={10}/>
// </div>