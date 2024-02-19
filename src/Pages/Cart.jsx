const Cart = () => {
 return <main>
  <h1 className="mt-8 text-4xl border-b pb-8">Shopping Cart</h1>
  <div className="grid gap-8 mt-6 text-2xl font-normal lg:grid-cols-12">
   <div className="grid lg:col-start-3 col-end-7">
    Cart Items
   </div>
   <div>
    Cart Toatals
   </div>
  </div>
 </main>
}
export default Cart;