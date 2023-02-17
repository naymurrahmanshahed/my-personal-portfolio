import { useRef } from "react";
import { useFromControlReveal } from "../hooks/gsap";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";

const Contacts = () => {
  const fromControl1Ref = useRef(null);
  const fromControl2Ref = useRef(null);
  const fromControl3Ref = useRef(null);
  const fromControl4Ref = useRef(null);
  const formRef = useRef(null);

  const fromControlsRef = [
    fromControl1Ref,
    fromControl2Ref,
    fromControl3Ref,
    fromControl4Ref,
  ];

  useFromControlReveal(fromControlsRef);

  const sendMail = (e) => {
    e.preventDefault();

    //emailjs integration
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          console.log("Message send");
        },
        () => {
          console.log("Message can not send");
        }
      );

    // reset
    e.target.querySelector(".name").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="container mt-20 2xl:mt-40 mx-auto" id="contacts">
      <SectionTitle title={"Contacts"} />
      <form
        onSubmit={sendMail}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-20 overflow-hidden"
        ref={formRef}
      >
        <div className="from-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your name"
            name="name"
            required
            className="name bg-transparent border py-12 px-25 text-center rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
            ref={fromControl1Ref}
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-12 px-25 text-center rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
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
            className="message bg-transparent border py-12 px-25  text-center rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
            ref={fromControl3Ref}
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="submit"
            value="Send message"
            className="uppercase border py-12 px-25 rounded-full border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full"
            ref={fromControl4Ref}
          />
        </div>
      </form>
    </div>
  );
};

export default Contacts;
