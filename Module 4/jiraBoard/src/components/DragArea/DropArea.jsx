import React, { useState } from "react";
import "./DropArea.css";
function DropArea() {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      className={`${showDrop ? "drag-area" : "drag-area-hidden"}`}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
    >
      <span>+</span>
    </section>
  );
}

export default DropArea;
