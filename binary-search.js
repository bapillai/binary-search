//Binary Search-deals with a sorted array.has logarithmic time complexity.
var binarySearch = function(list,item){
    let midVal;
    let min = 0;
    let max = list.length - 1;
    while(min <= max){
      midVal = Math.floor((min+max)/2);
      if(list[midVal] === item){
        return midVal;
      }else{
        if(list[midVal]<item){
          min = midVal + 1;
        }else{
          max = midVal - 1;
        }
      }
    }
    return -1;
  }
  
  console.log(binarySearch([2,6,7,90,120,135],90));