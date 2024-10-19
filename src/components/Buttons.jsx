const Buttons = ({ onClickHandler, value, title }) => {
    return (
        <button className="btns" onClick={onClickHandler} value={value}>{title}</button>
    )
}
export default Buttons;