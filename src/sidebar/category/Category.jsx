import Input from '../../components/Input';
import './Category.css';

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">
        Category
      </h2>
        <Input 
          handleChange={handleChange}
          value=''
          title='All'
          name='test'
        />
        <Input 
          handleChange={handleChange}
          value='sneakers'
          title='Sneakers'
          name='test'
        />
        <Input 
          handleChange={handleChange}
          value='heels'
          title='Heels'
          name='test'
        />
        <Input 
          handleChange={handleChange}
          value='sandals'
          title='Sandals'
          name='test'
        />
        <Input 
          handleChange={handleChange}
          value='flats'
          title='Flats'
          name='test'
        />
        
    </div>
  )
}
export default Category