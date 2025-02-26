import { TLoading } from "@customTypes/shared";
import { Spinner } from "react-bootstrap";

type TLoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};
const Loading = ({ status, error, children }: TLoadingProps) => {
  if (status == "pending") {
    return (
      <div className="center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (status == "failed") {
    return <div>{error}</div>;
  }
  return <div>{children}</div>;
};

export default Loading;
