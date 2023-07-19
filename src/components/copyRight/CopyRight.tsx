import React from "react";
import s from "./CopyRight.module.css";

export const CopyRight = () => {
    return(
        <div className={s.Wrapper}>
            <div className={s.CopyRightContainer}>
                <p>Copyright © 2022 LetsExchange. All rights reserved.</p>
                <div className={s.Tabs}>
                    <a href={"https://letsexchange.io/privacy-policy"} target={"_blank"}>Privacy Policy</a>
                    <a href={"https://letsexchange.io/terms-of-use"} target={"_blank"}>Terms Of Use</a>
                    <a href={""}>Cookie Policy</a>
                    <a href={""}>KYC/AML</a>
                </div>
            </div>

        </div>
    )
}