import Logo from '../assets/img/logo.png'
import HamburgerMenu from '../assets/img/hamburger-menu.png'
import FeaturedMenus from '../assets/img/featured-menus.png'
import FeaturedExampleMenu from '../assets/img/featured--example-menu.png'

export default function Headers() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <img src={Logo} className='logo' alt="" />
          <h4>Sağlıklı Menü</h4>
          <img src={HamburgerMenu} className='hamburger-menu' alt="" />
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="title-and-featured-menu-button">
            <h6 className="title">Öne Çıkan Menü</h6>
            <img src={FeaturedMenus} className='featured-menus' alt="" />
          </div>
          <img src={FeaturedExampleMenu} className='featured-example-menu' alt="" />
        </section>
        <section className="features">
          <h3>Izgara Hindi Göğsü, Buharda Pişirilmiş Kuşkonmaz ve Esmer Pirinç</h3>
        </section>
      </main>
    </>
  )
}