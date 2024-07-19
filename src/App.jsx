import React, { useState, useEffect } from 'react';
import annyang from 'annyang';
import DraggableItem from './DraggableItem';
import DropZone from './DropZone';

const App = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (annyang) {
      const commands = {
        'start drag *item': (item) => {
          const itemId = item.toLowerCase().replace(/\s+/g, '');
          setDraggedItem(itemId);
          window.draggedItem = itemId;
          setStatusMessage(`Drag started for ${itemId}.`);
        },
        'drop item': () => {
          if (window.draggedItem) {
            handleDropItem(window.draggedItem);
            window.draggedItem = null;
          } else {
            setStatusMessage(`No item is being dragged.`);
          }
        },
      };

      annyang.addCommands(commands);
      annyang.start();

      return () => {
        annyang.abort();
      };
    }
  }, []);

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
    window.draggedItem = null;
    setDraggedItem(null);
  };

  return (
    <div>
      <h1>Accessible Drag and Drop with Voice Control</h1>
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
          Item 1
        </DraggableItem>
        <DraggableItem
          id='item2'
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          Item 2
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
