import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero max">
      <div className="container">
        <div className="text">
          <motion.h1
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Risk, Prospecting and <br />
            <span className="underline">Compliance Data</span> at your <br />
            Fingertips
          </motion.h1>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Get comprehensive business information on over 10.1 million Indian
            companies along with over 22 million contacts for prospecting.
          </motion.p>
          <motion.button
            className="btn-s"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Search a Company
          </motion.button>
        </div>
        <motion.div
          className="image"
          initial={{ width: 0, opacity: 1 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <img
            src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=494&q=80"
            alt="company"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
