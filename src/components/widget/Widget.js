import './widget.scss';
import {
  MdKeyboardArrowUp,
  MdOutlinePersonPin,
  MdShoppingCart,
  MdOutlineMonetizationOn,
  MdOutlineAccountBalance,
} from 'react-icons/md';

const Widget = ({ type }) => {
  let data;

  // temp
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'Users',
        isMoney: false,
        link: 'See all users',
        icon: (
          <MdOutlinePersonPin
            className='icon'
            style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,.2)' }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'Orders',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <MdShoppingCart
            className='icon'
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218,165,32,.2)',
            }}
          />
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'Earning',
        isMoney: true,
        link: 'View net earning',
        icon: (
          <MdOutlineMonetizationOn
            className='icon'
            style={{ color: 'green', backgroundColor: 'rgba(0,128,0,.2)' }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'Balance',
        isMoney: true,
        link: 'See details',
        icon: (
          <MdOutlineAccountBalance
            className='icon'
            style={{ color: 'purple', backgroundColor: 'rgba(128,0,128,.2)' }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '$'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage negative'>
          <MdKeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
