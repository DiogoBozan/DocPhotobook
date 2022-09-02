import React, { useContext } from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import { UserContext } from '../../Context/UserContext'
import LoginCreate from '../LoginCreate/LoginCreate'
import LoginForm from '../LoginForm/LoginForm'
import LoginPasswordLost from '../LoginPasswordLost/LoginPasswordLost'
import LoginPasswordReset from '../LoginPasswordReset/LoginPasswordReset'

function Login() {

    const { login } = useContext(UserContext)

    if (login) return <Navigate to="/conta" />

    return (
        <>
            <p>this is a my login page</p>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='/criar' element={<LoginCreate />} />
                <Route path='/perdeu' element={<LoginPasswordLost />} />
                <Route path='/resetar' element={<LoginPasswordReset />} />

                {/* <div className={styles.login}>

            </div> */}
            </Routes>
        </>
    )
}

export default Login;