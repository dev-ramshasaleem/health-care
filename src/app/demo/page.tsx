"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format, startOfToday } from "date-fns";

export default function DemoForm() {
  const [date, setDate] = React.useState<Date>();
  const today = startOfToday();
  return (
    <div className="flex justify-center px-4 py-16">
      <Card className="w-full text-black max-w-xl shadow-lg bg-gradient-to-b from-gray-300 to-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Book a Free Demo
          </CardTitle>

          <CardDescription className="text-base mt-2">
            Fill out the form below and our team will contact you to schedule a
            personalized CarePlus demo.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>

            {/* Company + Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company / Clinic</Label>
                <Input id="company" placeholder="ABC Hospital" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+92 300 1234567" />
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />

                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < today}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Preferred Time</Label>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="9am">09:00 AM</SelectItem>
                    <SelectItem value="10am">10:00 AM</SelectItem>
                    <SelectItem value="11am">11:00 AM</SelectItem>
                    <SelectItem value="1pm">01:00 PM</SelectItem>
                    <SelectItem value="2pm">02:00 PM</SelectItem>
                    <SelectItem value="3pm">03:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your requirements</Label>

              <Textarea
                id="message"
                placeholder="Tell us about your clinic, hospital, or any specific features you'd like to see..."
                rows={5}
              />
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Button className="h-11 bg-black text-white px-8 hover:bg-gray-800">
                Book My Demo
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
