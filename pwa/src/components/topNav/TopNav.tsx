import * as React from "react";
import { Container } from "../container/Container";
import "./TopNav.css";

export const TopNav: React.FC = () => (
  <div className="TopNav">
    <Container>
      <div className="TopNav-inner">
        <div>Logo</div>
        <div>Links</div>
      </div>
    </Container>
  </div>
);
