import React, { useState } from 'react'
import Draggable from 'react-draggable';

const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState('Text 1');
    const [fontSize, setFontSize] = useState(16);
    const [sizeAdjustMode, setSizeAdjustMode] = useState(true);


    const handleFontSizeChange = (increment) => {
      setFontSize(prevSize => prevSize + increment);
    };
    const toggleEditMode = () => {
        setEditMode(!editMode);
        if (editMode) {
          setSizeAdjustMode(false);
        }
      };
      

    return (
        <Draggable>
  <div>
    {editMode ? (
      <input 
        onDoubleClick={toggleEditMode}
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        style={{ fontSize: `${fontSize}px` }}
      />
    ) : (
      <h1 
        onDoubleClick={toggleEditMode}
        style={{ fontSize: `${fontSize}px` }}
      >
        {value}
      </h1>
    )}
    {sizeAdjustMode && (
      <div>
        <button onClick={() => handleFontSizeChange(2)}>+</button>
        <button onClick={() => handleFontSizeChange(-2)}>-</button>
      </div>
    )}
  </div>
</Draggable>

    )
}

export default Text;
