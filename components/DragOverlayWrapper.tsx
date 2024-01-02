import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core'
import React, { useState } from 'react'
import SidebarBtnElement, { SidebarBtnElementDragOverlay } from './SidebarBtnElement';
import { FormElements } from './FormElements';

function DragOverlayWrapper() {
  const [draggedItem, setdraggedItem] = useState<Active | null>(null);


    useDndMonitor({
        onDragStart: (event) =>{
         setdraggedItem(event.active);   
        },
        onDragCancel: () => {
          setdraggedItem(null);
        },
        onDragEnd: () => {
          setdraggedItem(null);
        },
    });

    if (!draggedItem) return null;

    let node= <div>No Drag Overlay</div>;
    const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;

    if (isSidebarBtnElement) {
      const type= draggedItem.data?.current?.type;
      node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
    }

  return <DragOverlay>
    {node}
  </DragOverlay>
}

export default DragOverlayWrapper