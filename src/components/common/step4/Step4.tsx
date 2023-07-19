import React, {ChangeEvent, useState} from "react";
import {useWizard} from "react-use-wizard";
import s from "./Step4.module.css";
import {ReactComponent as Btc} from "../step2/imgs/coinLogo1.svg";
import {ReactComponent as Eth} from "../step2/imgs/coinLogo2.svg";
import {ReactComponent as Vector} from "./imgs/Vector.svg";
import {ReactComponent as Copy} from "../step3/Vector2.svg";
import {ReactComponent as Arrow} from "./imgs/ArrowDown.svg";
import {ReactComponent as Btn} from "./imgs/bg.svg";
import {Step2Type} from "../step2/Step";

export const Step4 = (props:Step2Type) => {
    const {previousStep, nextStep} = useWizard();
    const [depositAddress, setDepositAddress] = useState('');

    const onChangeDepositAddressHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDepositAddress(e.currentTarget.value)
    }

    return (
        <div className={s.Wrapper}>
            <button onClick={nextStep}></button>
            <div className={s.Paragraphs}>
                <p>We have received your deposit</p>
                <p>Now we are exchanging your funds. Just wait, please. </p>
            </div>
            <div className={s.CounterWrapper}>
                <div className={s.YouSendBlock}>
                    <p>You Send</p>
                    <div className={s.Value}>
                        ~{props.youSendForm}
                    </div>
                    {/*<input type="number" placeholder={'0.01'} min={1} max={7}/>*/}
                    <div className={s.FooterCurrency_left}>
                        {props.youSendCurrency.logo}
                        {/*<Btc className={s.Logo}/>*/}
                        {props.youSendCurrency.title}
                        {/*BTC*/}
                    </div>
                </div>
                <div className={s.YouGetBlock_right}>
                    <p>You Get</p>
                    <div className={s.Value}>
                        ~{props.youGetForm}
                    </div>
                    {/*<input type="number" placeholder={'~0.056445541'} min={1} max={7}/>*/}
                    <div className={s.FooterCurrency}>
                        {props.youGetCurrency.logo}
                        {/*<Eth className={s.Logo}/>*/}
                        {props.youGetCurrency.title}
                        {/*ETH*/}
                    </div>
                </div>
            </div>
            <div className={s.RateBlock}>
                    <p>Exchange rate type</p>
                    <p>
                        Floating
                        <Vector className={s.Vector}/>
                    </p>
            </div>
            <div className={s.Lines}>
                <hr className={s.Line} />
                <hr className={s.Line} />
                <hr className={s.Line} />
                <hr className={s.Line} />
                <hr className={s.Line} />
            </div>

            <div className={s.ConfirmDeposit}>
                <p> Your deposit is being confirmed by the network</p>
            </div>
            <div className={s.DepositAddress}>
                <div>
                    {
                        depositAddress ? <p>Deposit address</p> : ''
                    }
                    <input type={"text"}
                        // autoFocus
                           value={depositAddress}
                           onChange={onChangeDepositAddressHandler}
                           placeholder={'Deposit address'}
                    />
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
                <button onClick={nextStep} className={s.NotifyBtn}>Notify me</button>
                <button onClick={previousStep} className={s.NewExchangeBtn}>New exchange</button>
            </div>
        </div>
    )
}