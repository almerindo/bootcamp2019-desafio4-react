import React from 'react';

import { FaceNav, RedAccount } from './styles';

function Header() {
  return (
    <header>
      <FaceNav>
        <img alt="logoFace" src="../face.png" />
        <div>
          <span>Meu perfil</span>

          <i className="material-icons">
            <RedAccount />
          </i>
        </div>
      </FaceNav>
    </header>
  );
}

export default Header;
