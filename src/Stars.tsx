const Stars = (thePrices) => {
  const { prices } = thePrices;
  return (
    <div className="stars">
      {prices.map((price, index) => (
        <div className="star" key={index}><span>{price.type}</span><span>{price.value}</span></div>
      ))}
    </div>
  );
}
export default Stars;