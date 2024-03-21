"use client";
import { EvervaultCard } from "@/components/evervault-card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";



export default function Home() {
  return (
    <AuroraBackground>
      <div className="row flex justify-center">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.10,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 justify-center px-4 col-lg-5"
        >
          <div className="text-3xl md:text-5xl font-bold text-white">
            Donation Platforms made easy
          </div>
          <div className="font-extralight text-base w-1/2 text-neutral-200 py-4">
            Easily create a donation platform for your own server 
          </div>
          <button className="bg-white rounded-full w-fit text-black px-4 py-2">
            Create your account
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.10,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 justify-center px-4 col-lg-5"
        >
          <EvervaultCard />
        </motion.div>
      </div>
    </AuroraBackground>
  );
}


