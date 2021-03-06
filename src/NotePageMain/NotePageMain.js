import React from 'react';
import Note from '../Note/Note';
import ApiContext from '../ApiContext';
import { findNote } from '../notes-helpers';
import './NotePageMain.css';

export default class NotePageMain extends React.Component {
  static contextType = ApiContext;
  render() {
    const { notes } = this.context;
    const { noteId } = this.props.match.params;
    const note = findNote(notes, Number(noteId));
    console.log(note);
    return (
      <section className="NotePageMain">
        <Note
          id={note.id}
          name={note.note_name}
          modified={note.modified}
          onDeleteNote={this.handleDeleteNote}
          {...this.props}
        />
        <div className="NotePageMain__content">
          {note.content.split(/\n \r|\n/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>
    );
  }
}
