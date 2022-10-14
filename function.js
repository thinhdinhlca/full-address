
window.function = function (add1,add2,city,state,zip) {

  add1 = add1.value ?? "";
  add2 = add2.value ?? "":
  city = city.value ?? "";
  state = state.value ?? "";
  zip = zip.value ?? "";
  
  let sz = [state,zip].filter(Boolean).join(" ");
  
  let res = [add1,add2,city,sz].filter(Boolean).join(", ");
  
  return res
}
