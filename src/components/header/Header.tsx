import React, {useState} from "react";
import s from "./Header.module.css";
import {ReactComponent as Logo} from "./images/vector.svg";
import {Link} from "react-scroll";
import {ReactComponent as Menu} from "./images/menu.svg";

export const Header = () => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={s.Container} id="header">
            <div className={s.Wrapper}>
                <Logo className={s.Logo}/>
                <div className={s.MenuTabs}>
                    <Link to="footer"
                          spy={true}
                          smooth={true}
                          offset={1}
                          duration={500}
                          className={s.Nav}>
                        My active exchanges</Link>
                    <Link to="/#" className={s.Nav}>About Us</Link>
                    <Link to="/#" className={s.Nav}>How it works</Link>
                </div>
                <Menu className={s.Menu}/>
            </div>
        </div>
    )
}