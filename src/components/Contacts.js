import { useRef } from "react";
import { useFromControlReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const Contacts = () => {
  const fromControl1Ref = useRef();
  const fromControl2Ref = useRef();
  const fromControl3Ref = useRef();
  const fromControl4Ref = useRef();

  const fromControlsRef = [
    fromControl1Ref,
    fromControl2Ref,
    fromControl3Ref,
    fromControl4Ref,
  ];

  useFromControlReveal(fromControlsRef);
  return (
    <div className="container mt-20 mx-auto" id="contacts">
      <SectionTitle title={"Contacts"} />
      <form className="mt-10 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="from-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your name"
            name="name"
            required
            className="name bg-transparent border py-12 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
            ref={fromControl1Ref}
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-12 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
            ref={fromControl2Ref}
          />
        </div>
        <div className="from-control overflow-hidden">
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border py-12 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
            ref={fromControl3Ref}
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="submit"
            value="Send message"
            className="uppercase border py-12 px-20 rounded-full border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full"
            ref={fromControl4Ref}
          />
        </div>
      </form>
    </div>
  );
};

export default Contacts;
