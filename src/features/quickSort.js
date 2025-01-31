import { addArr } from "./arraySlide";

 
const quickSort = async (array, start, end,dispatch) => {
    if(end<=start) return ;
    
    const P = await pivot(array,start,end,dispatch)

    await quickSort(array,start,P - 1,dispatch)
    await quickSort(array,P+1,end,dispatch)
}
const pivot = async (array, start, end,dispatch) => {
    let i = start - 1
    for (let j = start; j<array.length; j++){
        if(array[j]< array[end]){
            i++
            [array[j], array[i]] = [array[i], array[j]];
            await new Promise((resolve)=>{setTimeout(resolve,50)})
            dispatch(addArr([...array])); 
        }
    }
    i++
    [array[i], array[end]] = [array[end], array[i]];
    await new Promise((resolve)=>{setTimeout(resolve,50)})
    dispatch(addArr([...array])); 

    return i;
}

export default quickSort;