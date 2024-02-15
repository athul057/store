const FormCheckbox = ({ defaultvalue }) => {
 return (
  <div className="form-control items-center">
   <label className=" label label-text cursor-pointer capitalize">
    Free Shipping
   </label>
   <input type="checkbox" name="shipping" defaultChecked={defaultvalue} className="checkbox checkbox-primary checkbox-sm" />
  </div>

 )
}
export default FormCheckbox