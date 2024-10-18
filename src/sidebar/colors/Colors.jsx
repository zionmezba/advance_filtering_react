import Input from "../../components/Input"

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">
          Colors
        </h2>
        <Input handleChange={handleChange} title='All' value='' name='color' color='' className = 'all'/>
        <Input handleChange={handleChange} title='White' value='white' name='color' color='white' border={'2px solid black'} />
        <Input handleChange={handleChange} title='Black' value='black' name='color' color='black' />
        <Input handleChange={handleChange} title='Blue' value='blue' name='color' color='blue' />
        <Input handleChange={handleChange} title='Green' value='green' name='color' color='green' />
        <Input handleChange={handleChange} title='Red' value='red' name='color' color='red' />
      </div>
    </>
  )
}
export default Colors