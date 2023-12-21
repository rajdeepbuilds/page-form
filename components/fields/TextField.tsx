"use client";

import { ElementsType, FormElement } from "../FormElements";

const type: ElementsType = "TextField"

export const TextFieldFormElement:FormElement ={
    type,
    designerComponent:  () => <div>Designer Component</div>,
    formComponent:  () => <div>Form Component</div>,
    propertiesComponent:  () => <div>Properties Component</div>,
}