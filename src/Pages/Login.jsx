import { Form, Link, redirect, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { SubmitBtn } from "../components";
import axios from "axios";
import { customFetch } from "../utils";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/Userslice";


export const action = (store) => async ({ request }) => {


 const formData = await request.formData();

 const data = Object.fromEntries(formData);


 try {
  const response = await customFetch.post('/auth/local', data);
  store.dispatch(loginUser(response.data))
  return redirect('/')
 } catch (error) {

  const errorMsg = error?.response?.data?.error?.message;
  console.log(errorMsg);
  return null;

 }

}

const Login = () => {

 const navigate = useNavigate();
 const dispatch = useDispatch();
 const handleGuestUser = async () => {
  try {
   const response = await customFetch.post('/auth/local', {
    identifier: 'test@test.com',
    password: 'secret',
   })
   dispatch(loginUser(response.data));

   return navigate('/');

  } catch (error) {
   const errorMsg = error?.response?.data?.error?.message;
   console.log(errorMsg);
   return null;
  }
 }
 return (
  <section className="h-screen grid place-items-center ">
   <Form method="post" className="p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 w-96">
    <h4 className="text-xl font-bold text-center">LOGIN</h4>
    <FormInput type="text" name="identifier" label="Email" />
    <FormInput type="password" name="password" label="Password" />
    <SubmitBtn className="mt-4 " text="Submit" />
    <button className="btn btn-secondary mt-4 btn-block" type="button" onClick={handleGuestUser}>Guest User</button>
    <p className="text-center">Not a member yet? <Link to='/register' className="text-secondary link link-hover ">Register</Link></p>
   </Form>
  </section>
 )
}
export default Login;