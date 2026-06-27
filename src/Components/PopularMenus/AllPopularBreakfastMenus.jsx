import PopularMenus from '../../assets/img/popular-menus.png'
import IconDown from '../../assets/img/icon-down.png'
import AllPopularBreakfastMenu1 from '../../assets/img/popular-menu-1.png'
import IconLevel from '../../assets/img/icon-level.png'
import IconCalory from '../../assets/img/icon-calory.png'
import IconBread from '../../assets/img/icon-bread.png'
import IconFish from '../../assets/img/icon-fish.png'
import IconDrop from '../../assets/img/icon-drop.png'
import Star from '../../assets/img/star.png'

export default function AllPopularBreakfastMenus() {

  const healthScore = 9
  const totalDots = 10

  return (
    <>
      <section className="all-popular-breakfast-menus">
        <h5 className="title">Popüler Menüler</h5>
        <img src={PopularMenus} className='popular-menus' alt="" />
      </section>

      <section className="all-popular-breakfast-card">

        <img src={AllPopularBreakfastMenu1} className='all-popular-breakfast-menu-photo' alt="" />

        <div className='all-popular-breakfast-content'>
          <h5 className='all-popular-breakfast-name'>Feta Peyniri ve Zeytinli Yunan Salatası</h5>
          <button className='all-popular-breakfast-add-button'>+</button>

          <div className="meal-type">
            <h6>Kahvaltı</h6>
          </div>

          <div className="health-score--score">
            <div className="health-score">
              <div className="star-number">
                <img src={Star} className='star' alt="" />
              </div>
            </div>

            <div className="score">
              <h6>{healthScore}/10</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}