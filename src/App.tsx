import React, { useCallback, useState } from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import NavBar from "./navbar";

export const ModalContext = React.createContext<any>([]);

const year = new Date().getFullYear();
const footer = document.getElementById('footer') as HTMLElement;
footer.innerText = "Antony Rapando - © " + year;


function App() {
  const [count, setCount] = useState(0);
  const [extraMenu, setExtraMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleExtraMenu = useCallback(() => {
    setExtraMenu((prevExtraMenu) => !prevExtraMenu);
  }, [setExtraMenu]);

  return (
    <div className="App">
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
          <header><NavBar extraMenu={extraMenu} setExtraMenu={setExtraMenu} /></header>
        <AnimatePresence>
          <Home />
        </AnimatePresence>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
