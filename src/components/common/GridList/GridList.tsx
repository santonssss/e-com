import { Col, Row } from "react-bootstrap";

type TGridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.JSX.Element;
};
type THasId = {
  id: number;
};
const GridList = <T extends THasId>({
  records,
  renderItem,
}: TGridListProps<T>) => {
  const renderList =
    records.length > 0
      ? records.map((item) => {
          return (
            <Col
              xs={3}
              key={item.id}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              {renderItem(item)}
            </Col>
          );
        })
      : "Data is not exist";
  return <Row>{renderList}</Row>;
};

export default GridList;
