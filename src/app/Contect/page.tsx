"use client"
import React from "react";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
     <div className="w-full h-screen bg-slate-800">
      <div className="pt-[140px]">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center"> We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.</p>
          <div className="flex items-center justify-center flex-col mt-4">
            <input
            className="w-[520px] bg-black px-4 py-3 rounded-xl inline-block"
            type="text" placeholder="Your enail address "  />
            <textarea
            className="resize-none mt-4 p-8 bg-black rounded-xl"
            name="message" placeholder="Your message" id="" cols={50} rows={5}></textarea>
            <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 mt-4"
            >Message me</button>
          </div>
      </div>
      <Meteors number={400} />
     </div>
  )
}

export default page