import FeaturedMenus from '../assets/img/featured-menus.png'
import FeaturedExampleMenu from '../assets/img/featured--example-menu.png'
import Star from '../assets/img/star.png'
import IconLevel from '../assets/img/icon-level.png'

export default function Main() {
  return (
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
        <div className="meals">
          <div className="meal-name-and-evaluation-score">
            <div className="meal-name">
              Öğlen
            </div>
            <div className="evaluation-score">
              <img src={Star} alt="" />
              <h6>4.8/5 (125 inceleme)</h6>
            </div>
          </div>
          <div className="recipe-summary">
            <div className="left">
              <div className="recipe-detail-card">
                <img src={IconLevel} className='icon-level' alt="" />
                <div className="recipe-detail-text">
                  <h6 className='level'>Zorluk</h6>
                  <h6 className='name'>Orta</h6>
                </div>
              </div>
              <div className="recipe-detail-card">
                <img src={IconLevel} className='icon-level' alt="" />
                <div className="recipe-detail-text">
                  <h6 className='level'>Sağlık Puanı</h6>
                  <h6 className='name'>85/100</h6>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="recipe-detail-card">
                <img src={IconLevel} className='icon-level' alt="" />
                <div className="recipe-detail-text">
                  <h6 className='level'>Pişirme Süresi</h6>
                  <h6 className='name'>10 Dakika</h6>
                </div>
              </div>
              <div className="recipe-detail-card">
                <img src={IconLevel} className='icon-level' alt="" />
                <div className="recipe-detail-text">
                  <h6 className='level'>Toplam Adım Sayısı</h6>
                  <h6 className='name'>4 Adım</h6>
                </div>
              </div>
            </div>
            <button>Yemek Planına Ekle</button>
          </div>
        </div>
      </section>
    </main>
  )
}