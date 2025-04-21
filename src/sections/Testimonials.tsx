"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image   from "next/image";
import { motion } from "framer-motion";
import React   from "react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */
const testimonials = [
  {
    text: "The starter package let us migrate municipal records to the cloud in a weekend—no downtime, zero stress.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera, CivicConnect",
    username: "@jamietechguru00",
  },
  {
    text: "Basic monitoring was all we needed to stop nightly data‑sync failures. The peace of mind is priceless.",
    imageSrc: avatar2.src,
    name: "Nomvula Givani, EcoFresh Farms",
    username: "@nagivani",
  },
  {
    text: "We just wanted reliable backups; instead, we got faster load times and happier clients—bonus!",
    imageSrc: avatar9.src,
    name: "Casey Harper, PixelCrafter Design",
    username: "@casey09",
  },
  {
    text: "Your entry‑level cybersecurity hardening blocked the phishing wave that was crippling our staff inboxes.",
    imageSrc: avatar3.src,
    name: "Morgan Lee, Siyakhula Academy",
    username: "@morganleewhiz",
  },
  {
    text: "With the mid‑tier, we cut audit prep from two weeks to two days thanks to automated compliance reports.",
    imageSrc: avatar4.src,
    name: "Casey Jordan, FinEdge Credit",
    username: "@caseyj",
  },
  {
    text: "The advanced data‑loss‑prevention rules flagged a breach attempt before our own SOC even saw it.",
    imageSrc: avatar5.src,
    name: "Taylor Kim, MedX Diagnostics",
    username: "@taylorkimm",
  },
  {
    text: "Real‑time analytics on delivery routes trimmed fuel costs by 18 % in the first quarter—worth every cent.",
    imageSrc: avatar6.src,
    name: "Riley Smith, RideSwift Logistics",
    username: "@rileysmith1",
  },
  {
    text: "Your top‑tier zero‑trust framework sailed through external penetration tests with zero critical findings.",
    imageSrc: avatar7.src,
    name: "Jordan Patels, Heritage Bank SA",
    username: "@jpatelsdesign",
  },
  {
    text: "We processed 48 TB of customer archives in a single maintenance window—unthinkable before Themba’s Enterprise stack.",
    imageSrc: avatar8.src,
    name: "Sam Dawson, OrbitTel Telecom",
    username: "@dawsontechtips",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  TYPE ALIASES ‑‑ avoids “implicit any / circular reference”        */
/* ------------------------------------------------------------------ */
type Testimonial     = (typeof testimonials)[number];
type TestimonialList = Testimonial[];

/* ------------------------------------------------------------------ */
/*  SLICE LISTS INTO COLUMNS                                           */
/* ------------------------------------------------------------------ */
const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

/* ------------------------------------------------------------------ */
/*  COLUMN COMPONENT                                                   */
/* ------------------------------------------------------------------ */
const TestimonialsColumn = ({
  className,
  testimonials: list,
  duration = 10,
}: {
  className?: string;
  testimonials: TestimonialList;
  duration?: number;
}) => (
  <div className={className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      className="flex flex-col gap-6"
    >
      {[...Array(2)].map((_, idx) => (
        <React.Fragment key={idx}>
          {list.map(({ text, imageSrc, name, username }) => (
            <div key={username} className="card">
              <div>{text}</div>

              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  MAIN SECTION                                                       */
/* ------------------------------------------------------------------ */
export const Testimonials = () => (
  <section className="bg-white">
    <div className="container">
      <div className="section-heading" />
      <div className="flex justify-center">
        <div className="tag">What Our Clients Achieved</div>
      </div>

      <h2 className="section-title mt-5">Stories of Resilience</h2>
      <p className="section-description mt-5">
        Our platform has become an essential tool for users around the world.
      </p>

      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
        <TestimonialsColumn testimonials={firstColumn}  duration={15} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
        <TestimonialsColumn testimonials={thirdColumn}  className="hidden lg:block" duration={17} />
      </div>
    </div>
  </section>
);
