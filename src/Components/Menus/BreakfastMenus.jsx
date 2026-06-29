import IconDown from '../../assets/img/icons/icon-down.png'
import BreakfastMenu1 from '../../assets/img/breakfast-menus/breakfast-menu-1.png'
import IconLevel from '../../assets/img/icons/icon-level.png'
import IconCalory from '../../assets/img/icons/icon-calory.png'
import IconBread from '../../assets/img/icons/icon-bread.png'
import IconFish from '../../assets/img/icons/icon-fish.png'
import IconDrop from '../../assets/img/icons/icon-drop.png'

export default function BreakfastMenus() {

  const healthScore = 9
  const totalDots = 10

  return (
    <>
      <section className="calory-ranking">
        <h6>Sıralama : </h6>
        <label htmlFor="">
          Kalori
          <img src={IconDown} className='icon-down' alt="" />
        </label>
      </section>
      <section className="breakfast-card">
        <div className="breakfast-photo-name-button">
          <img src={BreakfastMenu1} className='breakfast-menu-photo' alt="" />
          <div className="breakfast-name-and-button">
            <h4 className='breakfast-name'>Haşlanmış Yumurtalı Avokado Tostu</h4>
            <button className='breakfast-add-button'>Yemek Planına Ekle</button>
          </div>
        </div>
        <div className="meal-type--difficulty-level--health-score-write--star-number--score">
          <div className="meal-type">
            <h6>Kahvaltı</h6>
          </div>
          <div className="difficulty-level">
            <img src={IconLevel} className='icon-level' alt="" />
            <h6>Kolay</h6>
          </div>
          <div className="health-score">
            <div className="health-score-write">
            <h6>Sağlık Puanı</h6>
          </div>
          <div className="star-number">
            <div className='dots'>
              {Array.from({ length: totalDots }).map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i < healthScore ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
          </div>
          <div className="score">
            <h6>{healthScore}/10</h6>
          </div>
        </div>
        <div className="nutritional-information-specific-to-the-menu">
          <div className="calory-information">
            <img src={IconCalory} className='icon-calory' alt="" />
            <h6>320 kcal</h6>
          </div>
          <div className="vitamin-information">
            <img src={IconBread} alt="" />
            <h6>30 gr C</h6>
          </div>
          <div className="protein-information">
            <img src={IconFish} alt="" />
            <h6>14 gr P</h6>
          </div>
          <div className="fats-information">
            <img src={IconDrop} alt="" />
            <h6>18 gr F</h6>
          </div>
        </div>
      </section>
    </>
  )
}