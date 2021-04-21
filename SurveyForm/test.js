function nav() {
  console.log("hy");
  let str1 = "home";
  let result1 = str1.link("test1.html");
  document.getElementById("nav1").innerHTML = result1;
  let str2 = "Pizza";
  let result2 = str2.link("test2.html");
  document.getElementById("nav2").innerHTML = result2;
}
