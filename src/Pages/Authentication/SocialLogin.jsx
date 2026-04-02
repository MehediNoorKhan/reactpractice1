import React from "react";
import useAuth from "../../hooks/useAuth";

export default function SocialLogin() {

    const { signInWithGoogle } = useAuth();

const googleSignIn = () => {
 
    signInWithGoogle().then((result) => {
    const user = result.user;
    console.log(user)
  
  }).catch((error) => {
    console.error('Error signing in with Google:', error);
  
  })

}


  return (
    <div>
      <div className="w-full flex items-center my-2">
        <div className="flex-grow h-px bg-gray-200" />
        <span className="mx-2 text-gray-400">Or</span>
        <div className="flex-grow h-px bg-gray-200" />
      </div>
      <button onClick ={googleSignIn} className="w-full flex items-center justify-center gap-2 bg-gray-100 text-black border border-gray-200 rounded-lg py-2 mt-1 cursor-pointer">
        <svg
          aria-label="Google logo"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Register with google
      </button>
    </div>
  );
}
