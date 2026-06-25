import IconDown from '../../assets/img/icon-down.png'
import BreakfastMenu1 from '../../assets/img/breakfast-menu-1.png'

export default function BreakfastMenus() {
  return (
    <main>
      <section className="calory-ranking">
        <h6>Sıralama : </h6>
        <label htmlFor="">
          Kalori
          <img src={IconDown} className='icon-down' alt="" />
        </label>
      </section>
      <section className="breakfast-card">
        <img src={BreakfastMenu1} className='breakfast-menu-photo' alt="" />
        <div className="breakfast-name-and-button">
          <h4 className='breakfast-name'>Haşlanmış Yumurtalı Avokado Tostu</h4>
          <button className='breakfast-add-button'>Yemek Planına Ekle</button>
        </div>
      </section>
    </main>
  )
}