var throttle = function(func, wait) {
  var timeout;
  return function() {
  _this = this;
  var args = arguments;
  if(timeout) { // 定时器还在，说明当前函数未执行完，后续函数忽略
    return false;
  }
  timeout = setTimeout(function(){
      timeout = null
      func.apply(_this, args)
      }, wait)
  }
}
//开始触发就去执行，隔一段时间执行一次