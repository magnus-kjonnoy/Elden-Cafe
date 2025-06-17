

export default function CategoryCard({ data: { image, title } }) {
  return (
    <a className='merchantCard' href=''>
      <img src={image} className='merchantCardImage' alt={title}/>
      <div className='merchantCardTitle'>{title}</div>
    </a>
  );
};