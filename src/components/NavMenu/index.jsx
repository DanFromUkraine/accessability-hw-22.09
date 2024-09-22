import { useContext, useEffect, useId } from 'react';
import { Link } from 'react-router-dom';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import styles from './NavMenu.module.scss';
import { MenuContext } from '../../context';
import classNames from 'classnames';

const NavMenu = () => {
  const { isMenuOpen, closeNavMenu } = useContext(MenuContext);
  const container = classNames(styles.container, { [styles.open]: isMenuOpen });

  const navId = useId();
  useEffect(() => {
    const navMenu = document.getElementById(navId);
    const handlerClick = ({ target }) => {
      if (!navMenu.contains(target)) {
        closeNavMenu();
      }
    }
    const handlerKeyDown = ({ key }) => {
      if (key === 'Escape') {
        closeNavMenu();
      }
    };
    window.addEventListener('click', handlerClick);
    window.addEventListener('keydown', handlerKeyDown);
    return () => {
      window.removeEventListener('click', handlerClick)
      window.removeEventListener('keydown', handlerKeyDown);
    }
  }, [])

  const close = (event) => {
    if (event.key === 'Enter') {
      closeNavMenu();
    }
  }

  return (
    <nav className={container} id={navId}>
      <CancelPresentationIcon
        tabIndex="1"
        onKeyDown={close}
        className={styles.closeBtn}
        onClick={closeNavMenu}
      />
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/chat1">Chat#1</Link>
        </li>
        <li>
          <Link to="/chat2">Chat#2</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

    </nav>
  );
}

export default NavMenu;
