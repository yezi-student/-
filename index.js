// const baseUrl = "https://restapi.amap.com/v3/weather/weatherInfo"
// const key ='095343110176dde7105ce8af739d09bf'

// const city1 = "653126"
// const city2 = getInput()
// const url = baseUrl +"?"+"key="+key +"&"+'city='+city
function url(city){
    let baseUrl = 'https://restapi.amap.com/v3/weather/weatherInfo?key=095343110176dde7105ce8af739d09bf&city='
    return baseUrl +city
}
https://restapi.amap.com/v3/weather/weatherInfo?key=095343110176dde7105ce8af739d09bf&city=653126
// console.log(url);

function getWeather(){
    fetch(url(getInput()))
    .then(res=>res.json())
    .then(data => {
        // console.log("fetch里面的：",data.lives[0].temperature)
        let list = data.lives[0]
        console.log(list);
        changeTem(list.temperature)
        showTemAndLists(list.province+list.city)
        changeWeather(list.weather)
        changeWindpower(list.windpower)
        changeWinddirection(list.winddirection)
        list=[]
    }
        )
    .catch(err=>{console.log(err);})
}
// 获取天气
function changeTem(data) {
    const spanTem = document.getElementById('tem')
    spanTem.innerHTML = data
}
// 获取数据列表
function showTemAndLists(data) {
    const spancity = document.getElementById('city')
    spancity.innerHTML = data
}
// 获取天气
function changeWeather(data) {
    const spanWeather = document.getElementById('weather')
    spanWeather.innerHTML = data
}
// 获取降水量
function changeWindpower(data) {
    const spanWindpower = document.getElementById('windpower')
    spanWindpower.innerHTML = data
}
// 获取风向
function changeWinddirection(data) {
    const spanwinddirection = document.getElementById('winddirection')
    spanwinddirection.innerHTML = data
}
// 获取错误提示
function errNotice(data){
    const err = document.getElementById('errnotice')
    err.innerHTML = data
}
// 获取按钮
const button = document.querySelector('button');
button.addEventListener('click',getWeather );
// 获取输入
function getInput(){
    const citycn = document.querySelector("input").value
    console.log("输入字符长度：",citycn.length);
    // 可恶！想错了
    // fetch('./citydata/data.json')
    // .then(res=>res.json())
    // .then(data=>{
    //     data=data.data;
    //     console.log('2');
    //     // for (let index = 0; index < data.length; index++) {
    //     //     console.log('3');
    //     //     if(citycn == data[index]){
    //     //         console.log(citycn.length);
    //     //          citycn = data[index][1]
                 
    //     //     }
    //     //     // else{
    //     //     //     errNotice('输入格式有问题，请重新输入呀')
    //     //     // }
            
    //     // }
     
    // }
    // )
    // .catch(err=>{console.log(err);})
    // console.log('4');
    return citycn;
}
