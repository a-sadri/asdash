import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img src='/images/user2.png' alt='' className='itemImg' />
              <div className='details'>
                <h1 className='itemTitle'>Jane Doe</h1>
                <div className='itemDetail'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>Jaindoe@gmail.com</span>
                </div>
                <div className='itemDetail'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+1 3454 34 76</span>
                </div>
                <div className='itemDetail'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>elton St, david sq</span>
                </div>
                <div className='itemDetail'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>Germany</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title='User spending (last 6 month)' />
          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
