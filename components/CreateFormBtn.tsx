"use client";

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./ui/dialog"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "./ui/form"

import {zodResolver} from "@hookform/resolvers/zod"

import {BsFileEarmarkPlus} from "react-icons/bs";
import {ImSpinner2} from "react-icons/im"
import { Button } from './ui/button';

function CreateFormBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create New Form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Form</DialogTitle>
          <DialogDescription>
            Create a new form to start collwcting responses
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-4 py-4'></div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormBtn