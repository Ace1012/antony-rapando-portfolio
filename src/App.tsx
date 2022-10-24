import React, { useCallback, useState } from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import NavBar from "./navbar";

export const ModalContext = React.createContext<any>([]);

const year = new Date().getFullYear();
const footer = document.getElementById("footer") as HTMLElement;
footer.innerText = "Antony Rapando - © " + year;

function App() {
  const [extraMenu, setExtraMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        <header>
          <NavBar extraMenu={extraMenu} setExtraMenu={setExtraMenu} />
        </header>
        <AnimatePresence>
          <Home key={"home"} />
        </AnimatePresence>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
