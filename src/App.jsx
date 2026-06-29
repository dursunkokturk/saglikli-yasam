import './App.css'
import Headers from './Components/Headers'
import AllMenus from './Components/Menus/AllMenus'
import FeaturedMenu from './Components/Menus/FeaturedMenu'
import AllPopularMenus from './Components/PopularMenus/AllPopularMenus'
import AllPopularMenu from './Components/PopularMenus/AllPopularMenus'
import AllRecommendedMenus from './Components/RecommendedMenus/AllRecommendedMenus'

export default function App() {

  return (
    <>
      <Headers />
      <FeaturedMenu />
      <AllMenus />
      <AllPopularMenus />
      <AllRecommendedMenus />
    </>
  )
}