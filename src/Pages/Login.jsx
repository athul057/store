import { Form, Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { SubmitBtn } from "../components";

const Login = () => {
 return (
  <section className="h-screen grid place-items-center ">
   <Form method="post" className="p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 w-96">
    <h4 className="text-xl font-bold text-center">LOGIN</h4>
    <FormInput type="text" name="identifier" label="Email" />
    <FormInput type="password" name="password" label="Password" />
    <SubmitBtn className="mt-4 " text="Submit" />
    <button className="btn btn-secondary mt-4 btn-block" type="button">Guest User</button>
    <p className="text-center">Not a member yet? <Link to='/register' className="text-secondary link link-hover">Register</Link></p>
   </Form>
  </section>
 )
}
export default Login;