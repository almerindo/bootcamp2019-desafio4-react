import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <img
          width="100px"
          height="100px"
          alt="logoFace"
          src="../../public/face.png"
        />
        <div>
          <span>Meu perfil ;:</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
