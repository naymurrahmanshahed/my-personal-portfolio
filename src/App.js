import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import { useCustomCursor } from "./hooks/useCustomCursor";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);
  useCustomCursor(innerCursorRef, outerCursorRef);
  return (
    <div className="App">
      <div className="noise"></div>
      <CustomCursor
        innerCursorRef={innerCursorRef}
        outerCursorRef={outerCursorRef}
      />
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar footerNav />
      <Footer />
    </div>
  );
}

export default App;
