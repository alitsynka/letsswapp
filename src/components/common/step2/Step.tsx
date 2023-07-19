import React, {ChangeEvent, useState} from "react";
import {useWizard} from "react-use-wizard";
import s from './Step2.module.css';
import {ReactComponent as PastBtn} from './imgs/Small.svg';
import {ReactComponent as ResetBtn} from "./imgs/resetBtn.svg";
import {UnitStateType} from "../../currencies/Currencies";

export type Step2Type = {
    youSendCurrency: UnitStateType
    youGetCurrency: UnitStateType
    youGetForm: number
    youSendForm: number
}

export const Step2 = (props:Step2Type) => {

    const { nextStep} = useWizard();

    const [receivingAddress, setReceivingAddress] = useState('');
    const [refundAddress, setRefundAddress] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [isDone, setIsDone] = useState<boolean | undefined>(false)

    const onChangeReceiveAddressHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setReceivingAddress(newValue)
    }
    const onChangeRefundAddressHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setRefundAddress(newValue)
    }
    const onChangeEmailAddressHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setEmailAddress(newValue)
    }
    const resetRefundValue = () => {
        setRefundAddress('')
    }
    const resetReceiveValue = () => {
        setReceivingAddress('')
    }
    const resetEmailValue = () => {
        setEmailAddress('')
    }
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setIsDone(e.currentTarget.checked)
        // console.log(isDone)
        console.log(e.currentTarget.checked)
    }

    const value1 = Number(props.youGetForm.toFixed(7))

    return (
        <>
            <div className={s.CounterWrapper}>
                <div className={s.YouSendBlock}>
                    <p>You Send</p>
                    <div className={s.Value}>
                        {/*0.01*/}
                        {props.youSendForm}
                    </div>
                    {/*<input type="number" placeholder={'0.01'} min={1} max={7}/>*/}
                    <div className={s.FooterCurrency_left}>
                        {props.youSendCurrency.logo}
                        {props.youGetCurrency.title}
                        {/*<Btc className={s.Logo}/>*/}
                        {/*BTC*/}
                    </div>
                </div>
                <div className={s.YouGetBlock_right}>
                    <p>You Get</p>
                    <div className={s.Value}>
                        {/*~0.056445*/}
                        {value1}
                        {/*{props.youGetForm}*/}
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
            <div className={s.ReceivingBlock}>
                <div>
                    {
                        receivingAddress ? <p>BTC receiving address</p> : ""
                    }
                    <input type={"text"}
                           value={receivingAddress}
                           onChange={onChangeReceiveAddressHandler}
                           autoFocus
                           placeholder={'BTC receiving address'}
                    />
                </div>

                {receivingAddress ? <ResetBtn className={s.ResetBtn} onClick={resetReceiveValue}/> :
                    <PastBtn className={s.PastBtn}/>}
            </div>
            <div className={s.RefundBlock}>
                <div>
                    {
                        refundAddress ? <p>Add refund address</p> : ""
                    }
                    <input type={"text"}
                        // autoFocus
                           value={refundAddress}
                           onChange={onChangeRefundAddressHandler}
                           placeholder={'Add refund address (Optional)'}
                    />

                </div>

                {refundAddress ? <ResetBtn className={s.ResetBtn} onClick={resetRefundValue}/> : ''}
            </div>
            <div className={s.EmailBlock}>
                <input type={"text"}
                    // autoFocus
                       value={emailAddress}
                       onChange={onChangeEmailAddressHandler}
                       placeholder={'Add your e-mail for notification (Optional)'}
                />
                {emailAddress ? <ResetBtn className={s.ResetBtn} onClick={resetEmailValue}/> : ''}
            </div>
            <div className={s.PrivacyBlock}>
                <div className={s.PseudoCheckBocks}>

                </div>
                <input type="checkbox"
                       className={s.CheckBox}
                       id={s.checkBox_1}
                       checked={isDone}
                       onChange={changeStatus}
                />
                <label htmlFor={s.checkBox_1} className={s.Label}> </label>
                <p>I have read and agree to the <span>Privacy Policy</span> and <span>Terms of Use</span>
                </p>
            </div>
            {/*<button onClick={previousStep}>prev</button>*/}
            <button onClick={nextStep} className={isDone ? s.ActiveBtn : s.BtnBlocked} disabled={!isDone}>
                <p>Accept</p>
            </button>
        </>
    )
}