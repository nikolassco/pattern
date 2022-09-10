import { useRef } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const ref = useRef(null);

  const closeMenu = (e) => {
    let largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const checkRef = ref.current;
    if (largura <= 858) {
      checkRef.checked = false;
    }
  }

  return (
    <header className={styles.navbar}>
      <input type="checkbox" id="check" className={styles.checkinput} ref={ref} />
      <p className={styles.logo}>Logo</p>
      <label htmlFor="check" className={styles.checkbtn} >
        <AiOutlineMenu />
      </label>
      <label htmlFor="check" className={styles.checkbtnclose} >
        <AiOutlineClose />
      </label>
      <ul className={styles.menu_list} id="navmenu">
        <li className={styles.menu_item}>
          <Link to="Home" spy={true} smooth={true} offset={-70} duration={500} className={styles.link} onClick={closeMenu} >Home</Link>
        </li>
        <li className={styles.menu_item}>
          <Link to="Projetos" spy={true} smooth={true} offset={-70} duration={500} className={styles.link} onClick={closeMenu}>Projetos</Link>
        </li>
        <li className={styles.menu_item}>
          <Link to="Sobre" spy={true} smooth={true} offset={-70} duration={500} className={styles.link} onClick={closeMenu}>Sobre Mim</Link>
        </li>
      </ul>

    </header>
  )
}

export default Navbar;
