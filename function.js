
window.function = function (add1,add2,city,state,zip) {
  
  add1 = add1.value ?? "";
  add2 = add2.value ?? "";
  city = city.value ?? "";
  state = state.value ?? "";
  zip = zip.value ?? "";
  
  let szarr = new Array(state,zip);
  
  let sz = szarr.filter(Boolean).join(" ");
  
  let resarr = new Array(add1,add2,city,sz);
  
  let res = resarr.filter(Boolean).join(", ");
  
  return res
}
