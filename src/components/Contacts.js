import SectionTitle from "./SectionTitle";

const Contacts = () => {
  return (
    <div className="container mt-20 mx-auto" id="contacts">
      <SectionTitle title={"Contacts"} />
      <form className="mt-10 grid grid-cols-2 gap-20">
        <div className="from-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your name"
            name="name"
            required
            className="name bg-transparent border py-12 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-12 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
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
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="submit"
            value="Send message"
            className="uppercase border py-12 px-20 rounded-full border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Contacts;
