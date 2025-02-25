import { Category } from "@components/ecommerce";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);
  const categoriesList =
    records.length > 0
      ? records.map((item) => {
          return (
            <Col
              xs={3}
              key={item.id}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Category {...item} />
            </Col>
          );
        })
      : "Categories is not exist";
  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  );
};

export default Categories;
