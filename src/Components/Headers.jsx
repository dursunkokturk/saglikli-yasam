import Logo from '../assets/img/logo.png'
import HamburgerMenu from '../assets/img/hamburger-menu.png'

export default function Headers() {
  return (
    <header className="header">
      <nav className="navbar">
        <img src={Logo} className='logo' alt="" />
        <h4>Sağlıklı Menü</h4>
        <img src={HamburgerMenu} className='hamburger-menu' alt="" />
      </nav>
    </header>
  )
}