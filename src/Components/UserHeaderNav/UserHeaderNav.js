import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { ReactComponent as AddSvg } from "../../Assets/adicionar.svg"
import { ReactComponent as EstatisticasSvg } from "../../Assets/estatisticas.svg"
import { ReactComponent as FeedSvg } from "../../Assets/feed.svg"
import { ReactComponent as SairSvg } from "../../Assets/sair.svg"
import { UserContext } from '../../Context/UserContext'
import useMedia from '../../Hooks/useMedia'
import { useLocation } from "react-router-dom";


import styles from "./UserHeaderNav.module.css";


const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const [mobileMenu, setMobileMenu] = useState(false);

    const mobile = useMedia("(max-width: 40rem)");

    const { pathname } = useLocation();
    useEffect(() => {
        setMobileMenu(false)
    }, [pathname]);

    return (
        <>
            {mobile && <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                aria-label='Menu'
                onClick={() => setMobileMenu(!mobileMenu)}>
            </button >}

            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>

                <NavLink to="/conta" end>
                    <FeedSvg />
                    {mobile && "Minhas Fotos"}
                </NavLink>

                <NavLink to="/conta/estatisticas">
                    <EstatisticasSvg />
                    {mobile && "Estatísticas"}
                </NavLink>

                <NavLink to="/conta/postar">
                    <AddSvg />
                    {mobile && "Adicionar Fotos"}
                </NavLink>

                <button onClick={userLogout}>
                    <SairSvg />
                    {mobile && "Sair"}

                </button>
            </nav>
        </>
    )
}

export default UserHeaderNav;