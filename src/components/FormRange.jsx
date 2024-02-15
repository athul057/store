import { useState } from "react";


const FormRange = ({ defaultValue }) => {
 const maxPrice = 100, step = 10;
 const [val, setVal] = useState(defaultValue || maxPrice)

 return (
  <div>
   <label className="capitalize cursor-pointer flex justify-between tracking-wide font-semibold" htmlFor='range'>
    <span className="label-text text-sm">selectd price</span>
    <span className="text-xs">{val}</span>
   </label>
   <input name='range' className="range range-sm range-secondary" type="range" value={val} min={0} max={maxPrice} step={step} onChange={(e) => setVal(parseInt(e.target.value))} />
   <div className="flex justify-between text-xs font-semibold tracking-wider">
    <span>0</span>
    <span>Max: {maxPrice}$</span>

   </div>
  </div>
 )
}


export default FormRange;