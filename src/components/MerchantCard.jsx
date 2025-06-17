

export default function MerchantCard({ data: { image, title, description } }) {
  return (
    <a className='merchantCard' href=''>
      <img src={image} className='merchantCardImage' alt={title}/>
      <div className='merchantCardTitle'>{title}</div>
      <div className='merchantCardDescription'>{description}</div>
    </a>
  );
};