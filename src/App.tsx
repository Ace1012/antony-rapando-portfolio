import React, { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./components/home";
import NavBar from "./components/navbar";

interface IModalContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = React.createContext<IModalContext>({} as IModalContext);

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
