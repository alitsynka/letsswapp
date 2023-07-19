import React from "react";
import s from "./Counter.module.css";
import {ReactComponent as PromoCodeLogo} from "./images/Vector.svg";
import {ReactComponent as VectorDown} from "./images/VectorDown.svg";
import {ReactComponent as Change} from "./images/change.svg";
import {CounterStateType} from "../main/Main";



const numberFormat = new Intl.NumberFormat("en-US", {minimumFractionDigits: 2});

export const Counter = (props:CounterStateType) => {

    console.log("test", props.youSendForm)

    return (
        <div className={s.Wrapper}>
            <div className={s.YouSendWrapper}>
                {/*<MenuCustom units={}/>*/}
                <div className={s.EnterWrapper}>
                    <p>You Send</p>
                    <input type={'number'} value={props.youSendForm}
                           onChange={props.changeSendValue} autoFocus/>
                    <p>≈${numberFormat.format(props.usd)}</p>
                </div>

                <div className={s.CurrencyWrapper}
                     onClick={() => props.openCurrencies("send")}>
                    {props.youSendCurrency.logo}
                    {/*<CoinSend className={s.CoinSend}/>*/}
                    <p>{props.youSendCurrency.title}</p>
                    <VectorDown/>
                </div>
            </div>
            <div className={s.YouGet}>
                <div className={s.OutPutWrapper}>
                    <p>You Get</p>
                    <input type={'number'} value={props.youGetForm}
                           onChange={props.changeGetValue}/>
                </div>
                <div className={s.CurrencyWrapper}
                     onClick={() => props.openCurrencies("get")}>
                    {props.youGetCurrency.logo}
                    {/*<CoinGet className={s.Coin}/>*/}
                    <p>{props.youGetCurrency.title}</p>
                    <VectorDown/>
                </div>
            </div>
            <Change className={s.ChangeValue} onClick={props.switchCurrency}/>
            <div className={s.PromoCode}>
                <PromoCodeLogo className={s.PromoLogo}/>
                <p>Add a promo code</p>
            </div>
        </div>
    )
}