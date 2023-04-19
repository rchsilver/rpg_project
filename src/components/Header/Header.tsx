import { StyledHeader } from "./StyledHeader";
import React from "react";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <span>D4</span>
        <span>RPG</span>
      </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Sistema</a>
        </li>
        <li>
          <a href="">Ficha</a>
        </li>
      </ul>
    </StyledHeader>
  );
};

export { Header };
