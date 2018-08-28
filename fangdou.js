function debounce(func,wait){
  var timeout;
  return ()=>{
    _self = this;
    args = arguments;
    if(timeout){
      clearTimeout(timeout)
    }
    timeout = setTimeout(()=>{
      func.cal(_self,args);
    },wait)
  }
}
//当停止连续触发再执行。