import './Price.css';

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">
        Price
      </h2>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test" id="" />
        <span className="checkmark"></span>All
      </label>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test2" id="" />
        <span className="checkmark"></span>0 - $50
      </label>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test3" id="" />
        <span className="checkmark"></span>$50 - $100
      </label>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test4" id="" />
        <span className="checkmark"></span>$100 - $150
      </label>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test5" id="" />
        <span className="checkmark"></span>$150 - $200
      </label>
    </div>
  )
}
export default Price