import { Product } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(actGetProductsByPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);
  const { error, loading, records } = useAppSelector((state) => state.products);
  const productsList =
    records.length > 0
      ? records.map((item) => {
          return (
            <Col
              xs={3}
              key={item.id}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Product {...item} />
            </Col>
          );
        })
      : "Products is not exist";

  return (
    <Container>
      <Row>{productsList}</Row>
    </Container>
  );
};

export default Products;
