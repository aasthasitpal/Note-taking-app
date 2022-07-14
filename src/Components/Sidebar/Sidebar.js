import React, { useState }  from 'react';
import plusicon from '../../imgs/plus.png';
import './Sidebar.css'

function Sidebar(props) {
  const color = [ "#F47FC1" , "#D081F2" ,"#7373E9" , "#73E9E9" , "#E97A73" ]  
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className='Sidebar'>
      <img src={plusicon}  alt = 'Add' onClick={() => setListOpen(!listOpen)}> </img>
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        { 
        color.map((item, index) => 
        (
          <li key={index} 
          className='SidebarList_items'
          style = {{backgroundColor : item}}
          onClick ={() => props.addNote(item)} 
          />
        ))
        }
      </ul>
    </div>
  )
}

export default Sidebar;