import React, {useContext } from 'react'
import '../components-styling/UnauthenticatedApp.scss'
import AuthContext from '../context/AuthContext'
import Button from './Button'

const UnauthenticatedApp = () => {
    const authUser = useContext(AuthContext)

    return (
        <div className="container">
            <h2>Welcome back, {authUser.user.name}</h2>
             <Button
                 className="btn-primary"
                 handleClick={authUser.login}> Let me in </Button>
        </div>
    )
}

export default UnauthenticatedApp
