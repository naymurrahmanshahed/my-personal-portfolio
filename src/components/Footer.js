const Footer = () => {
  return (
    <div className="container mx-auto my-20 text-white/50 text-center">
      <p>
        &copy;{new Date().getFullYear()}{" "}
        <span className="link-item">Naymur Rahman</span> All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
