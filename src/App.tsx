import React, { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./components/home";
import NavBar from "./components/navbar";

export const ModalContext = React.createContext<any>([]);

const year = new Date().getFullYear();
// const footer = document.getElementById("footer") as HTMLElement;
// footer.innerText = "Antony Rapando - © " + year;

function App() {
  const [extraMenu, setExtraMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        <NavBar extraMenu={extraMenu} setExtraMenu={setExtraMenu} />
        <AnimatePresence>
          <Home key={"home"} />
        </AnimatePresence>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
