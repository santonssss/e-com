import style from "./style.module.css";
const { category, categoryImg, categoryTitle } = style;
const Category = () => {
  return (
    <div className={category}>
      <div className={categoryImg}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9m7a-6zABrhWpSzeYUJE4b-E9Sb22f9E21w&s"
          alt="women-tshirt"
        />
      </div>
      <h4 className={categoryTitle}>Title</h4>
    </div>
  );
};

export default Category;
