const API = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json" //先將API設定在一個變數上
const textInput = document.querySelector("#searchKeyword") //找到輸入條件的DOM元素
const checkBtn = document.querySelector(".btn-success") //找到送出表單的那個按鈕
const ul = document.querySelector(".siteList") //找出要新增元素的親層

checkBtn.addEventListener("click" , (x)=>{
    x.preventDefault() //設定按鈕的click事件預設消除，以免按下按鈕直接送出表單
    while(ul.lastChild){
        ul.removeChild(ul.lastChild)
    } //在每次搜尋前，將上一次結果清除
    getInfo(textInput.value) //按下按鈕時找出輸入欄輸入的值
})
async function getInfo(address){
    const apiUrl = await fetch(API) //用await 抓下api網址提供的資料
    const data = await apiUrl.json() //將資料轉換成json格式
    const dataInfo = data.filter((name)=>{ //因為我的function有設定引數為輸入的值，所以用剛剛轉換的json檔案去比對包含輸入匡的值的就存回datainfo變數內
        if((name.ar).includes(address)){
            return name }})
        if(address.trim() !== ""){ //判斷輸入匡非為空值才能繼續下去
            dataInfo.forEach((x) => { //將剛剛符合條件的資料用foreach逐一套入我要新增的DOM元素內
                const result = `<li class="list-group-item fs-5">
                <i class="fas fa-bicycle"></i>
                ${x.sna.replace("YouBike2.0_","")} (${x.sbi})<br>
                <small class="text-muted">${x.ar}</small>
                </li>`
                ul.insertAdjacentHTML("afterbegin",result)
        }
        )
    }
}
