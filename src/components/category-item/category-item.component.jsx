import './category-item.styles.scss';

const CategoryItem = ({category}) => {
  console.log(category);
    const { imageUrl, title } = category;
return(
    <div className="category-container">
      
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Kupi</p>
    </div>
  </div>
)

}

export default CategoryItem;