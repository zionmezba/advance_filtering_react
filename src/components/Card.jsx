import { FaStar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

const Card = ({img, title, star, reviews, prevPrice, newPrice, }) => {
  return (
    <section className="card">
      <img className='card-img' src={img} alt={title} />
      <div className="card-details">
        <h3 className='card-title'>{title}</h3>
        <section className="card-review">
          <FaStar className='rating-star' />
          <FaStar className='rating-star' />
          <FaStar className='rating-star' />
          <FaStar className='rating-star' />
          <FaStar className='rating-star' />
          <span className="total-reviews" >
            {reviews}
          </span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className='bag'>
            <IoBag className='bag-icon' />
          </div>
        </section>

      </div>
    </section>
  )
}
export default Card