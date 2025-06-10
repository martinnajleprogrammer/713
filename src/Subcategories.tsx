import type { Category, Subcategory, Item } from './types/menu';

const Subcategories = ({ category }: { category: Category }) => { 
  return category?.subcategories?.map((subcategory: Subcategory, subIndex: number) => (
  <ul key={subIndex}>
    {typeof subcategory.price === 'number' ? (
      <li><h4>{subcategory.name}</h4>
        <span>${subcategory.price}</span>
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
            <p><span className={item.image ? 'foodname': 'special' }>{item.name}</span>: {item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </ul>
))
};
export default Subcategories;