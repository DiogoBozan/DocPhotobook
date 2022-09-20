import React from 'react'
import styles from "./Home.module.css"
import Feed from "../Feed/Feed"
import Head from '../Head/Head';

function Home() {
    return (
        <section className='container mainContainer'>
            <Head title="Fotos" descriptions="Home do site Dogs, com feed de fotos" />
            <Feed />
        </section>
    )
}

export default Home;