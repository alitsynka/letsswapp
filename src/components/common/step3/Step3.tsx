import React, {ChangeEvent, useState} from "react";
import {useWizard} from "react-use-wizard";
import s from "./Step3.module.css";
import {ReactComponent as Copy} from "./Vector2.svg";
import {ReactComponent as Qr} from "./Vector.svg";
import {ReactComponent as CoinLogo} from "./coinLogo.svg";
import {Step2Type} from "../step2/Step";
import {UnitStateType} from "../../currencies/Currencies";

type Step3Type = {
    youGetCurrency: UnitStateType
    youGetForm: number
}

export const Step3 = (props:Step3Type) => {
    const {previousStep, nextStep} = useWizard();
    const [depositAddress, setDepositAddress] = useState('');


    const onChangeDepositAddressHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDepositAddress(e.currentTarget.value)
    }


    return (
        <>
            <button onClick={nextStep}>next</button>
            <div className={s.Paragraphs}>
                <p>Send the exact amount to the address below </p>
                <p>After 0 network confirmation we will start the exchange process. </p>
            </div>

            <div className={s.QrBlock}>
                <div>
                    <div>
                        {/*<CoinLogo className={s.CoinLogo}/>*/}
                        {props.youGetCurrency.logo}
                        <p>{props.youGetCurrency.title}<span>{props.youGetCurrency.networkInfo}</span></p>
                    </div>

                    <div className={s.ValueBlock}>
                        <p> {props.youGetForm}</p>
                        {/*<p>0.056445</p>/*/}
                        <Copy className={s.CopyValue}/>
                    </div>
                    <p>{props.youGetCurrency.title}</p>
                </div>
                <Qr/>
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

            <div onClick={previousStep} className={s.CanselExchangeBtn}>
                <p>
                    Cancel exchange
                </p>
            </div>
        </>
    )
}