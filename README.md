# Accessible Drag and Drop

This repository contains a React application that demonstrates an accessible drag-and-drop implementation. This implementation is designed to be usable with a mouse, keyboard, and screen reader.

## Features

- **Keyboard Accessibility:** Draggable items can be activated using the `Enter` or `Space` key.
- **Screen Reader Compatibility:** Aria attributes are used to provide status messages and ensure that draggable items and drop zones are accessible to screen readers.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/accessible-drag-and-drop.git
    cd accessible-drag-and-drop
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

### Mouse and Keyboard Interaction

- **Drag an item:**
  - With the mouse: Click and hold the item you want to drag, then move it to the drop zone and release.
  - With the keyboard: Focus on the item using the `Tab` key, then press `Enter` or `Space` to start dragging. Navigate to the drop zone and press `Enter` or `Space` again to drop the item.

### Status Messages

Status messages are provided via an `aria-live` region to inform screen reader users about the current state of the drag-and-drop operation.

## Implementation Details

### DraggableItem Component

This component represents an item that can be dragged. It handles both mouse and keyboard interactions for starting a drag operation.

```jsx
const DraggableItem = ({ id, onDragStart, onDragEnd, children }) => {
  // Component code...
};
