let input=document.querySelector(".to-do-list .input-list .list-enter input")
let btn=document.querySelector(".to-do-list .input-list .list-enter button")
let listsAddDiv=document.querySelector(".to-do-list .input-list .list-added")
let arrayList=[]

if(window.localStorage.getItem("arrayList")){
    arrayList=JSON.parse(window.localStorage.getItem("arrayList"))
}
getElementInLocalStorage();

btn.addEventListener("click",function(params) {
    if(input.value){
        addListToArray(input.value)
        input.value=""
        
    }
})
function addListToArray(input){
    const list={
        id:Date.now(),
        title:input
    }
    arrayList.push(list)
    addElement(arrayList)
    addElementInLocalStorage(arrayList)

}

function addElement(arrayList) {
    listsAddDiv.innerHTML="";
    arrayList.forEach(element => {
        let div=document.createElement("div")
        let childDiv=document.createElement("div")
        let i=document.createElement("i")
        listsAddDiv.appendChild(div)
        div.setAttribute("id",element.id)
        div.appendChild(childDiv)
        childDiv.appendChild(document.createTextNode(element.title))
        div.appendChild(i)

    
        div.classList.add("list-style")
        childDiv.classList.add("text")
        i.className="fa fa-close"
    });
}
function addElementInLocalStorage(arrayList) {
    window.localStorage.setItem("arrayList",JSON.stringify(arrayList))
}
function getElementInLocalStorage() {
    let data=window.localStorage.getItem("arrayList")
    if(data){
        let tasks=JSON.parse(data)
        addElement(tasks);
    }
}
listsAddDiv.addEventListener("click",function(ele){
    if(ele.target.classList.contains("text")){
        ele.target.classList.toggle("checked")
    }
    if(ele.target.classList.contains("fa")){
        ele.target.parentElement.remove()
        
        deleteElement(ele.target.parentElement.getAttribute("id"))
    }
})
function deleteElement(id){
    arrayList=arrayList.filter((ele)=> ele.id !=id)
    addElementInLocalStorage(arrayList)
    
}