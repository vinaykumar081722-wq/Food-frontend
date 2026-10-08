import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Menu</h1>
      <p className='explore-menu-text'>
        Explore our menu with a variety of tasty dishes. We aim to satisfy your cravings and make every meal special.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item) => {
          return (
            <div 
              key={item.menu_name}  
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
              className="explore-menu-list-item"
            >
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
