import React from "react";
import s from "./Partners.module.css";
import partners from "./images/img.png";
import {ReactComponent as KuCoin} from "./images/g6382.svg";
import {ReactComponent as Gate} from "./images/gateio.svg";
import {ReactComponent as Binance} from "./images/binance.svg";
import kraken from "./images/img_3.png"

export const Partners = () => {
    return (
        <div className={s.Wrapper}>
            <div className={s.PartnerContainer}>
            <div className={s.Container}>
                <div className={s.LogoWrapper}>
                    <KuCoin className={s.Logo_1}/>
                    <p>KuCoin.com</p>
                </div>
                <div className={s.LogoWrapper}>
                    {/*<Kraken className={s.Logo_2}/>*/}
                    <img src={kraken} className={s.Logo_2}/>
                    <p>Kraken.com</p>
                </div>

                <div className={s.LogoWrapper}>
                    <Gate className={s.Logo_3}/>
                    <p>Gate.io</p>
                </div>
                <div className={s.LogoWrapper}>
                    <Binance className={s.Logo_4}/>
                    <p>Binance.com</p>
                </div>
            </div>
            <img src={partners} className={s.PartnerLogo}/>
        </div>
        </div>
    )
}