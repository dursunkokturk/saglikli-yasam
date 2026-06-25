import IconFilter from '../../assets/img/icon-filter.png'
import IconDown from '../../assets/img/icon-down.png'

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
    </main>
  )
}