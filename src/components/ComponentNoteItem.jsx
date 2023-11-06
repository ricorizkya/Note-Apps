import COmponentNoteItemBody from "./ComponentNoteItemBody";
// import ComponentNoteItemAction from "./ComponentNoteItemAction";
import ComponentDeleteButton from "./ComponentDeleteButton";
import ComponentArchiveButton from "./ComponentArchiveButton";

function ComponentNoteItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <COmponentNoteItemBody title={title} createdAt={createdAt} body={body} />
      <ComponentDeleteButton id={id} onDelete={onDelete} />
      <ComponentArchiveButton id={id} onArchive={onArchive} />
    </div>
  );
}

export default ComponentNoteItem;
