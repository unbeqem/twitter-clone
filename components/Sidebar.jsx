import {HomeIcon} from "@heroicons/react/outline";


function Sidebar() {
  return (
    <>
    <div className="hidden sm:flex flex-col">
      <div>Logo</div>
      <nav>
        <SidebarLink Icon={HomeIcon} text={"Home"} />
        <SidebarLink text={"Explore"}/>
        <SidebarLink text={"Notifications"}/>
        <SidebarLink text={"Messages"}/>      
      </nav>
      <div>User</div>
    </div>
    </>
  )
}

function SidebarLink(text, Icon) {
  return (
    <li>
      <Icon />
      {text}
    </li>
  )
}

export default Sidebar