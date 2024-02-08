// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// function OpenRoute({Children}){
//     const {token} = useSelector((state) => state.auth);
//         if(token === null){
//             return Children;
//         }
//         else{
//             return Navigate("/dashboard/my-profile");
//         }
    
// }

// export default OpenRoute;

import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth)

  if (token === null) {
    return children
  } else {
    return <Navigate to="/dashboard/my-profile" />
  }
}

export default OpenRoute