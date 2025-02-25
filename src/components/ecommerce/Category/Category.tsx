import { Link } from "react-router-dom";
import style from "./style.module.css";
import { TCategory } from "@customTypes/Category";
const { category, categoryImg, categoryTitle } = style;

const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
