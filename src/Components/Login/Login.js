import React, { useContext } from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import { UserContext } from '../../Context/UserContext'
import LoginCreate from '../LoginCreate/LoginCreate'
import LoginForm from '../LoginForm/LoginForm'
import LoginPasswordLost from '../LoginPasswordLost/LoginPasswordLost'
import LoginPasswordReset from '../LoginPasswordReset/LoginPasswordReset'
import NotFound from '../NotFound/NotFound'
import styles from "./Login.module.css"


function Login() {

    const { login } = useContext(UserContext)

    if (login) return <Navigate to="/conta" />

    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path='/' element={<LoginForm />} />
                    <Route path='/criar' element={<LoginCreate />} />
                    <Route path='/perdeu' element={<LoginPasswordLost />} />
                    <Route path='/resetar' element={<LoginPasswordReset />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </div>
        </section>
    )
}

export default Login;