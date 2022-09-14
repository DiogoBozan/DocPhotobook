import React from 'react'
import UserHeader from '../UserHeader/UserHeader'
import styles from "./User.module.css"
import { Routes, Route } from "react-router-dom"
import Feed from '../Feed/Feed'
import UserPhotoPost from '../UserPhotoPost/UserPhotoPost'
import UserStats from '../UserStats/UserStats'

const User = () => {
    return <section className='container'>
        <UserHeader />
        <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='postar' element={<UserPhotoPost />} />
            <Route path='estatistica' element={<UserStats />} />
        </Routes>
    </section>
}

export default User;