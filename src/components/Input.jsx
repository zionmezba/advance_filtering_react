const Input = ({ handleChange, value, title, name, color, border, className }) => {
  return (
    <label htmlFor="" className="sidebar-label-container">
      <input onChange={handleChange}
        type="radio"
        name={name}
        value={value}
        id="" />
      <span className={"checkmark " + className}
        style={{ backgroundColor: color , border: border}}></span>
      {title}
    </label>
  )
}
export default Input