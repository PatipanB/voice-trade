import React, {useState,useEffect} from 'react';
import {getAccount} from "../service/account.service"
import {picDict} from '../price/price'
import './account.css'


const Account = () =>{
    const [coinList,setCoinList] = useState([])

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        const result = await getAccount()
        const coinPrice = result.data["balances"]
        console.log(coinPrice)
        console.log(typeof coinPrice)
        setCoinList(coinPrice)
    }
    
    const Coin = (coin) => {
        return(
            <div className="Coinprice">
                <img src={picDict[coin.coin.asset]}/>
                <div className="Accounttextblock">
                    <p>{coin.coin.asset}</p>
                    <p>free : {coin.coin.free}</p>
                    <p>locked : {coin.coin.locked}</p>

                </div>
            </div>
        )
    }

    const renderCoin = (coin) => {
        return <Coin coin={coin} />;
      };
    
    if(coinList !== undefined){
        return(
            <div className="Pricetable">
                {coinList.map(renderCoin)}
            </div>
        )}
    return(
        <div></div>
    )
}

export default Account