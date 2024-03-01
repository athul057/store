import { Form, Link, redirect } from "react-router-dom";
import FormInput from "../components/FormInput";
import { SubmitBtn } from "../components";
import { customFetch } from "../utils";

export const action = async ({ request }) => {
 const formData = await request.formData();
 const data = Object.fromEntries(formData);



 try {
  const response = await customFetch.post('/auth/local/register', data);

  return redirect('/login');
 }
 catch (error) {
  console.log(error);
  const errorMsg = error?.response?.data?.error?.message;
  console.log(errorMsg);
  return null;
 }

}

const Register = () => {
 return (
  <section className="h-screen grid place-items-center">
   <Form method="post" className="p-8 w-96 shadow-lg">
    <h4 className="text-xl font-bold text-center">REGISTER</h4>
    <FormInput label='Username' name='username' type='text' />
    <FormInput label='Email' name='email' type='email' />
    <FormInput label='Password' name='password' type='password' />
    <div className="mt-4">
     <SubmitBtn />
    </div>
    <p className="mt-4 text-center">Already a member? <Link to='/login' className="text-secondary link link-hover">Login</Link></p>
   </Form>




  </section>
 )
}
export default Register;