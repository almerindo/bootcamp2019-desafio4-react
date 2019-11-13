import React from 'react';
import { FaceNav } from './styles';

function Header() {
  return (
    <header>
      <FaceNav>
        <img alt="logoFace" src="../face.png" />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </FaceNav>
    </header>
  );
}

export default Header;
