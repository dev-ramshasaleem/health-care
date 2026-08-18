import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheck, Ribbon, StarCheck, Trophy } from "lucide-react";
import Link from "next/link";
import React from "react";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    icon: StarCheck,
    price: "$49",
    description:
      "Perfect for independent practices looking to automate patient scheduling.",
    featuresHeading: "Features Include",
    features: [
      "1 Admin + up to 5 Staff Accounts",
      "AI Scheduling Assistant",
      "Secure Messaging Portal",
      "Email Support",
      "Basic Analytics",
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    icon: Ribbon,
    price: "$99",
    description:
      "Best for mid-size healthcare organizations that want full visibility and automation.",
    featuresHeading: "Includes Everything in Starter, Plus",
    features: [
      "Advance AI Workflow Automation",
      "Custom Branding",
      "Priority Support",
      "Detailed Analytics Dashboard",
      "EHR & Billing Integrations",
      "Unlimited Patient Records",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    icon: Trophy,
    price: "$299",
    description:
      "Tailored for large-scale healthcare systems that need enterprise-grade scalability.",
    featuresHeading: "Include Everything in Professional, Plus",
    features: [
      "Dedicated Account Manager",
      "API Access & Custom Integrations",
      "24/7 Support",
      "Staff Training & Onboarding",
      "SLA-backend Uptime Guarantee",
    ],
  },
];

const Price = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto px-4 md:px-8 lg:px-16 py-16 text-blue-600">
      <div className="w-fit border border-blue-200 bg-blue-100 text-blue-600 rounded-2xl px-4 py-1">
        Pricing
      </div>

      <h1 className="mt-6 text-center font-bold text-2xl md:text-4xl text-black">
        Simple, Transparent Pricing for <br /> Every Healthcare Team
      </h1>
      <p className="mt-4 text-center text-gray-600 max-w-2xl">
        Whether you're managing a small clinic or a milti-location hospital, our
        plans scale with your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {PLANS.map((plan) => {
          const Icon = plan.icon;

          return (
            <Card
              key={plan.id}
              className="w-full max-w-sm mx-auto flex flex-col border-blue-800"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon className="border-1 border-blue-400 rounded-full bg-white w-8 h-8 text-blue-400 mr-3 p-1" />
                  <CardTitle className="text-xl md:text-2xl font-bold text-black">
                    {plan.name}
                  </CardTitle>
                </div>
                <div className="flex items-end gap-2 mt-4">
                  <CardDescription className="text-3xl md:text-4xl font-bold text-blue-600">
                    {plan.price}
                  </CardDescription>
                  <CardDescription className="text-base md:text-lg text-gray-500">
                    /month
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 leading-6">
                  {plan.description}
                </p>

                <Button
                  asChild
                  className="w-full mt-6 h-12 md:h-14 text-lg bg-gradient-to-b from-gray-700 to-black hover:from-blue-500 hover:to-blue-700 text-white"
                >
                  <Link href={`/signup?plan=${plan.id}`}>Get Started</Link>
                </Button>

                <div className="mt-8 text-black">
                  <h3 className="font-bold text-lg md:text-xl mb-4">
                    {plan.featuresHeading}
                  </h3>

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CircleCheck className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Price;
