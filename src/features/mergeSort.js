import { updateArray } from "./arraySlide";

  const mergeSort = async (arr, start, end,dispatch) => {
    if (end - start <= 1) return arr.slice(start, end); // Base case
  
    const mid = Math.floor((start + end) / 2);
    const left = await mergeSort(arr, start, mid,dispatch);
    const right = await mergeSort(arr, mid, end,dispatch);
  
    return await merge(left, right, start, end,dispatch);
  };
  

  const merge = async (arr1,arr2,start,end,dispatch)=>{
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

export default mergeSort;