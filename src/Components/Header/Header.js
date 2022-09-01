import React from 'react'
import styles from "./styles.css"
import { Link } from "react-router-dom";
import "../../App.css"
import { ReactComponent as DogsSvg } from "../../Assets/dogs.svg";



function Header() {
    return (
        <div className={styles.header}>
            <nav className='container'>
                <Link className={styles.logo} to="/" aria-label='dogs home'>
                    <DogsSvg />
                </Link>
                <Link to="/login">Login/Criar</Link>
            </nav>
        </div>
    )
}

export default Header;