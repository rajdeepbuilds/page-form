import { DragOverlay, useDndMonitor } from '@dnd-kit/core'
import React from 'react'

function DragOverlayWrapper() {


    useDndMonitor({
        onDragStart: (event) =>{
            console.log("DRAG ITEM",event);
            
        },
    });

    const node= <div>No Drag Overlay</div>;

  return <DragOverlay>
    {node}
  </DragOverlay>
}

export default DragOverlayWrapper