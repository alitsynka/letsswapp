import React, {useState} from "react";
import {useWizard} from "react-use-wizard";
import s from "../../converter/Converter.module.css";
import {ReactComponent as Chart} from "../../converter/images/chart.svg";
import {ReactComponent as Help} from "../../converter/images/help.svg";
import {ReactComponent as Lock} from "../../converter/images/lock.svg";
import {Counter} from "../../counter/Counter";
import {CounterStateType} from "../../main/Main";

let currentCurrChange = null



export const Step1 = (props:CounterStateType) => {
    const {handleStep, previousStep, nextStep} = useWizard();

    // const [isDone, setIsDone] = useState<boolean>(false)
    //
    // const setCurrency = () => {
    //     setIsDone(!isDone)
    //     console.log(isDone)
    // }

    return (
        <>
            <div className={s.Floating}>
                <div onClick={() => currentCurrChange = 1}>
                    <Chart className={s.Chart}/>
                    <p>Floating rate</p>
                    <Help className={s.Help}/>
                </div>
                <div onClick={() => currentCurrChange = 2}>
                    <Lock className={s.Lock}/>
                    <p>Fixed rate</p>
                    <Help className={s.Help}/>
                </div>
            </div>

            <Counter openCurrencies={props.openCurrencies}
                     youGetForm={props.youGetForm}
                     youSendForm={props.youSendForm}
                     changeSendValue={props.changeSendValue}
                     changeGetValue={props.changeGetValue}
                     switchCurrency={props.switchCurrency}
                     youSendCurrency={props.youSendCurrency}
                     youGetCurrency={props.youGetCurrency}
                     usd={props.usd}
            />

            <button className={s.ExchangeBtn} onClick={nextStep}>
                <p>
                    Exchange
                </p>
            </button>
            <p className={s.Trustpilot}>
                Trustpilot
            </p>
        </>
    );
}