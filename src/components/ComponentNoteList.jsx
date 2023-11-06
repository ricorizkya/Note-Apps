import ComponentNoteItem from "./ComponentNoteItem";

function ComponentNoteList({ notes, onDelete, onArchive }) {
  const activeNotes = notes.filter((notes) => !notes.archived);

  if (activeNotes.length === 0) {
    return <p className="notes-list__empty-message">Catatan Kosong</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((notes) => (
        <ComponentNoteItem
          key={notes.id}
          id={notes.id}
          onDelete={onDelete}
          onArchive={onArchive}
          {...notes}
        />
      ))}
    </div>
  );
}

export default ComponentNoteList;
