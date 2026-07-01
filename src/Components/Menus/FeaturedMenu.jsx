import FeaturedMenus from '../../assets/img/featured-menus/featured-menus.png'
import FeaturedExampleMenu from '../../assets/img/featured-menus/featured--example-menu.png'
import Star from '../../assets/img/popular-menus/star.png'
import IconLevel from '../../assets/img/icons/icon-level.png'
import IconCalory from '../../assets/img/icons/icon-calory.png'

export default function FeaturedMenu() {
  return (
    <main>

      <section className="hero">
        <div className="header">
          <h6 className="title">Öne Çıkan Menü</h6>
          <img src={FeaturedMenus} className='menuIcon' alt="" />
        </div>
        <img src={FeaturedExampleMenu} className='cover' alt="" />
      </section>

      <section className="features">
        <h3>Izgara Hindi Göğsü, Buharda Pişirilmiş Kuşkonmaz ve Esmer Pirinç</h3>
        <div className="meals">
          <div className="meta">
            <div className="badge">
              Öğlen
            </div>
            <div className="rating">
              <img src={Star} alt="" />
              <h6>4.8/5 (125 inceleme)</h6>
            </div>
          </div>
          <div className="details">
            <div className="left">
              <div className="detailCard">
                <img src={IconLevel} className='icon' alt="" />
                <div className="detailText">
                  <h6 className='level'>Zorluk</h6>
                  <h6 className='name'>Orta</h6>
                </div>
              </div>
              <div className="detailCard">
                <img src={IconLevel} className='icon' alt="" />
                <div className="detailText">
                  <h6 className='level'>Sağlık Puanı</h6>
                  <h6 className='name'>85/100</h6>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="detailCard">
                <img src={IconLevel} className='icon' alt="" />
                <div className="detailText">
                  <h6 className='level'>Pişirme Süresi</h6>
                  <h6 className='name'>10 Dakika</h6>
                </div>
              </div>
              <div className="detailCard">
                <img src={IconLevel} className='icon' alt="" />
                <div className="detailText">
                  <h6 className='level'>Toplam Adım Sayısı</h6>
                  <h6 className='name'>4 Adım</h6>
                </div>
              </div>
            </div>
            <button>Yemek Planına Ekle</button>
          </div>
        </div>
      </section>

      <section className="nutrition">
        <div className="left">
          <div className="nutritionCard">
            <img src={IconCalory} className='icon-calory' alt="" />
            <div className="nutritionText">
              <h6 className='title'>Kalori</h6>
              <h6 className='value'>450 kcal</h6>
            </div>
          </div>
          <div className="nutritionCard">
            <img src={IconCalory} className='icon-calory' alt="" />
            <div className="nutritionText">
              <h6 className='title'>Protein</h6>
              <h6 className='value'>35 gr</h6>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nutritionCard">
            <img src={IconCalory} className='icon-calory' alt="" />
            <div className="nutritionText">
              <h6 className='title'>Karbonhidratlar</h6>
              <h6 className='value'>40 gr</h6>
            </div>
          </div>
          <div className="nutritionCard">
            <img src={IconCalory} className='icon-calory' alt="" />
            <div className="nutritionText">
              <h6 className='title'>Yağ</h6>
              <h6 className='value'>12 gr</h6>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}