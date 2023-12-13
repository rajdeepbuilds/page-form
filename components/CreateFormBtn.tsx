"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { BsFileEarmarkPlus } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { log } from "console";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
});

type formSchematype = z.infer<typeof formSchema>;

function CreateFormBtn() {
  const form = useForm<formSchematype>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: formSchematype) {
    console.log(values);
    
  }
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create New Form</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Form</DialogTitle>
            <DialogDescription>
              Create a new form to start collecting responses
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">


                <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea rows={5} {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}/>


            </form>
          </Form>
          <DialogFooter>
            <Button className="w-full mt-4">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  
}

export default CreateFormBtn;
