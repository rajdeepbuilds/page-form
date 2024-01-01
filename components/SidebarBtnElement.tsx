import React from "react";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";
import { useDraggable } from "@dnd-kit/core";

function SidebarBtnElement({ formElement }: { formElement: FormElement }) {

    const{label,icon: Icon}=formElement.designerBtnElement;

    const draggable = useDraggable({
        id: `designer-btn-${formElement.type}`,
        data:{
            type: formElement.type,
            isDesignerbtnElement: true,
        },
    });

  return <Button variant={"outline"} className="flex flex-col gap-2 h-[120px] w-[120px] cursor-grab">
    <Icon className='h-8 w-8 text-primary cursor-grab'/>
    <p className="text-xs">{label}</p>
  </Button>;
}

export default SidebarBtnElement;
