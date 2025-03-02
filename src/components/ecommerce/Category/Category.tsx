import { Link } from "react-router-dom";
import style from "./style.module.css";
import { TCategory } from "@customTypes/Category";

const { category, categoryImg, categoryTitle } = style;

const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className={`${category} text-center rounded-4 p-3 shadow-lg bg-white`}>
      <Link
        to={`/categories/products/${prefix}`}
        className="text-decoration-none"
      >
        <div className={`${categoryImg} mb-3 overflow-hidden rounded-4`}>
          <img
            src={img}
            alt={title}
            className="img-fluid w-100 object-fit-cover"
            style={{ height: "200px", transition: "transform 0.3s ease" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <h4 className={`${categoryTitle} text-dark fw-bold`}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
