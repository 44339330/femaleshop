export function debounce(fnc,delay){
  let timer = null
  return function(...args) {
    if(timer) clearTimeout()
    timer = setTimeout(() => {
      fnc.apply(this,args)
    },delay)
  }
}