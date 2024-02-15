const FormSelect = ({ label, name, items, defaultValue }) => {
 return (
  <section className="form-control">

   <label className="label" htmlFor={name}>
    <span className="label-text">{label}</span>
   </label>

   <select name={name} id={name} defaultValue={defaultValue} className="w-56 h-6  rounded-lg border text-sm pl-5">
    {
     items.map((item, index) => {
      return (
       <option key={index} value={item}>
        {item}
       </option>
      )
     })
    }
   </select>
  </section>
 )
}
export default FormSelect