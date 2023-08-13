import { signInWithGooglePopup } from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUSer = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>This is sign in page</h1>
      <button onClick={logGoogleUSer}>Sign In</button>
    </div>
  );
};

export default SignIn;
