import { useState } from "react";
import "./DropArea.css";

function DropArea({ onDrop }) {
  const [showArea, setShowArea] = useState(false);

  return (
    <div
      className={showArea ? "drop-area" : "drop-area-hidden"}
      onDragEnter={() => setShowArea(true)}
      onDragLeave={() => setShowArea(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => {
        setShowArea(false);
        onDrop();
      }}
    >
      +
    </div>
  );
}

export default DropArea;
