import { allcommand} from "../static/funcText";

export const handleOutput = (text) => {
    const trim_text = text.trim()
    const word_arr = trim_text.split(" ")
    console.log(word_arr)

    if (allcommand.find(sen => sen === trim_text)!== undefined) {
        return output(word_arr)
    }
    else if (word_arr[0] === "เปลี่ยน" || word_arr[0] ==="ออเดอร์") {
        word_arr.shift()
        if (allcommand.find(sen => sen === word_arr.join(" ")) !== undefined ) 
            return output(word_arr)
    }
    else
        return null
}

const output = (arr) => {
    if (arr[0] === "ราคา" && arr.length === 1)
        return {"func" : "AllPrice"}
    else if (arr[0] === "ราคา" && arr[1] === "เหรียญ" && arr.length === 2)
        return {"func" : "AllPrice"}
    else if (arr[0] === "ราคา" && arr[1] === "คริปโต")
        return {"func" : "AllPrice"}
    else if (arr[0] === "ราคา" && arr[1] === "เหรียญ" && arr[2] ==="คริปโต")
        return {"func" : "AllPrice"}
    else if (arr[0] === "ราคา" && arr.length === 2)
        return {"func" : "Price", "symbol" : mapToSymbol[arr[1]]}
    else if (arr[0] === "ราคา" && arr[1] === "เหรียญ")
        return {"func" : "Price", "symbol" : mapToSymbol[arr[2]]}
    else if (arr[0] === "วันนี้" && arr[2] === "ขึ้น" || arr[3] === "ขึ้น") 
        return {"func" : "Different", "symbol" : mapToSymbol[arr[1]]}
    else if (arr[0] === "วันนี้" && arr[2] === "ลง" || arr[3] === "ลง") 
        return {"func" : "Different", "symbol" : mapToSymbol[arr[1]]}
    else if (arr[0] === "เหรียญ" && arr[2] === "ขึ้น") 
        return {"func" : "TopdiffUp"}
    else if (arr[0] === "เหรียญ" && arr[2] === "ลง") 
        return {"func" : "TopdiffDown"}
    else if (arr[0] === "เหรียญ" && arr[1] === "สิบ" && arr[4] === "ขึ้น") 
        return {"func" : "TopdiffUp"}
    else if (arr[0] === "เหรียญ" && arr[1] === "สิบ" && arr[4] === "ลง") 
        return {"func" : "TopdiffDown"}
    else if (arr[0] === "กระเป๋าตัง")
        return {"func" : "Account"}
    else if (arr[0] === "กระเป๋าเงิน")
        return {"func" : "Account"}
    else if (arr[0] === "มาย")
        return {"func" : "Account"}
    else if (arr[0] === "ออเดอร์")
        return {"func" : "Trade"}
    else if (arr[0] === "เปลี่ยน")
        return {"func" : "ChangePrice", "symbol": arr[2]}
}

const mapToSymbol = {
    "บิทคอยน์" : "BTC",
    "บีทีซี" : "BTC",
    "บีเอ็นบี" : "BNB",
    "แนนซ์" : "BNB",
    "ไบแนนซ์" : "BNB",
    "หมา" : "DOGE",
    "ดอร์จคอย" : "DOGE",
    "เอ็กอาร์พี" : "XRP",
    "ลิ้ง" : "LINK",
    "เชนลิ้ง" : "LINK",
    "เอด้า" : "ADA",
    "ซูชิ" : "SUSHI",
    "เค้ก" : "CAKE",
    "แอลทีซี" : "LTC",
    "ไลท์คอยน์" : "LTC",
    "แบรนด์" : "BAND",
    "อีทีเฮช" : "ETH",
    "อีเธอเรียม" : "ETH",
    "ไทยบาท" : "THB",
    "เงินบาท" : "THB",
    "ยูเอสดีที" : "USDT",
    "ยูเอสดอลล่าร์" : "USD",
}