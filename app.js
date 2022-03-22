const API = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
const textInput = document.querySelector("#searchKeyword")
const checkBtn = document.querySelector(".btn-success")
const ul = document.querySelector(".siteList")

checkBtn.addEventListener("click" , (x)=>{
    x.preventDefault()
    getInfo(textInput.value)
})
async function getInfo(address){
    const apiUrl = await fetch(API)
    const data = await apiUrl.json()
    const dataInfo = data.filter((name)=>{
        if((name.ar).includes(address)){
            return name }})
        if(address.trim() !== ""){
            dataInfo.forEach((x) => {
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