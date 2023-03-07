
let SetLightTheme = ()=>{
    localStorage.theme = "LightTheme";
}
let SetDarkTheme = ()=>{
    localStorage.theme="DarkTheme";
}
// let swtchBtn = $("#themeSwitch");
// swtchBtn.click(ChangeTheme());
function funtus(){
    if(localStorage.theme == null){
        localStorage.theme = "LightTheme";
    }
    var r = document.querySelector(':root');
    let currentTheme = localStorage.getItem("theme");
    if(currentTheme == "LightTheme"){
    r.style.setProperty('--color-mint', 'hsl(316, 30%, 36%)');
    r.style.setProperty('--white', 'hsl(274, 4%, 16%)');
    SetDarkTheme();
    }else{
        r.style.setProperty('--color-mint', '#6fdcbf');
        r.style.setProperty('--white', '#ffff');
        SetLightTheme();
    }
}
// $("#themeSwitch").change(ChangeTheme(this));
//   function myFunction() {
//     var x = localStorage.getItem("mytime");
//     document.getElementById("demo").innerHTML = x;
//   }

// function ChangeTheme() {
//     var r = document.querySelector(':root');
//     let currentTheme = localStorage.getItem("theme");
//     if(currentTheme == "LightTheme"){
//     r.style.setProperty('--color-mint', 'hsl(316, 30%, 36%)');
//     SetDarkTheme();
//     }else{
//         r.style.setProperty('--color-mint', '#6fdcbf');
//     }
//   }
//   var swtch = document.getElementById("themeSwitch");
// swtch.onclick(function(){

// });