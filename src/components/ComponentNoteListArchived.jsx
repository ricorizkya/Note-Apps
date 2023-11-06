import ComponentNoteItem from "./ComponentNoteItem";

function ComponentNoteListArchived({ notes, onDelete, onArchive }) {
  const archivednotes = notes.filter((notes) => notes.archived);

  if (archivednotes.length === 0) {
    return <p className="notes-list__empty-message">Catatan Kosong</p>;
  }

  return (
    <div className="notes-list">
      {archivednotes.map((notes) => (
        <ComponentNoteItem
          key={notes.id}
          id={notes.sid}
          onDelete={onDelete}
          onArchive={onArchive}
          {...notes}
        />
      ))}
    </div>
  );
}

export default ComponentNoteListArchived;
