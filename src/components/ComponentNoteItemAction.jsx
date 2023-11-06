import React from "react";
import ComponentDeleteButton from "./ComponentDeleteButton";
import ComponentArchiveButton from "./ComponentArchiveButton";

function ComponentNoteItemAction({ id, onDelete, onArchieve }) {
  return (
    <div className="note-item-action">
      <ComponentDeleteButton id={id} onDelete={onDelete} />
      <ComponentArchiveButton id={id} onArchive={onArchieve} />
    </div>
  );
}

export default ComponentNoteItemAction;
