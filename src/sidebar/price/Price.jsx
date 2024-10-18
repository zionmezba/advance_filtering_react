import Input from '../../components/Input';
import './Price.css';

const Price = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title price-title">
        Price
      </h2>
      <Input handleChange={handleChange} title='All' value='' name='price' />
      <Input handleChange={handleChange} title='$25 - 50' value='50' name='price' />
      <Input handleChange={handleChange} title='$50 - 100' value='100' name='price' />
      <Input handleChange={handleChange} title='$100 - 150' value='150' name='price' />
      <Input handleChange={handleChange} title='Over $200' value='200' name='price' />
    </div>
  )
}
export default Price