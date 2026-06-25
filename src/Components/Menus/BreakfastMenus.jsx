import IconDown from '../../assets/img/icon-down.png'

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
    </main>
  )
}