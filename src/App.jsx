import React, { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadingInverse,addArr,updateArray } from './features/arraySlide';

function App() {
  const dispatch = useDispatch()
  const {isSorting, array} = useSelector((state)=>state.array)
  const setIsSorting = (UU) => {dispatch(loadingInverse(UU))}
  const setArray = (newArr) => {dispatch(addArr(newArr))}

  const resetArray = () => {
    const tempArray = []
    for(let i = 0; i<100; i++){
      const randomV = Math.floor(Math.random() * 100) + 10
      tempArray.push(randomV)
    }    
    setArray(tempArray);
  }


  const mergeSort = async (arr, start, end) => {
    if (end - start <= 1) return arr.slice(start, end); // Base case
  
    const mid = Math.floor((start + end) / 2);
    const left = await mergeSort(arr, start, mid);
    const right = await mergeSort(arr, mid, end);
  
    return await merge(left, right, start, end);
  };
  

  const merge = async (arr1,arr2,start,end)=>{
    let returnArry = []
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
      if(arr1[i] < arr2[j]){
        returnArry.push(arr1[i]);
        i++
      }else{
        returnArry.push(arr2[j])
        j++
      }
    }
    while(i < arr1.length){
      returnArry.push(arr1[i]);
      i++
    }
    while(j < arr2.length){
      returnArry.push(arr2[j]);
      j++
    }
    await new Promise((resolve)=>{setTimeout(resolve,50)})

    dispatch(updateArray({ start, end, returnArry }));
    return returnArry;
  }

  const handleMergeSort = async () => {
    setIsSorting(true);
    await mergeSort(array, 0, array.length);
    setIsSorting(false);
  };


  useEffect(()=>{
    resetArray()
  },[])
  return (
    <div className='body'>
      <div className="btnbar">
        <button disabled={isSorting} onClick={()=>resetArray()}>New</button>
        <button disabled={isSorting} onClick={()=>handleMergeSort()}>MergeSort</button>
        <button disabled={isSorting} >kandy</button>
        <button disabled={isSorting} >click</button>
        <button disabled={isSorting}>thisWay</button>
      </div>
      <div className="graph">
      {array.map((val, i) => (
        <div className="line" style={{
          height:`${val*3}px`,
          transition: "all 0.2s ease-in-out"
          }} key={i}>
          
        </div>
      ))}
      </div>
    </div>
  )
}

export default App