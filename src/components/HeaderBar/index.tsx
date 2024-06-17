import React, { useState } from 'react';
import { Navbar, NavbarLogo, NavbarMenu, NavbarMenuItem, NavbarMenuItemText, NavbarToggleBtn } from './styles';
import { Link } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  const [toggle, set_toggle] = useState(true);

  return (
    <Navbar>
      <NavbarLogo>
        Onchain Community
      </NavbarLogo>
      <NavbarMenu toggle={String(toggle)}>
        <NavbarMenuItem>
          <NavbarMenuItemText>
            <WalletMultiButton style={{ margin: 0 }}/>
          </NavbarMenuItemText>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarToggleBtn onClick={() => set_toggle(!toggle)}>
        Menu
      </NavbarToggleBtn>
    </Navbar>
  );
}

export default Header;