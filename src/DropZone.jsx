import React, { useState } from 'react';

const DropZone = ({ id, onDrop, children }) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const droppedItemId = event.dataTransfer.getData('text');
    console.log(`Drop event: ${droppedItemId}`);
    onDrop(droppedItemId);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      console.log(
        `KeyDown event on drop zone with item: ${window.draggedItem}`
      );
      onDrop(window.draggedItem);
    }
  };

  return (
    <div
      id={id}
      role='textbox'
      aria-dropeffect='move'
      tabIndex='0'
      onKeyDown={handleKeyDown}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
        console.log(`DragOver event on drop zone`);
      }}
      onDragLeave={() => {
        setDragOver(false);
        console.log(`DragLeave event on drop zone`);
      }}
      onDrop={handleDrop}
      style={{
        padding: '20px',
        margin: '10px',
        border: '2px dashed black',
        backgroundColor: dragOver ? 'lightyellow' : 'white',
      }}
    >
      {children}
    </div>
  );
};

export default DropZone;
