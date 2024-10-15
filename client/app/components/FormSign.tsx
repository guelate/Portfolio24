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
    console.log({ email, subject, message });

    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <Card className="flex flex-col bg-transparent w-full border-none cursor-not-allowed">

      <CardHeader>
        <div className="flex items-center justify-between w-full text-[#0a101f]">
          <CardTitle className="w-full text-center">
            <h1 className="text-[#0a101f] text-xl md:text-2xl">Contact Me</h1>
          </CardTitle>

          <Button
            onClick={closeDialog}
            className="text-[#0a101f]  text-1xl hover:text-gray-300 focus:outline-none"
          >
            &times;
          </Button>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#0a101f] ">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="cursor-not-allowed rounded-md p-3 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-[#0a101f]">
              Subject
            </Label>
            <Input
              id="subject"
              type="text"
              placeholder="Enter your subject"
              className="cursor-not-allowed rounded-md p-3 text-sm"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#0a101f]">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[100px] cursor-not-allowed rounded-md p-3 text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-center items-center">

          <Button
            type="submit"
            className="text-sm bg-slate-200 hover:bg-gray-300 hover:shadow-sm cursor-not-allowed p-3"
            >
            WORK IN PROGRESS
          </Button>
            </div>
        </CardFooter>
      </form>
    </Card>
  );
}
