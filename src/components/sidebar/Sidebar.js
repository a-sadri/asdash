import './sidebar.scss';
import {
  MdDashboard,
  MdSupervisorAccount,
  MdProductionQuantityLimits,
  MdShoppingCart,
  MdQueryStats,
  MdNotificationsActive,
  MdPsychology,
  MdOutlinePersonPin,
  MdSettings,
  MdLogout,
} from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>AS Admin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <li>
            <MdDashboard />
            <span>Dashboard</span>
          </li>
          <li>
            <MdSupervisorAccount />
            <span>Users</span>
          </li>
          <li>
            <MdProductionQuantityLimits />
            <span>Products</span>
          </li>
          <li>
            <MdShoppingCart />
            <span>Orders</span>
          </li>
          <li>
            <MdQueryStats />
            <span>Stats</span>
          </li>
          <li>
            <MdNotificationsActive />
            <span>Notifications</span>
          </li>
          <li>
            <MdPsychology />
            <span>Logs</span>
          </li>
          <li>
            <MdOutlinePersonPin />
            <span>Profile</span>
          </li>
          <li>
            <MdSettings />
            <span>Settings</span>
          </li>
          <li>
            <MdLogout />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>color option</div>
    </div>
  );
};

export default Sidebar;
