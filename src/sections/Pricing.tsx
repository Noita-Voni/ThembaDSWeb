"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion";

const pricingTiers = [
  {
    title: "Foundation",
    monthlyPrice: "Get it right from the start",
    buttonText: " Start Secure Today",
    popular: false,
    inverse: false,
    features: [
      "Enjoy a courtesy premium website",
      "Cloud Readiness Review",
      "Data Mapping & Inventory (understand what they have)",
      "Security Basics Kit (MFA, firewall setup, password policies)",
      "Cyber Hygiene Checklist + POPIA Quick Guide",
      "1x Virtual Consult",
    ],
  },
  {
    title: "Professional",
    monthlyPrice: "Smart & Scalable",
    buttonText: "Let's Scale Smart",
    popular: true,
    inverse: true,
    features: [
      "Full Cloud Migration + Cost Optimization",
      "Monthly Analytics & Performance Reports",
      "Security Monitoring Dashboard (Client-facing + Internal)",
      "Staff Access Reviews + Credential Management",
      "Quarterly Compliance Check-In",
      "Priority Email + Live Chat Support",
    ],
    optionalExtras: [
      "Pen Testing",
      "Security Awareness Workshops",
      "Custom Data Dashboards",
      "Backup & Recovery Services",
    ],
  },
  {
    title: "Enterprise",
    monthlyPrice: "Mission Critical Readiness",
    buttonText: "Request Strategic Consultation",
    popular: false,
    inverse: false,
    features: [
      "Multi-Cloud Architecture + Network Segmentation",
      "Custom Data Governance Playbook",
      "SIEM + SOC Integration (real-time visibility)",
      "Executive Risk Reports + Board-Level Metrics",
      "POPIA / ISO / NIST Compliance Audits",
      "Dedicated Technical Account Manager",
      "Quarterly Onsite Reviews",
      "Staff Training Sessions (compliance + threats)",
      "Pen Testing",
      "Visual Analytics & Intelligence Dashboards",
      "Incident Response Playbook",
      "24/7 Managed Support + Escalation Hotline",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Service Packages</h2>
          <p className="section-description mt-5">
            Our flexible service tiers offer end-to-end support for organizations at any stage—from foundational cloud readiness to enterprise-level governance and cybersecurity. Choose the engagement level that fits your operational needs, and let us build a secure, scalable future together.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div className={twMerge("card",
                inverse === true && "border-black bg-black text-white")}>
                <div className="flex justify-between">
                  <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && "text-white/60")}>{title}</h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">Popular</span>
                    </div>
                  )}

                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">{monthlyPrice}</span>
                </div>
                <button className={twMerge(
                  "btn btn-primary w-full mt-[30px]", inverse === true && "bg-white text-black"
                )}>
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map(feature => (
                    <li className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
