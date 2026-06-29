import PopularMenus from '../../assets/img/popular-menus.png'
import IconDown from '../../assets/img/icon-down.png'
import PopularLunchMenu1 from '../../assets/img/popular-lunch-menu-1.png'
import IconLevel from '../../assets/img/icon-level.png'
import IconCalory from '../../assets/img/icon-calory.png'
import IconBread from '../../assets/img/icon-bread.png'
import IconFish from '../../assets/img/icon-fish.png'
import IconDrop from '../../assets/img/icon-drop.png'
import Star from '../../assets/img/star.png'

export default function AllPopularLunchMenus() {

  const healthScore1 = 4.9
  const totalDots1 = 5

  return (
    <>
      <section className="all-popular-lunch-menus">
        <div className="all-popular-lunch-card">

          <img src={PopularLunchMenu1} className='all-popular-lunch-menu-photo' alt="" />

          <div className='all-popular-lunch-content'>
            <h5 className='all-popular-lunch-name'>Feta Peyniri ve Zeytinli Yunan Salatası</h5>
            <button className='all-popular-lunch-add-button'>+</button>

            <div className="meal-type">
              <h6>Öğle</h6>
            </div>

            <div className="health-score--score">
              <div className="health-score">
                <div className="star-number">
                  <img src={Star} className='star' alt="" />
                </div>
              </div>

              <div className="score">
                <h6>{healthScore1}/5</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}