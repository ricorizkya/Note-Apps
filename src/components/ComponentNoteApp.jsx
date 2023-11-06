import React from "react";
import ComponentHeader from "./ComponentHeader";
import ComponentAddNote from "./ComponentAddNote";
import ComponentNoteList from "./ComponentNoteList";
import ComponentNoteListArchived from "./ComponentNoteListArchived";
import { getInitialData } from "../utils/data";

class ComponentNoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: +new Date(),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onArchiveNoteHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((notes) => {
        if (notes.id === id) {
          return { ...notes, archived: !notes.archived };
        }
        return notes;
      });
      return {
        notes: updatedNotes,
      };
    });
  }

  onSearchNoteHandler(event) {
    this.setState({ searchKeyword: event.target.value });
  }

  render() {
    const filteredNotes = this.state.notes.filter((notes) => {
      return notes.title.includes(this.state.searchKeyword);
    });
    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <div>
        <ComponentHeader onSearchChange={this.onSearchNoteHandler} />
        <div className="note-app__body">
          <ComponentAddNote addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <ComponentNoteList
            notes={activeNotes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveNoteHandler}
          />
          <h2>Catatan Diarsipkan</h2>
          <ComponentNoteListArchived
            notes={archivedNotes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveNoteHandler}
          />
        </div>
      </div>
    );
  }
}

export default ComponentNoteApp;
