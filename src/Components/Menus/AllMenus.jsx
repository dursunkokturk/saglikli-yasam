import IconFilter from '../../assets/img/icon-filter.png'
import IconDown from '../../assets/img/icon-down.png'

export default function AllMenus() {
  return (
    <main>
      <section className="all-menus">
        <h5 className="title">Tüm Menüler</h5>
        <label htmlFor="">
          <img src={IconFilter} className='icon-filter' alt="" />
          Filtre
          <img src={IconDown} className='icon-down' alt="" />
        </label>
      </section>
    </main>
  )
}