import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheck, Ribbon, StarCheck, Trophy } from "lucide-react";
import React from "react";

type Props = {};

const Price = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="w-fit border border-blue-200 bg-blue-100 text-blue-600 rounded-2xl px-4 py-1">
        Pricing
      </div>

      <h1 className="mt-6 text-center font-bold text-2xl md:text-4xl text-black">
        Simple, Transparent Pricing for <br /> Every Healthcare Team
      </h1>
      <p className="mt-4 text-black-200  text-center">
        Whether you're managing a small clinic or a milti-location hospital, our
        plans scale <br /> with your needs.
      </p>
      <div className="flex gap-6 mx-auto mt-10">
        <Card className="flex size-16px w-95 h-140   border-blue-800">
          <CardHeader>
            <div className="flex ">
              <StarCheck className="border-1 border-blue-400 rounded-full bg-white w-8 h-8 text-blue-400 mr-3 p-1" />
              <CardTitle className="font-bold flex flex-col gap-8 text-2xl">
                Starter
              </CardTitle>
            </div>
            <div className="flex mt-4">
              <CardDescription className="text-4xl text-left font-bold text-blue-600 mr-2">
                $49
              </CardDescription>
              <CardDescription className="text-xl flex items-end text-black-200">
                /month
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="text-black-100 mt-2">
            <p>
              Perfect for independent practices looking <br /> to automate
              patient scheduling.
            </p>

            <Button className="justify-center bg-black text-white h-15 w-full mt-6 text-xl hover:bg-blue-500 ">
              Get Started
            </Button>

            <div className="space-y-2 mt-6 font-bold text-xl">
              Features Include
              <div className="flex mt-2">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  1 Admin + up to 5 Staff Accounts
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  AI Scheduling Assistant
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  Secure Messaging Portal
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  Email Support
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  Basic Analytics
                </CardTitle>
                <br />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex size-16px w-95 h-140  border-blue-800">
          <CardHeader>
            <div className="flex ">
              <Ribbon className="border-1 border-blue-400 rounded-full bg-white w-8 h-8 text-blue-400 mr-3 p-1" />
              <CardTitle className="font-bold flex flex-col gap-8 text-2xl">
                Premium Plan
              </CardTitle>
            </div>
            <div className="flex mt-4">
              <CardDescription className="text-4xl text-left font-bold text-blue-600 mr-2">
                $99
              </CardDescription>
              <CardDescription className="text-xl flex items-end text-black-200">
                /month
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="text-black-100 mt-2">
            <p>
              Best for mid-size healthcare organizations <br /> that want full
              visibility and automation.
            </p>

            <Button className="justify-center bg-black text-white h-15 w-full mt-6 text-xl hover:bg-blue-500">
              Get Started
            </Button>

            <div className="space-y-2 mt-6 font-bold text-xl">
              Includes Everything in Starter, Plus
              <div className="flex mt-2">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  Advanced AI Workflow Automation
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  Custom Branding
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  Priority Support
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  Detailed Analytics Dashboard
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  EHR & Billing Integrations
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  Unlimited Patient Records
                </CardTitle>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex size-16px w-95 h-140  border-blue-800">
          <CardHeader>
            <div className="flex ">
              <Trophy className="border-1 border-blue-400 rounded-full bg-white w-8 h-8 text-blue-400 mr-3 p-1" />
              <CardTitle className="font-bold flex flex-col gap-8 text-2xl">
                Enterprise Plan
              </CardTitle>
            </div>
            <div className="flex mt-4">
              <CardDescription className="text-4xl text-left font-bold text-blue-600 mr-2">
                $299
              </CardDescription>
              <CardDescription className="text-xl flex items-end text-black-200">
                /month
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="text-black-100 mt-2">
            <p>
              Tailored for large-scale healthcare systems that need
              enterprise-grade scalability.
            </p>

            <Button className="justify-center bg-black text-white h-15 w-full mt-6 text-xl hover:bg-blue-500">
              Get Started
            </Button>

            <div className="space-y-2 mt-6 font-bold text-xl">
              Includes Everything in Professional, Plus
              <div className="flex mt-2">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  Dedicated Account Manager
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  API Access & Custom Integrations
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  24/7 Support
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  Staff Trainig & Onboarding
                </CardTitle>
              </div>
              <div className="flex ">
                <CircleCheck className=" w-8 h-8 text-gray-400 mr-2 p-1" />
                <CardTitle className=" flex flex-col gap-8 text-sm justify-center">
                  SLA-backed Uptime Guarantee
                </CardTitle>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Price;
