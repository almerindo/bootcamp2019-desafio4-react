import React, { Component } from 'react';

import { FaceNav, RedAccount } from './styles';

class Header extends Component {
  state = {
    techs: [],
  };

  render() {
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
}
export default Header;
