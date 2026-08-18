import { Ribbon, StarCheck, Trophy } from "lucide-react";

export const PLANS = [
  {
    id: "starter",
    name: "Starter",
    icon: StarCheck,
    price: 49,
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
    price: 99,
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
    price: 299,
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

export type Plan = (typeof PLANS)[number];

export function getPlan(id: string | string[] | undefined) {
  if (typeof id !== "string") return undefined;
  return PLANS.find((plan) => plan.id === id);
}
