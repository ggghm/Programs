function flatten(arr) {  
  return arr.reduce((result, item)=> {
      return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}
 arr=[1,'a',[2,{name:'b'},[3,'c']],4,'d']
 console.log(flatten(arr))