import { useState, useMemo, useCallback,
   useEffect} from "react";

function useSomething(){

}

function App(){
  const [exchange1Data, setexchange1Data]=useState({})
  const [exchange2Data,setexchange2Data]=useState({})
  const [bankData,setBankData]=useState({})
  
useEffect(()=>{
  setexchange1Data({
    returns:100
  });
},[])
useEffect(()=>{
  setexchange2Data({
    returns:100
  })
},[])
useEffect(()=>{  
setTimeout(() => {
  setBankData({
    income:100
  });
},5000)
},[]);

const calculateCryptoReturns = function(){
  return exchange1Data.returns+exchange2Data.returns;
}

const incomeTax=(calculateCryptoReturns()+bankData.income)*0.3;
  return (
    <div>
    <Child calculateCryptoReturns ={calculateCryptoReturns}/>
    </div>
  )
}

function Child({calculateCryptoReturns}){
  console.log("crypto child re-rendered");
  return <div>
    your crypto returns are {calculateCryptoReturns()}
  </div>
  
}
export default App 
