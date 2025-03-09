export const Board = () => {
  return (
    <div 
      role="application"
      aria-label="Drawing Canvas"
      tabIndex={0}
      onKeyDown={handleKeyboardShortcuts}
    >
      {/* Add ARIA labels and keyboard navigation */}
      <div role="toolbar" aria-label="Drawing Tools">
        {/* Tool components */}
      </div>
      <canvas 
        ref={canvasRef}
        aria-label="Drawing Area"
      />
    </div>
  );
};