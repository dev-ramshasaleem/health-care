import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr_1fr_1fr] gap-16 px-30 py-16">
      
      {/* Column 1 */}
      <div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Image src="/Plus.png" alt="icon" width={25} height={25} />

            <h1 className="text-3xl font-bold">
              <span className="text-blue-400">Care</span>
              <span className="text-black">Plus</span>
            </h1>
          </div>

          <h1 className="mt-3 text-black text-xl">
            The Intelligent Platform for Streamlined <br />
            Healthcare Workflows.
          </h1>
          <h1 className="flex gap-4 mt-3 text-black">
            <span>
              <Phone size={30} />
            </span>
            <span className="items-end text-xl">+92 (333) 711-1265</span>
          </h1>
          <h1 className="flex gap-4 mt-3 text-black">
            <span>
              <Mail size={30} />
            </span>
            <span className="items-end text-xl">support@careplus.com</span>
          </h1>
          <h1 className="flex gap-4 mt-3 text-black">
            <span>
              <MapPin size={30} />
            </span>
            <span className="items-end text-xl">
              123 Healthcare Ave, State 12345
            </span>
          </h1>
        </div>
      </div>
      
      {/* Column 2 */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>

        <div className="flex flex-col gap-3 text-lg">
          <span>Introduction</span>
          <span>Dashboard</span>
          <span>Scheduling</span>
          <span>API</span>
        </div>
      </div>
      {/* Column 3 */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Company</h2>

        <div className="flex flex-col gap-3 text-lg">
          <span>About Us</span>
          <span>Careers</span>
          <span>Services</span>
          <span>Pricing</span>
          <span>Contact Us</span>
        </div>
      </div>
      {/* Column 4 */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Resources</h2>

        <div className="flex flex-col gap-3 text-lg">
          <span>Support</span>
          <span>Security</span>
          <span>Help Center</span>
          <span>Privacy Policy</span>
          <span>Terms of use</span>
        </div>
      </div>
    </div>
  );
};

export default About;
