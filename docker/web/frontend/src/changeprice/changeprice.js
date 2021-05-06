import React, {useState,useEffect} from 'react';
import {getChangePrice} from "../service/changeprice.service"
import './changeprice.css'
import {picDict} from '../price/price'


const ChangePrice = () =>{
    const symbol="THB"

    const [coinData,setCoinData] = useState({})

    useEffect(() => {
        fetchdata(symbol)
    }, []);

    const fetchdata = async (symbol) => {
        const result = await getChangePrice(symbol)
        const coinPrice = result.data
        console.log(coinPrice)
        setCoinData(coinPrice)
        sessionStorage.setItem("base", symbol)
    }

    return(
        <div className="Pricetable">
            <div className="Baseprice">
                <img src={picDict[coinData.base]}/>
                <div className="Basepricetextblock">
                    <p>change base to {coinData.base}</p>
                </div>
            </div>
        </div>
    )
}

export default ChangePrice