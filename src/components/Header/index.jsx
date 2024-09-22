import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './NavMenu.module.scss';
import { MenuContext } from '../../context';

const Header = () => {
  const { openNavMenu } = useContext(MenuContext);
  const open = (event) => {
    if (event.key === "Enter") {
      openNavMenu();
    }
  }
  return (
    <header className={styles.header}>
      <MenuIcon
        tabIndex="1"
        onKeyDown={open}
        onClick={openNavMenu}
      />
      <h1>This is header!!!</h1>
      <p>Logotip</p>
    </header>
  );
}

export default Header;
