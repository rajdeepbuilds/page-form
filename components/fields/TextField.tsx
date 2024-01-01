"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../FormElements";

const type: ElementsType = "TextField"

export const TextFieldFormElement:FormElement ={
    type,
    construct: (id:string) => ({
        id,
        type,
        extraAttributes: {
            label:"Text field",
            helperText:"Helper Text",
            required: false,
            placeholder:"Value Here....",
        },
    }),

    designerBtnElement:{
        icon: MdTextFields,
        label: "Text  field",
    },



    designerComponent:  () => <div>Designer Component</div>,
    formComponent:  () => <div>Form Component</div>,
    propertiesComponent:  () => <div>Properties Component</div>,
}