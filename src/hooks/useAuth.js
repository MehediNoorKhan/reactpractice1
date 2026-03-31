import { use } from "react";
import { AuthContext } from "../context/authContext";

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
}

export default useAuth;