
window.function = function (add1 = "",add2 = "",city = "", state = "",zip = "") {
  
  let sz = [state,zip].filter(Boolean).join(" ");
  
  let res = [add1,add2,city,sz].filter(Boolean).join(", ");
  
  return res
}
