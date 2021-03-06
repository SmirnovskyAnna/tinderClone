import styles from "./Nav.module.css";
import whiteLogo from "../../images/tinder_logo_white.png";
import colorLogo from "../../images/color-logo-tinder.png";

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const authToken = false;

  return (
    <nav>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src={minimal ? colorLogo : whiteLogo}
          alt="Logo"
        />
      </div>

      {!authToken && !minimal && (
        <button
          className={styles.navButton}
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
