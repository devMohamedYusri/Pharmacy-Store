// import { useContext,useState,useEffect,createContext } from "react";

// const AuthContext=createContext();

// export const useAuth=()=>useContext(AuthContext);

// export const AuthProvider=({children})=>{
//     const [isAuth,setIsAuth]=useState(false);

//     useEffect(()=>{ 
//         const token=secureLocalStorage.getItem("token");
//         if(token){

//         }
// },[]);
    
//     return (
//         <AuthContext.Provider value={isAuth}>
//             {children}
//         </AuthContext.Provider>
//     )
// }