import React, { useState } from 'react';
import DraggableItem from './DraggableItem';
import DropZone from './DropZone';

const App = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleDropItem = (itemId) => {
    if (itemId) {
      setDroppedItems((prevItems) => [...prevItems, itemId]);
      setStatusMessage(`Element dropped in the drop zone successfully.`);
    } else {
      setStatusMessage(`Drop has failed.`);
    }
  };

  const handleDragStart = (id) => {
    window.draggedItem = id;
    setDraggedItem(id);
    setStatusMessage(`Drag started for ${id}.`);
  };

  const handleDragEnd = () => {
    setStatusMessage('');
  };

  return (
    <div>
      <h1 tabIndex={0}>Accessible Drag and Drop</h1>
      <div
        aria-live='assertive'
        role='alert'
        style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
      >
        {statusMessage}
      </div>
      <div>
        <DraggableItem
          id='item1'
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          first item{' '}
        </DraggableItem>
        <DraggableItem
          id='item2'
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          Second item
        </DraggableItem>
      </div>
      <DropZone id='dropzone' onDrop={handleDropItem}>
        Drop Zone
        <ul>
          {droppedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </DropZone>
    </div>
  );
};

export default App;
