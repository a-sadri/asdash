import './navbar.scss';
import {
  MdSearch,
  MdLanguage,
  MdOutlineDarkMode,
  MdOutlineFullscreenExit,
  MdNotificationsNone,
  MdOutlineChatBubbleOutline,
  MdFormatListBulleted,
} from 'react-icons/md';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search ...' />
          <MdSearch />
        </div>
        <div className='items'>
          <div className='item'>
            <MdLanguage className='icon' />
            English
          </div>
          <div className='item'>
            <MdOutlineDarkMode className='icon' />
          </div>
          <div className='item'>
            <MdOutlineFullscreenExit className='icon' />
          </div>
          <div className='item'>
            <MdNotificationsNone className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <MdOutlineChatBubbleOutline className='icon' />
            <div className='counter'>3</div>
          </div>
          <div className='item'>
            <MdFormatListBulleted className='icon' />
          </div>
          <div className='item'>
            <img src='images/user.png' alt='avatar' className='avatar' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
