import menuData from "./menu.json";
import './menu.css';
import Subcategories from './Subcategories'; // Import the Subcategories component
import type { Category, Item } from "./types/menu";

const Menu = () => {
  return (
    <div className="menu">
      <h1>713 BAR ARCADE</h1>
      <h2>Menu y precios</h2>
      {menuData.menu.map((category: Category, index: number) => (
        !category.disabled && (<div key={index} className="category">
          <h3>{category.category}</h3>
          {/* <p>{JSON.stringify(category)}</p> */}
          {
            category.subcategories ?
              <Subcategories category={category}></Subcategories> : (
                <ul>
                  {category?.items?.map((item: Item, itemIndex: number) => (
                    !item.disabled && (<li key={itemIndex}>
                      {item.image && <img src={`/assets/icons/${item.image}`} alt={item.name} width={40}>{item.name}</img>}
                      {<div className="foodname">{item.name}</div>}
                      {item.description && <div className="desc">{item.description}</div>}
                      {typeof item.price === 'number' ? (
                        <span>${item.price}{item.unit ? `/${item.unit}` : ''}</span>
                      ) : (
                        <ul>
                          {Object.entries(item.price || {}).map(([tipo, valor]) => (
                            <li key={tipo}>{tipo}: ${valor}</li>
                          ))}
                        </ul>
                      )}
                    </li>)
                  ))}
                </ul>
              )}
        </div>)
      ))}
    </div>
  );
};

export default Menu;