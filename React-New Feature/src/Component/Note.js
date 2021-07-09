import React, {useContext} from 'react'
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({note}) => {
    const {dispatch} = useContext(NotesContext)

    const position = useMousePosition();

    const removeNote = (title) => {
        dispatch({
            type : "REMOVE_NOTE", 
            title 
        })
        // setNotes(notes.filter(note => note.title !== title))
    }

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>X : {position.x}, Y : {position.y}</p>
            <button onClick={() => removeNote(note.title)}> X </button>
        </div>
    )
}

export default Note;


// If not dependent state property is provided then this execute even when parent component state chagnes
// useEffect(() => {
//     console.log('Setting up Effects')
//     return () => {
//         console.log('Cleaning up Effects')
//     }
// }, []);