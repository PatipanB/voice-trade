import React, {useState,useEffect} from 'react';
import {getTrade} from "../service/account.service"
import {picDict} from '../price/price'
import './trade.css'


const Trade = () =>{
    const [tradeList,setTradeList] = useState([])

    const base = localStorage.getItem("base") === "undefined" ? "USDT" : localStorage.getItem("base")

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        const result = await getTrade()
        const tradedata = result.data
        console.log(tradedata)
        setTradeList(tradedata)
    }
    
    const trade = (trade) => {
        return(
            <div className="Trade-box">
                <img src={picDict[trade.trade.symbol]}/>
                <div className="Tradetextblock">
                    <p>Date: {new Date(trade.trade.time)}</p>
                    <p>Symbol: {trade.trade.symbol}</p>
                    <p>Side: {trade.trade.side}</p>
                    <p>Price: {trade.trade.Price}</p>
                    <p>Quantity: {trade.trade.origQty}</p>
                    <p>Executed: {trade.trade.executedQty}</p>
                </div>
            </div>
        )
    }

    const rendertrade = (trade) => {
        return <trade trade={trade} />;
      };
    
    if(tradeList !== undefined){
        return(
            <div className="Pricetable">
                {/*tradeList.length !==0 &&*/ tradeList.map(rendertrade)}
                {/* {tradeList.length ===0 && <div className="Errortext"><p>Trade does't exist</p></div>} */}
            </div>
        )}
    return(
        <div></div>
    )
}

export default Trade