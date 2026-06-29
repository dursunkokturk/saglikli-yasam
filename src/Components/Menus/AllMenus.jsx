import IconFilter from '../../assets/img/icons/icon-filter.png'
import IconDown from '../../assets/img/icons/icon-down.png'
import BreakfastMenus from './BreakfastMenus'
import LunchMenus from './LunchMenus'
import DinnerMenus from './DinnerMenus'

export default function AllMenus() {
  return (
    <main>
      <section className="all-menus-write-and-filter">
        <h5 className="title">Tüm Menüler</h5>
        <label htmlFor="">
          <img src={IconFilter} className='icon-filter' alt="" />
          Filtre
          <img src={IconDown} className='icon-down' alt="" />
        </label>
      </section>
      <section className="menu-lists">
        <label htmlFor="">Hepsi</label>
        <label htmlFor="">Kahvaltı</label>
        <label htmlFor="">Öğle Yemeği</label>
        <label htmlFor="">Atıştırmalık</label>
        <label htmlFor="">Akşam Yemeği</label>
      </section>
      <BreakfastMenus />
      <LunchMenus />
      <DinnerMenus />
    </main>
  )
}