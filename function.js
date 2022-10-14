
window.function = function (add1,add2,city,state,zip) {
  
  let szarr = [state,zip];
  
  let sz = szarr.filter(Boolean).join(" ");
  
  let resarr = [add1,add2,city,sz];
  
  let res = resarr.filter(Boolean).join(", ");
  
  return res
}
