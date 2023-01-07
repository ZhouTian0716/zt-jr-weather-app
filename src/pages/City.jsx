import { useParams } from "react-router-dom";

const City = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default City;
