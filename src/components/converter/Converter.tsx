import React from "react";
import s from "./Converter.module.css";
import {ReactComponent as StartExchange} from "./images/exchange.svg";
import {ReactComponent as Round} from "./images/round.svg";
import {ReactComponent as Menu} from "./images/menu.svg";
import {ReactComponent as Back} from "./images/Back.svg";
import {useWizard, Wizard} from "react-use-wizard";
import {Step1} from "../common/step1/Step1";
import {Step2} from "../common/step2/Step";
import {Step3} from "../common/step3/Step3";
import {Step4} from "../common/step4/Step4";
import {Currencies} from "../currencies/Currencies";
import {CounterStateType} from "../main/Main";
import {Completed} from "../completed/Completed";





const Header = () => {
    const {activeStep, previousStep, stepCount} = useWizard();

    // console.log({activeStep})

    return (
        <div className={s.WrapperExchange}>
            {
                activeStep === 0
                    ? <StartExchange className={s.ExchangeLogo}/>
                    : <Back className={s.ExchangeLogo} onClick={previousStep}/>
            }

            <div className={s.StartExchange}>
                <p>Start exchange</p>
                <div className={s.Lines}>
                    <hr className={s.Line} data-count={true} />
                    <hr className={s.Line} data-count={activeStep > 0}/>
                    <hr className={s.Line} data-count={activeStep > 1}/>
                    <hr className={s.Line} data-count={activeStep > 2}/>
                </div>

            </div>
            <div className={s.Btns}>
                {
                    activeStep === 0 &&  <Round className={s.RoundBtn}/>
                }

                <Menu className={s.MenuBtn}/>
            </div>
        </div>
    )
}

export const Converter = (props:CounterStateType) => {

    return (
        <div className={s.Wrapper}>
            {/*<Currencies/>*/}
            <Wizard header={<Header/>}>
                <Step1 openCurrencies={props.openCurrencies}
                       youGetForm={props.youGetForm}
                       youSendForm={props.youSendForm}
                       changeSendValue={props.changeSendValue}
                       changeGetValue={props.changeGetValue}
                       switchCurrency={props.switchCurrency}
                       youSendCurrency={props.youSendCurrency}
                       youGetCurrency={props.youGetCurrency}
                       usd={props.usd}
                />
                <Step2  youSendCurrency={props.youSendCurrency}
                        youGetCurrency={props.youGetCurrency}
                        youGetForm={props.youGetForm}
                        youSendForm={props.youSendForm}/>
                <Step3 youGetCurrency={props.youGetCurrency}
                       youGetForm={props.youGetForm}/>
                <Step4 youSendCurrency={props.youSendCurrency}
                       youGetCurrency={props.youGetCurrency}
                       youGetForm={props.youGetForm}
                       youSendForm={props.youSendForm}/>
                <Completed youSendCurrency={props.youSendCurrency}
                           youGetCurrency={props.youGetCurrency}
                           youGetForm={props.youGetForm}
                           youSendForm={props.youSendForm}/>
            </Wizard>
        </div>
    )
}