import React from "react";
import s from "./Footer.module.css";
import kraken from "./images/img_10.png";
import {Link} from "react-scroll";
import {ReactComponent as Expand} from "./images/Round.svg";
import {ReactComponent as Recaptcha} from "./images/recaptcha.svg";
import {ReactComponent as Inst} from "./images/instagram.svg";
import {ReactComponent as LinkedIn} from "./images/linkedin.svg";
import {ReactComponent as Telegram} from "./images/telegram.svg";
import {ReactComponent as FaceBook} from "./images/facebook.svg";
import {ReactComponent as Binance} from "./images/binance.svg";
import {ReactComponent as KuCoin} from "./images/kucoin.svg";
import {ReactComponent as GateIo} from "./images/gateio.svg";

export const Footer = () => {
    return (
       <div className={s.Footer} id={'footer'}>
           <div className={s.FooterContainer}>
               <p>LetsSwap</p>
               <div className={s.Wrapper}>
                   <div className={s.Navigate}>
                       <p>Navigate</p>
                       <p>Home</p>
                       <p>About Us</p>
                       <p>How it works</p>
                       <p>Affiliate</p>
                       <p>Blog</p>
                       <p>Status Page</p>
                       <p>Contacts</p>
                       <p>API for Developers</p>
                       <p>Fiat to crypto exchange</p>
                       <p>Buy cryptocurrency list</p>
                       <p>Sell cryptocurrency list</p>
                       <p>Crypto-Fiat Pairs</p>
                       <p>Crypto Compare</p>
                       <p>Sitemap</p>
                   </div>
                   <div className={s.Pairs}>
                       <p>Exchange Pairs</p>
                       <div className={s.WrapperPair}>
                           <div className={s.Wrapper1}>
                               <p>XMR to BTC</p>
                               <p>BTC to ETH</p>
                               <p>ETH to BTC</p>
                               <p>LTC to BTC</p>
                               <p>BTC to BSV</p>
                               <p>BCH to BTC</p>
                               <p>ZEC to BTC</p>
                           </div>
                           <div className={s.Wrapper2}>
                               <p>BTC to XRP</p>
                               <p>DOGE to BTC</p>
                               <p>TRX to BTC</p>
                               <p>BTC to USDT</p>
                               <p>DASH to BTC</p>
                               <p>BTC to XMR</p>
                               <p>BTC to XTZ</p>
                           </div>
                       </div>
                   </div>
                   <div className={s.SocNetworks}>
                       <p>Follow Us</p>
                       <div className={s.SocNetworkWrapper}>
                           <div>
                           <span>
                                <Inst/>
                           </span>
                               <p>Instagram</p>
                           </div>
                           <div>
                           <span>
                               <LinkedIn/>
                           </span>
                               <p>Linkedin</p>
                           </div>
                           <div>
                           <span>
                               <Telegram/>
                           </span>
                               <p>Telegram</p>
                           </div>
                           <div>
                           <span>
                               <FaceBook/>
                           </span>
                               <p>Facebook</p>
                           </div>
                       </div>
                   </div>
                   <div className={s.Partners}>
                       <p>Our Partners</p>
                       <div className={s.PartnersWrapper}>
                           <div>
                           <span>
                               <Binance/>
                           </span>
                               <p>Binance.com</p>
                           </div>
                           <div>
                           <span>
                               <KuCoin/>
                           </span>
                               {/*<img src={kuCoin}/>*/}
                               <p>KuCoin.com</p>
                           </div>
                           <div>
                           <span>
                               <GateIo/>
                           </span>
                               {/*<img src={gate}/>*/}
                               <p>Gate.io</p>
                           </div>
                           <div>
                           <span>

                           </span>
                               <img src={kraken}/>
                               <p>Kraken.com</p>
                           </div>
                       </div>
                   </div>
                   <div className={s.Subscribe}>
                       <p>Subscribe for updates</p>
                       <div className={s.SubscribeWrapper}>
                           <input type="text"
                                  placeholder="Enter your email address*"/>
                           <div className={s.Captcha}>
                               <div>
                                   <p>protected by reCAPTCHA</p>
                                   <p>Privacy - Terms</p>
                               </div>
                               <div className={s.GoogleRecaptcha}>
                               <span>
                                   <Recaptcha/>
                               </span>
                               </div>
                           </div>
                           <button>
                               <p>Subscribe</p>
                           </button>
                           <p>
                               Your email address will NEVER be shared,
                               rented or sold and you can unsubscribe at any
                               time.
                           </p>
                       </div>
                       <div className={s.Expand}>
                           <Link to="header"
                                 spy={true}
                                 smooth={true}
                                 offset={1}
                                 duration={500}
                           >
                               <Expand className={s.ExpandImg}/>
                           </Link>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}