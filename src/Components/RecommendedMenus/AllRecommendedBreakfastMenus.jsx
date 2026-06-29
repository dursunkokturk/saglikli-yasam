import PopularMenus from '../../assets/img/popular-menus/popular-menus.png'
import IconDown from '../../assets/img/icons/icon-down.png'
import RecommendedBreakfastMenu1 from '../../assets/img/recommended-menus/recommended-breakfast-menu-1.png'
import PopularBreakfastMenu2 from '../../assets/img/popular-menus/popular-breakfast-menu-2.png'
import IconLevel from '../../assets/img/icons/icon-level.png'
import IconCalory from '../../assets/img/icons/icon-calory.png'
import IconBread from '../../assets/img/icons/icon-bread.png'
import IconFish from '../../assets/img/icons/icon-fish.png'
import IconDrop from '../../assets/img/icons/icon-drop.png'
import Star from '../../assets/img/popular-menus/star.png'

export default function AllRecommendedBreakfastMenus() {

  const healthScore1 = 4.9
  const totalDots1 = 5

  const healthScore2 = 4.8
  const totalDots2 = 5

  return (
    <>
      <section className="all-popular-breakfast-menus">
        <div className="write-and-photo">
          <h5 className="title">Önerilen Menüler</h5>
          <img src={PopularMenus} className='popular-menus' alt="" />
        </div>

        <div className="all-popular-breakfast-card">

          <img src={RecommendedBreakfastMenu1} className='all-popular-breakfast-menu-photo' alt="" />

          <div className='all-popular-breakfast-content'>
            <h5 className='all-popular-breakfast-name'>Badem Ezmesi ve Meyveli Yulaf Lapası</h5>
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
                <h6>{healthScore1}/5</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="all-popular-breakfast-card">

          <img src={PopularBreakfastMenu2} className='all-popular-breakfast-menu-photo' alt="" />

          <div className='all-popular-breakfast-content'>
            <h5 className='all-popular-breakfast-name'>Granola ve Bal ile Yunan Yoğurdu</h5>
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
                <h6>{healthScore2}/5</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}