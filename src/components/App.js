import React, {useState} from 'react';
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
import { UserProvider } from "../context/AuthContext";


function App() {

    const [isAuth, setIsAuth] = useState(true)

    const user = {
        name: 'James',
    }
    const login = () => {
        setTimeout(() => setIsAuth(true), 1000)
    }
    const logout = () => {
        setIsAuth(false)
    }


    return (
        <UserProvider value={{
            user,
            logout,
            login
        }}>
            { isAuth ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
        </UserProvider>
    )
}

export default App;
