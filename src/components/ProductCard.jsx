

export default function ProductCard({ data: { title, description, price, image } }) {
  return (
    <div className='productCard'>
      <div className='containerColumn'>
        <img src={image} className='productCardImage' alt={title}/>
        <div className='productCardTitle'>{title}</div>
        <div className='productCardDescription'>{description}</div>
      </div>
      <div className='containerColumn'>
        <div className='productCardPrice'>{price} <img src='/icon/runes.png' alt='Runes'/></div>
        <button className='productCardBuy'>Add to cart <img src='/icon/cart-white2.png'/></button>
      </div>
    </div>
  );
};