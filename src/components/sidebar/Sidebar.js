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
          <p className='title'>Main</p>
          <li>
            <MdDashboard className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>List</p>
          <li>
            <MdSupervisorAccount className='icon' />
            <span>Users</span>
          </li>
          <li>
            <MdProductionQuantityLimits className='icon' />
            <span>Products</span>
          </li>
          <li>
            <MdShoppingCart className='icon' />
            <span>Orders</span>
          </li>
          <p className='title'>Useful</p>
          <li>
            <MdQueryStats className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <MdNotificationsActive className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>Service</p>
          <li>
            <MdPsychology className='icon' />
            <span>Logs</span>
          </li>
          <p className='title'>User</p>
          <li>
            <MdOutlinePersonPin className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <MdSettings className='icon' />
            <span>Settings</span>
          </li>
          <li>
            <MdLogout className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
};

export default Sidebar;
