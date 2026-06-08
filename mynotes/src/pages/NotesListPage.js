import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';

const NotesListPage = () => {
    const [notes, setNote] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        let response = await fetch('/api/notes/');
        let data = await response.json();
        setNote(data);
    };

    return (
        <div className="notes">

            <div className="notes-header">

                <div>
                    <h2 className="notes-title">
                        📚 My Notes
                    </h2>

                    <p className="notes-subtitle">
                        Organize your thoughts beautifully
                    </p>
                </div>

                <div className="notes-count-box">
                    {notes.length}
                </div>

            </div>

            <div className="notes-list">

                {notes.length > 0 ? (
                    notes.map((note, index) => (
                        <div className="note-preview" key={index}>
                            <ListItem note={note} />
                        </div>
                    ))
                ) : (
                    <div
                        style={{
                            textAlign: 'center',
                            marginTop: '100px',
                            color: '#94a3b8',
                            fontSize: '18px'
                        }}
                    >
                        📝 No notes yet. Create your first note!
                    </div>
                )}

            </div>

            <AddButton />

        </div>
    );
};

export default NotesListPage;
