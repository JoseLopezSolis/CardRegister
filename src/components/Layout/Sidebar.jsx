import backgroundSidebar from "../../assets/images/bg-main-desktop.png";
import Classes from "./Sidebar.module.css";
const Sidebar = () => {
  return <img className={Classes.img} src={backgroundSidebar} alt="" />;
};

export default Sidebar;
