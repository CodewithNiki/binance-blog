import { createContext, useEffect } from "react";
import axios from "axios";

 const UserContext = createContext;

const UserProvider = ({children}) =>{
    useEffect(()=>{
        axios.get("http://localhost:3001/home")
        .then(user => console.log(user))
        .catch(err => console.log(err))
    }, [])

    return(
        <UserContext.Provider value="">
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider };
export default UserContext;