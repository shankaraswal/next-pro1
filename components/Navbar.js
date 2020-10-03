import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();

  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else {
      return "";
    }
  }
  return (
    <nav className='light-blue lighten-1' role='navigation'>
      <div className='nav-wrapper container'>
        <Link href='/'>
          <a id='logo-container' className='brand-logo'>
            Logo
          </a>
        </Link>
        <ul className='right'>
          <li className={isActive("/login")}>
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </li>
          <li className={isActive("/about")}>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li className={isActive("/create")}>
            <Link href='/create'>
              <a>Create</a>
            </Link>
          </li>
          <li className={isActive("/signup")}>
            <Link href='/signup'>
              <a>SignUp</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
