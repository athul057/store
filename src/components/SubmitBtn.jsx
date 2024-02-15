import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {

 const navigation = useNavigation();
 const isSubmitting = navigation.state === 'submitting';
 return (
  <button type='submit' className="btn btn-primary btn-block" disabled={isSubmitting}>
   {
    isSubmitting ? <span class="loading loading-spinner loading-xs"></span> : text || 'Submit'
   }
  </button>
 )
}

export default SubmitBtn;