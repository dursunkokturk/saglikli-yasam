import PopularMenus from '../../assets/img/popular-menus.png'
import IconDown from '../../assets/img/icon-down.png'
import PopularBreakfastMenu1 from '../../assets/img/popular-breakfast-menu-1.png'
import IconLevel from '../../assets/img/icon-level.png'
import IconCalory from '../../assets/img/icon-calory.png'
import IconBread from '../../assets/img/icon-bread.png'
import IconFish from '../../assets/img/icon-fish.png'
import IconDrop from '../../assets/img/icon-drop.png'
import Star from '../../assets/img/star.png'

export default function AllPopularBreakfastMenus() {

  const healthScore = 4.8
  const totalDots = 5

  return (
    <>
      <section className="all-popular-breakfast-menus">
        <div className="write-and-photo">
          <h5 className="title">Popüler Menüler</h5>
          <img src={PopularMenus} className='popular-menus' alt="" />
        </div>

        <div className="all-popular-breakfast-card">

          <img src={PopularBreakfastMenu1} className='all-popular-breakfast-menu-photo' alt="" />

          <div className='all-popular-breakfast-content'>
            <h5 className='all-popular-breakfast-name'>Yaban Mersini Proteinli Smoothie</h5>
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
                <h6>{healthScore}/5</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}