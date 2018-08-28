function quickSort(arr, i, j) {
  if(i<j){
    let left=i;
    let right=j;
    var flag=arr[left];
    while(i<j){
      while(arr[j]>=flag&&i<j){
        j--;
      }
        if(i<j){
          arr[i++]=arr[j];
      }
      while(arr[i]<=flag&&i<j){
        i++;
      }
      if(i<j){
        arr[j--]=arr[i];
      }
    }
    arr[i]=flag;
    quickSort(arr,left,i-1);
    quickSort(arr,i+1,right);
  } 
  return arr;
}
// example
let arr = [2, 10, 4, 1, 0, 9, 5 ,2,13,2,6,20,4];
console.log(quickSort(arr, 0 , arr.length-1));