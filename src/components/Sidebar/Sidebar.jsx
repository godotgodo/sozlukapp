import React from 'react'
import Duyurubar from './Duyurubar';
import ─░silanibar from './─░silanibar';

function Sidebar({duyurular,isilani}) {
  return (
    <div className='w-1/6 bg-darkendark maxlg:hidden'>
      <Duyurubar duyurular={duyurular}/>
      <─░silanibar isilani={isilani}/>
    </div>
  )
}

export default Sidebar