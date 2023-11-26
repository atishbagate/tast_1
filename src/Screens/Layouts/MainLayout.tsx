import MainHeader from "./MainHeader"
import MainLayoutRenderOutlet from "./MainLayoutRenderOutlet"
import MainLayoutSidebar from "./MainLayoutSidebar"

function MainLayout() {
  return (
    <div>
        <MainHeader />
        <MainLayoutSidebar />
        <MainLayoutRenderOutlet />
    </div>
  )
}

export default MainLayout