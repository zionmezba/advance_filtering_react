import './Recommended.css';

const Recommended = () => {
    return (
        <div>
        <h2 className='recommended-title'>Recommended</h2>
            <div className="recommended-flex">
                <button className="btns">All</button>
                <button className="btns">Tops</button>
                <button className="btns">Bottoms</button>
                <button className="btns">Accessories</button>
            </div>
        </div>
    )
}
export default Recommended;