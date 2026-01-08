import Stars from './Stars';
import type { Category, Subcategory, Item } from './types/menu';

const Subcategories = ({ category }: { category: Category }) => {
  return category?.subcategories?.map((subcategory: Subcategory, subIndex: number) => (
    <>
      <ul key={subIndex}>
        {typeof subcategory.price === 'number' || category.category === 'Pizzas' ? (
          <li><h4>{subcategory.name}</h4>
            {typeof subcategory.price === 'number' && <span>${subcategory.price}</span>}
          </li>
        ) : (
          <ul>
            {Object.entries(subcategory.price || {}).map(([tipo, valor]) => (
              <li key={tipo}>{tipo}: ${valor}</li>
            ))}
          </ul>
        )}
        <ul>
          {subcategory.items.map((item: Item, itemIndex: number) => (
            <li key={itemIndex}>
              <div className="item">

                {item.image && <img src={`/assets/icons/${item.image}`} alt={item.name} width={40} />}
                <p><span className={item.image ? 'foodname' : 'special'}>{item.name}</span>: {item.description}</p>
                {typeof item.price === 'number' ? <span>{item.price}</span> : null}
              </div>
            </li>
          ))}
        </ul>
      </ul>
      {category.category === "Hamburguesas" && category.subcategories && category.subcategories[0].prices && <Stars prices={category.subcategories[0].prices} />}
    </>
  ))
};
export default Subcategories;