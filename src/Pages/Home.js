import React, { useEffect } from "react";
import Header from "../components/Header";

import Prevention from "../components/Prevention";
import Symtomps from "../components/Symtomps";
import What from "../components/What";

import Contact from "../components/Contact";
import Contagion from "../components/Contagion";
import Covid from "../components/Covid";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />

      <What />

      <Contagion />

      <Symtomps />

      <Prevention />

      <Contact />
      <Covid />
    </React.Fragment>
  );
}
