const FormInput = ({ label, name, type, defaultvalue, size }) => {
 return <label className="form-control">
  <div className="label">
   <span className="label-text capitalize">{label}</span>
  </div>
  <input type={type} name={name} defaultValue={defaultvalue} placeholder="Type here" className={`input input-bordered  ${size}`} />

 </label>
}
export default FormInput;