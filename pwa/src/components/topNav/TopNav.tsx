import * as React from "react";
import { Container } from "../container/Container";
import "./TopNav.css";
import Logo from "./../../assets/logo.svg";

export const TopNav: React.FC = () => (
  <div className="TopNav">
    <Container>
      <div className="TopNav-inner">
        <Logo />

        <ul className="TopNav-userNav">
          <li>John Doe</li>
          <li>Uitloggen</li>
        </ul>
      </div>
    </Container>
  </div>
);
