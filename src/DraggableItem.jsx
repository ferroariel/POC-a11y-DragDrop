import React, { useState } from 'react';

const DraggableItem = ({ id, onDragStart, onDragEnd, children }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      console.log(`KeyDown event on ${id}`);
      onDragStart(id);
    }
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData('text', id);
    console.log(`DragStart event on ${id}`);
    onDragStart(id);
  };

  return (
    <div
      id={id}
      role='option'
      tabIndex='0'
      aria-label='Element to drag'
      aria-grabbed='false'
      onKeyDown={handleKeyDown}
      draggable='true'
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      style={{
        padding: '10px',
        margin: '5px',
        border: '1px solid black',
        backgroundColor: 'white',
      }}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
