"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "aa302eac-471e-4032-a64c-af096955ed00");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast({
        description: "Your message has been sent.",
      })
      event.target.reset();
    } else {
      toast({
        description: "Something went wrong. Please try again or contact me directly via email neduekeruche@gmail.com",
        variant: "destructive",
      })
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
    >
      <h3 className="text-4xl text-accent">Lets work together</h3>
      <p className="text-white/60">
        Have a project in mind or need assistance with web development, data analytics, or machine learning? Feel free to reach out! I'm here to help bring your ideas to life. Fill out the form below and I'll get back to you as soon as possible.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="firstname" name="firstname" placeholder="First Name" required/>
        <Input type="lastname" name="lastname" placeholder="Last Name" required/>
        <Input type="email" name="email" placeholder="Email Address" required/>
      </div>
      <Select name="service" required>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service</SelectLabel>
            <SelectItem value="Web Development">Web Development</SelectItem>
            <SelectItem value="Data Analytics">Data Analytics</SelectItem>
            <SelectItem value="ML">Machine/Deep Learning</SelectItem>
            <SelectItem value="Web Scraping">Web Scraping</SelectItem>
            <SelectItem value="Bots & Scripts">Bots & Scripts</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Textarea
        className="h-[200px]"
        name="message"
        placeholder="Type your message here"
        required
      />

      <Button type="submit" size="md" className="max-w-40">
        Send message
      </Button>
    </form>
  );
}


