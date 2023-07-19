import React, {ChangeEvent, useState} from "react";
import s from "./Main.module.css";
import logo from "./images/img_1.png";
import {ReactComponent as Coin} from "./images/coin.svg"
import {ReactComponent as Infinity} from "./images/infinity.svg";
import {ReactComponent as Secure} from "./images/secure.svg";
import {Converter} from "../converter/Converter";
import {Currencies, UnitStateType} from "../currencies/Currencies";
import {ReactComponent as BTC} from "../currencies/imgs/BTC.svg";
import {ReactComponent as ZRX} from "../currencies/imgs/Logo1.svg";
import {ReactComponent as ZRX2} from "../currencies/imgs/ZRX2.svg";
import {ReactComponent as INCH} from "../currencies/imgs/1inch-1inch-logo.svg";
import {ReactComponent as ZEC} from "../currencies/imgs/zcash-zec-logo.svg";
import {ReactComponent as SOL} from "../currencies/imgs/4093934f73fe0d59165a19ccc25f049d.svg";
import {ReactComponent as XMR} from "../currencies/imgs/c52aabcca125ab1b23b2946181233fc3.svg";
import {ReactComponent as CRZ} from "../currencies/imgs/e24f845be1555b47c3eac0bb49729f50.svg";

type InputType = "get" | "send";
export type CounterStateType = {
    openCurrencies: (opener: InputType) => void
    youGetForm: number
    youSendForm: number
    changeSendValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeGetValue: (e: ChangeEvent<HTMLInputElement>) => void
    switchCurrency: () => void
    youSendCurrency: UnitStateType
    youGetCurrency: UnitStateType
    usd: number
}

