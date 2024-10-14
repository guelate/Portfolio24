"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface FormSignProps {
  openDialog: () => void;
  closeDialog: () => void;
}

export default function FormSign({ closeDialog }: FormSignProps) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or perform some action
    console.log({ email, subject, message });
    // Reset form fields after submission
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white h-20">
      <CardHeader>
        <CardTitle>New Mail</CardTitle>
        <Button
          onClick={closeDialog}
          className="text-gray-500 hover:text-gray-700"
        >
          &times;
        </Button>
        <CardDescription>Compose a new email message</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="recipient@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              type="text"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              className="min-h-[100px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Send Mail
          </Button>
        </CardFooter>
      </form>
    </Card>
    //   <div className="flex flex-col">
    //     {/* Dialog Header */}

    //     <div className="flex p-4 justify-center">
    //       <div className="flex justify-between w-full ">
    //         <h2 className="text-lg font-semibold px-40">Hello</h2>
    //         <button
    //           onClick={closeDialog}
    //           className="text-gray-500 hover:text-gray-700"
    //         >
    //           &times;
    //         </button>
    //       </div>
    //     </div>
    //     {/* TITLE IF */}

    //     {/* Dialog Content */}
    //     <div className="flex flex-col border">
    //       <p className="p-4">
    //         This is the content of the dialog. You can place any text or elements
    //         here.
    //       </p>
    //     </div>

    //     {/* Dialog Footer */}
    //     <div className="">
    //       <button
    //         onClick={closeDialog}
    //         className="px-4 py-2 bg-gray-500 text-white rounded-md"
    //       >
    //         Cancel
    //       </button>
    //       <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
    //         Confirm
    //       </button>
    //     </div>
    //   </div>
  );
}
