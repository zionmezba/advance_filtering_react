import './Category.css';

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">
        Category
      </h2>
      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" id="" />
          <span className="checkmark"></span>All
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" id="" />
          <span className="checkmark"></span>Sneakers
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" id="" />
          <span className="checkmark"></span>Flats
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" id="" />
          <span className="checkmark"></span>Sandles
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" id="" />
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </div>
  )
}
export default Category