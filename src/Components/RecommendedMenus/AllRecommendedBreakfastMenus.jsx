import PopularMenus from '../../assets/img/popular-menus/popular-menus.png'
import IconDown from '../../assets/img/icons/icon-down.png'
import RecommendedBreakfastMenu1 from '../../assets/img/recommended-menus/recommended-breakfast-menu-1.png'
import PopularBreakfastMenu2 from '../../assets/img/popular-menus/popular-breakfast-menu-2.png'
import IconLevel from '../../assets/img/icons/icon-level.png'
import IconCalory from '../../assets/img/icons/icon-calory.png'
import IconBread from '../../assets/img/icons/icon-bread.png'
import IconFish from '../../assets/img/icons/icon-fish.png'
import IconDrop from '../../assets/img/icons/icon-drop.png'

export default function AllRecommendedBreakfastMenus() {

  return (
    <>
      <section className="all-recommended-breakfast-menus">
        <div className="write-and-photo">
          <h5 className="title">Önerilen Menüler</h5>
          <img src={PopularMenus} className='popular-menus' alt="" />
        </div>

        <div className="all-recommended-breakfast-card">

          <img src={RecommendedBreakfastMenu1} className='all-recommended-breakfast-menu-photo' alt="" />

          <div className='all-recommended-breakfast-content'>
            <h5 className='all-recommended-breakfast-name'>Badem Ezmesi ve Meyveli Yulaf Lapası</h5>
            <button className='all-recommended-breakfast-add-button'>+</button>

            <div className="meal-type">
              <h6>Kahvaltı</h6>
            </div>

            <div className="health-score--score">
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
            </div>
          </div>
        </div>

        <div className="all-recommended-breakfast-card">

          <img src={PopularBreakfastMenu2} className='all-recommended-breakfast-menu-photo' alt="" />

          <div className='all-recommended-breakfast-content'>
            <h5 className='all-recommended-breakfast-name'>Granola ve Bal ile Yunan Yoğurdu</h5>
            <button className='all-recommended-breakfast-add-button'>+</button>

            <div className="meal-type">
              <h6>Kahvaltı</h6>
            </div>

            <div className="health-score--score">
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}