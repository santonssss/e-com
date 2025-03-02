import { GridList, Heading } from "@components/common";
import { Category } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { TCategory } from "@customTypes/Category";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

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

  return (
    <Container>
      <Heading>Category</Heading>
      <Loading status={loading} error={error}>
        <GridList<TCategory>
          records={records}
          renderItem={(item) => <Category key={item.id} {...item} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
