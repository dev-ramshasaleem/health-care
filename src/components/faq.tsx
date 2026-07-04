import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const Faq = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto px-4 md:px-8 lg:px-16 py-16">
      <div className="w-fit border border-blue-200 bg-blue-100 text-blue-600 mt-20 rounded-2xl px-4 py-1">
        FAQ
      </div>
      <h1 className="mt-6 text-center font-bold text-2xl md:text-4xl text-black">
        Got Questions? We've Got Answers
      </h1>
      <p className="mt-6 text-center text-gray-600 max-w-2xl">
        We believe healthcare software should be simple, predictable, and built
        on trust. Here are the most common questions teams ask before getting
        started.
      </p>
      <div className="w-full max-w-4xl mt-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="item-1"
            className="mb-4 w-full rounded-xl border text-white hover:bg-white px-4 md:px-6 shadow-sm"
          >
            <AccordionTrigger className="text-black text-left text-base md:text-xl font-semibold">
              Can I try it before paying?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-7">
              Absolutely. Every plan includes a 14-day free trial, no credit
              card required. <br /> You'll get full access to all the core
              features, so you can test workflows, automation, and integrations
              before deciding.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="mb-4 w-full rounded-xl border text-white hover:bg-white px-4 md:px-6 shadow-sm"
          >
            <AccordionTrigger className="text-black text-left text-base md:text-xl font-semibold">
              Is my data safe and HIPAA compliant?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-7">
              Yes. We use industry-standard encryption, secure cloud
              infrastructure, and HIPAA-compliant practices to protect patient
              information. Your data is encrypted both in transit and at rest.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="mb-4 w-full rounded-xl border text-white hover:bg-white px-4 md:px-6 shadow-sm"
          >
            <AccordionTrigger className="text-black text-left text-base md:text-xl font-semibold">
              Can I change or cancel my plan anytime?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-7">
              Absolutely. You can upgrade, downgrade, or cancel your
              subscription whenever you need. Any changes will take effect
              according to your billing cycle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="mb-4 w-full rounded-xl border text-white hover:bg-white px-4 md:px-6 shadow-sm"
          >
            <AccordionTrigger className="text-black text-left text-base md:text-xl font-semibold">
              What kind of support do you provide?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-7">
              We offer email support for all plans, live chat during business
              hours, and priority support for premium customers. Our help center
              also includes tutorials and documentation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="mb-4 w-full rounded-xl border text-white hover:bg-white px-4 md:px-6 shadow-sm"
          >
            <AccordionTrigger className="text-black text-left text-base md:text-xl font-semibold">
              How do I know which plan fits my team?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-7">
              Our plans are designed for practices of different sizes. You can
              start with any plan and upgrade as your team grows. If you're
              unsure, our team can recommend the best option based on your
              needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className="mb-4 w-full rounded-xl border text-white hover:bg-white px-4 md:px-6 shadow-sm"
          >
            <AccordionTrigger className="text-black text-left text-base md:text-xl font-semibold">
              Do you integrate with our existing EHR or billing software?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-600 leading-7">
              Yes. We support integrations with many popular EHR, billing, and
              scheduling platforms. If your software isn't listed, contact us to
              discuss custom integration options.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
