import React from 'react'
import { Route, Routes } from "react-router-dom"
import { UserContext } from '../../Context/UserContext'
import Feed from '../Feed/Feed'
import Head from '../Head/Head'
import NotFound from '../NotFound/NotFound'
import UserHeader from '../UserHeader/UserHeader'
import UserPhotoPost from '../UserPhotoPost/UserPhotoPost'
import UserStats from '../UserStats/UserStats'

const User = () => {
    const { data } = React.useContext(UserContext);

    return (
        <section className='container'>
            <Head title="Minha conta" />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path='postar' element={<UserPhotoPost />} />
                <Route path='estatistica' element={<UserStats />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </section>
    )
}

export default User;