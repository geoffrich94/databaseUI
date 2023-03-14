import * as S from "./App.styles";
import { Menu, Main } from "components";
import { useState } from "react";

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [toggleAppMenuBar, setToggleAppMenuBar] = useState(true);
  const [toggleMenuBar, setToggleMenuBar] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    setToggleMenuBar(!toggleMenuBar);
    setToggleAppMenuBar(!toggleAppMenuBar);
  };

  return (
    <S.Container>
      <S.HamburgerMenu onClick={handleMenu} toggleBar={toggleAppMenuBar} />
      <Menu isOpen={menuOpen} onClick={handleMenu} toggleBar={toggleMenuBar} />
      <Main />
    </S.Container>
  );
};
