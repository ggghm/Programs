function bubbleSort2(arr) {
   var i=arr.length;
   while(i>0){
       var flag=0;
       for(let j=0;j<i;j++){
           if(arr[j]>arr[j+1]){
               flag=j;
               var temp=arr[j+1];
               arr[j+1]=arr[j];
               arr[j]=temp;
           }
       }
       i=flag;
   }
   return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort2(arr));

//判断数组中最后交换的位置是不是为0；
//最开始没有交换的位为数组的最后一位，然后将标志位初始化，
//即如果if语句都不执行，则证明当前序列已经有序，i=flag=0;
//即while循环终止，返回已排好的数组。
//而当进入if时，证明在当前位置存在交换，则将flag变成当前位置，
//即该次循环后，最后交换的位置。
