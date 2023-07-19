import React, {ReactElement, useState} from "react";
import s from "./Currencies.module.css";
import {ReactComponent as Back} from "./images/Back.svg";
import {ReactComponent as Search} from "./images/Search.svg";
import {ReactComponent as ZRX} from "./imgs/Logo1.svg";
import {ReactComponent as BTC} from "./imgs/BTC.svg";
import {ReactComponent as ZRX2} from "./imgs/ZRX2.svg";
import {ReactComponent as INCH} from "./imgs/1inch-1inch-logo.svg";
import {ReactComponent as ZEC} from "./imgs/zcash-zec-logo.svg";
import {ReactComponent as SOL} from "./imgs/4093934f73fe0d59165a19ccc25f049d.svg";
import {ReactComponent as XMR} from "./imgs/c52aabcca125ab1b23b2946181233fc3.svg";
import {ReactComponent as CRZ} from "./imgs/e24f845be1555b47c3eac0bb49729f50.svg";
import {ReactComponent as Done} from "./images/Checked.svg";


export type UnitStateType = {
    id:number
    title:string
    logo:ReactElement
    info:string
    network:string | ''
    networkInfo:string | ''
    isDone:boolean
    rate:number
}

type CurrenciesStateType = {
    closeCurrencies:() => void
    selectUnit:(unitId:number) => void
    currency:UnitStateType[]
    currentCurrency: UnitStateType
    disabledCurrency: UnitStateType
}

export const Currencies = (props:CurrenciesStateType) => {


    return(
        <div className={s.Wrapper}>
            <div className={s.Header}>
                <Back className={s.Logo} onClick={props.closeCurrencies} />
                <p>You send</p>
            </div>
            <div className={s.InputWrapper}>
                <Search/>
                <input type={"text"} placeholder={'Search'}/>
            </div>
            <div className={s.Units}>
                {
                    props.currency.map(u => {
                        const disabled = u.id === props.disabledCurrency.id
                        const selectUnitHandler = () => {
                            disabled || props.selectUnit(u.id)
                        }
                        const isDone = u.id === props.currentCurrency.id;
                        return(
                            <div className={isDone ? s.ClickedItem : s.WrapperItem}
                                 style={{opacity: disabled ? 0.5 : 1}}
                                 onClick={selectUnitHandler}>
                                <div className={s.LogoItem}>{u.logo}</div>
                                <div className={s.ItemInfoWrapper}>
                                    <div className={s.ItemTitle}>{u.title}<span>{u.info}</span></div>

                                    {
                                        u.network && u.networkInfo
                                            ? <div className={s.ItemInfo}>
                                                <div>
                                                    {u.network}
                                                </div>
                                                <span>{u.networkInfo}</span>
                                            </div>
                                            : ""
                                    }
                                </div>
                                {
                                    isDone &&  <Done className={s.Done}/>
                                }

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}