import React from "react";
import s from "../common/step4/Step4.module.css";
import {ReactComponent as Copy} from "../common/step3/Vector2.svg";
import {ReactComponent as Arrow} from "../common/step4/imgs/ArrowDown.svg";
import {Step2Type} from "../common/step2/Step";


export const Completed = (props:Step2Type) => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Notify}>
                <p>Exchange is completed</p>
                <p>The exchange has been completed<br/>
                    sucsessfully. You have most likely alrady <br/>
                    received your funds.</p>
            </div>
            <div className={s.CounterWrapper}>
                <div className={s.YouSendBlock}>
                    <p>You Send</p>
                    <div className={s.Value}>
                        {props.youSendForm}
                    </div>
                    {/*<input type="number" placeholder={'0.01'} min={1} max={7}/>*/}
                    <div className={s.FooterCurrency_left}>
                        {props.youSendCurrency.logo}
                        {props.youSendCurrency.title}
                        {/*<Btc className={s.Logo}/>*/}
                        {/*BTC*/}
                    </div>
                </div>
                <div className={s.YouGetBlock_right}>
                    <p>You Get</p>
                    <div className={s.Value}>
                        {props.youGetForm}
                        {/*~0.056445*/}
                    </div>
                    {/*<input type="number" placeholder={'~0.056445541'} min={1} max={7}/>*/}
                    <div className={s.FooterCurrency}>
                        {props.youGetCurrency.logo}
                        {props.youGetCurrency.title}
                        {/*<Eth className={s.Logo}/>*/}
                        {/*ETH*/}
                    </div>
                </div>
            </div>
            <div className={s.ExchangeId}>
                <div className={s.HashIn}>
                    <p>hash in</p>
                    <p>BTCkdkf9384_wfsdu38ejdjlfiay8e8</p>
                </div>
                <Copy className={s.Copy}/>
            </div>
            <div className={s.ExchangeId}>
                <div className={s.HashOut}>
                    <p>hash out</p>
                    <p>KJdhdjskjd00e0-erd</p>
                </div>

                <Copy className={s.Copy}/>

            </div>
            <div className={s.ExchangeId}>
                <p>Exchange ID</p>
                <p>zhfe88sdiuad8
                    <Copy className={s.Copy}/></p>

            </div>
            <div className={s.MoreInfo}>
                <p>More Info</p>
                <Arrow/>
            </div>
            <div className={s.Btns}>
                <button className={s.NotifyBtn}>Notify me</button>
                <button className={s.NewExchangeBtn}>New exchange</button>
            </div>
        </div>
    )
}

