import React from "react";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";

function SidebarBtnElement({ formElement }: { formElement: FormElement }) {

    const{label,icon: Icon}=formElement.designerBtnElement;

  return <Button>
    <Icon className='h-8 w-8 text-primary cursor-grab'/>
    <p className="text-xs"></p>
  </Button>;
}

export default SidebarBtnElement;
