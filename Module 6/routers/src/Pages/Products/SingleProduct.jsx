import { useNavigate, useParams } from "react-router-dom";

function SingleProduct() {
  //  it is a hook inside the reacct dom 
  
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2> product {id}</h2>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
}

export default SingleProduct;
