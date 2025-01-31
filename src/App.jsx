import React, { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadingInverse,addArr,updateArray } from './features/arraySlide';
import mergeSort from './features/mergeSort';
import quickSort from './features/quickSort';

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


  const handleMergeSort = async () => {
    setIsSorting(true);
    await mergeSort(array, 0, array.length,dispatch);
    setIsSorting(false);
  };

  const handleQuickSort = async () => {
    setIsSorting(true);
    const arrayCopy = [...array];
    await quickSort(arrayCopy, 0, arrayCopy.length - 1,dispatch);
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
        <button disabled={isSorting} onClick={()=>handleQuickSort()} >Quick Sort</button>
        <button disabled={isSorting} >Bubble Sort</button>
        <button disabled={isSorting}>Heap Sort</button>
      </div>
      <div className="loading" style={{height:`${isSorting == false ? "0": "2em"}`}}><p style={{opacity:`${isSorting == false ? "0": "1"}`}}>Visualizing..</p></div>
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