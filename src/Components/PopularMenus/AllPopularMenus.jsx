import AllPopularBreakfastMenus from "./AllPopularBreakfastMenus";
import AllPopularDinnerMenus from "./AllPopularDinnerMenus";
import AllPopularLunchMenus from "./AllPopularLunchMenus";

export default function AllPopularMenus() {
  return (
    <main>
      <AllPopularBreakfastMenus />
      <AllPopularLunchMenus />
      <AllPopularDinnerMenus />
    </main>
  )
}