export const Main = () => {

    const [currency, setCurrency] = useState<UnitStateType[]>([
        {id: 1, rate: 28178.40, title: "BTC", logo: <BTC/>, info: 'Bitcoin', network: '', networkInfo: '', isDone: false},
        {id: 2, rate: 0.2545, title: "ZRX", logo: <ZRX/>, info: '0x Protocol Token', network: 'ERC20', networkInfo: 'Etherium Network', isDone: false},
        {id: 3, rate: 1791.54, title: "ETH", logo: <ZRX2/>, info: 'Ethereum', network: '', networkInfo: '', isDone: false},
        {id: 4, rate: 19.31, title: "1INCH", logo: <INCH/>, info: '1 inch', network: 'ERC20', networkInfo: 'Etherium Network', isDone: false},
        {id: 5, rate: 2.876, title: "ZEC", logo: <ZEC/>, info: 'Zcash', network: '', networkInfo: '', isDone: false},
        {id: 6, rate: 4.54, title: "SOL", logo: <SOL/>, info: 'Solana', network: 'ERC20', networkInfo: 'Binance Smart Chain', isDone: false},
        {id: 7, rate: 0.676, title: "XMR", logo: <XMR/>, info: 'Monero', network: '', networkInfo: '', isDone: false},
        {id: 8, rate: 569.145, title: "2CRZ", logo: <CRZ/>, info: '0x Protocol Token', network: 'ERC20', networkInfo: 'Ethereum Network', isDone: false},
        {id: 9, rate: 569.145, title: "2CRZ", logo: <CRZ/>, info: '0x Protocol Token', network: 'ERC20', networkInfo: 'Ethereum Network', isDone: false},
        {id: 10, rate: 569.145, title: "2CRZ", logo: <CRZ/>, info: '0x Protocol Token', network: 'ERC20', networkInfo: 'Ethereum Network', isDone: false},
    ])
    const formattt = (num: number) => {
        return  Number(num.toFixed(6));
    };
    const formatUSD = (num: number) => {
        const number = Number(num.toFixed(6));
        return Number.isNaN(number) ? 0 : number;
    };

    // const [usd, setUsd] = useState(281.2878);
    const [usd, setUsd] = useState(100.00);
    const [youGetForm, setYouGetForm] = useState<number>(0.056445541)
    const [youSendForm, setYouSendForm] = useState<any>(0.01)
    const [youSendCurrency, setYouSendCurrency] = useState<UnitStateType>(currency[0])
    const [youGetCurrency, setYouGetCurrency] = useState<UnitStateType>(currency[1])


    const setNextSendValue = (value: number, youSendRate:number,youGetRate:number) => {
        setYouSendForm((Number(formattt(value))))
        // setYouSendForm(numberWithSpaces(value))
        // setYouSendForm((Number(numberWithSpaces(Number((formattt(value)))))))
        setYouGetForm(formattt(value * youGetRate / youSendRate))
        // setUsd(usdRate * value * 100)
        // console.log((Number(formattt(value))))
        setUsd(formatUSD(usdRate * value * youSendRate ))
    }
    const usdRate = 1

    const changeSendValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value:number = e.currentTarget.valueAsNumber
        setNextSendValue(value, youSendCurrency.rate, youGetCurrency.rate)

        // console.log(typeof usd)
        // console.log(value)


    }
    const changeGetValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber;

        // @ts-ignore
        setYouGetForm(value)
        setYouSendForm(value * youSendCurrency.rate / youGetCurrency.rate)
    }

    const [isDone, setIsDone] = useState<InputType | null>(null)

    const openCurrencies = (opener: "get" | "send") => {
        setIsDone(opener)
        console.log(isDone)
    }

    const closeCurrencies = () => {
        setIsDone(null)
        console.log(isDone)
    }

    const selectUnit = (unitId: number) => {

        const unit = currency.find(u => u.id === unitId)
        console.log(unit)
        if (unit) {
            // unit.isDone = !unit.isDone
            if (isDone === "send") {
                setYouSendCurrency(unit)

                setNextSendValue(youSendForm,  unit.rate, youGetCurrency.rate );
            } else {
                setYouGetCurrency(unit)
                setNextSendValue(youSendForm,  youSendCurrency.rate, unit.rate);
            }
        }
        setTimeout(() => {
            closeCurrencies()
        }, 300)
    }
    const switchCurrency = () => {
        setYouGetForm(youSendForm);
        setYouSendForm(youGetForm);
        setYouGetCurrency(youSendCurrency);
        setYouSendCurrency(youGetCurrency)

    };
console.log({usd})

    return (
        <div className={s.Wrapper}>
            <img src={logo} className={s.LogoWrapper} alt={"#"}/>

            <div className={s.RowWrapper}>
                <div>
                    <p className={s.Description}>
                        Fast exchange<br/>
                        no registration<br/>
                        fixed and floating rates
                    </p>
                    <div className={s.FootDescription}>
                        <div className={s.Coins}>
                             <span>
                                  <Coin/>
                             </span>
                            <p>100+ Coins</p>
                        </div>
                        <div className={s.NoLimits}>
                            <span>
                                <Infinity className={s.Limits}/>
                            </span>
                            <p>No Limits</p>
                        </div>
                        <div className={s.Secure}>
                            <span>
                                <Secure/>
                            </span>
                            <p>Secure</p>
                        </div>
                    </div>
                </div>
                {
                    isDone ? <Currencies closeCurrencies={closeCurrencies}
                                         currency={currency}
                                         currentCurrency={isDone === "send" ? youSendCurrency : youGetCurrency}
                                         disabledCurrency={isDone === "get" ? youSendCurrency : youGetCurrency}
                                         selectUnit={selectUnit}/>
                        : <Converter openCurrencies={openCurrencies}
                                     youGetForm={youGetForm}
                                     youSendForm={youSendForm}
                                     changeSendValue={changeSendValue}
                                     changeGetValue={changeGetValue}
                                     switchCurrency={switchCurrency}
                                     youSendCurrency={youSendCurrency}
                                     youGetCurrency={youGetCurrency}
                                     usd={usd}

                        />
                }
            </div>
        </div>
    )
}