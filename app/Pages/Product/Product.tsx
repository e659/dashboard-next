import Single from "../../Components/SingleProfile/Single"
import { singleProduct } from "../../data"
import "./product.scss"

const Product = () => {

  //Fetch data and send to Single Component
  return (
    <div className="product">
       <Single {...singleProduct}/>
    </div>
  )
}

export default Product