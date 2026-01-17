import { useState } from "react";
import "../DragArea/DropArea.css";

function DropArea() {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      className={showDrop ? "drop-area" : "drop-area-hidden"}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
    >
      <span>+</span>
    </section>
  );
}

export default DropArea;
