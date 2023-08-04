import { createContext, useEffect, useState } from "react";
import axios from "axios";

 const UserContext = createContext();

const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    
    axios.defaults.withCredentials = true;
    
    useEffect(()=>{
        axios.get("http://localhost:3001/home")
        .then(user => setUser(user.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider };
export default UserContext;