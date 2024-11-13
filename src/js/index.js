const getDataBtn= document.querySelector(".upload-data__btn ")
const tableDom = document.querySelector(".data-table")
const increase= "افزایش اعتبار"
const searchInput= document.getElementById("searchBar")
let transactions = []
const fillters = {
   searchItem :"",
}

getDataBtn.addEventListener("click",getData)

function getData() {
   fetch('http://localhost:3000/transactions')
   .then((res)=>{
       return res.json()
   })
   .then((res)=>{
      console.log(res)
      transactions =res
      // renderToDom()
      hiddenBtn()
      renderTableToDom()
      searchBar()
      
   })
   .catch()

   
}

function hiddenBtn(){
   getDataBtn.classList.add("hidden")
}




function renderTableToDom() {
   const filteredTransactions = transactions.filter((t) =>{
      return t.refId
   })
   hiddenBtn()
   newDate()
   tableDom.innerHTML=""
   const tableHeader=document.createElement("thead")
   tableHeader.classList.add("data-table__header")
   tableHeader.innerHTML=`
   <thead class="data-table__header">
        <th class="number">شماره</th>
        <th class="type">نوع تراکنش</th>
        <th class="price">مبلغ<i class="fa-solid fa-chevron-down"></i></th>
        
        <th class"deliveryCheck">شماره پیگیری</th>
        <th class="date">تاریخ تراکنش</th> 
        
    </thead>

   `
   tableDom.appendChild(tableHeader)

   transactions.forEach((t) => {
      
      const tableRow = document.createElement("tr")
      tableRow.classList.add("data-table__details")
      tableRow.innerHTML =`
      
        <tr class="data-table__details">
        <td>${t.id}</td>
        <td>${t.type}</td>
         <td>${t.price}</td>
          <td>${t.refId}</td>
         <td > ${t.date}</td>
</tr>

      `
      tableDom.appendChild(tableRow)
      
      
      
      
     
   
   })
   
}


function newDate() {
   transactions.forEach((transactions)=>{
      const options ={
         hour:"2-digit",
         minute:"2-digit",
         hour12:false
      }
      transactions.date = new Date().toLocaleDateString("fa-IR",options)
   //   const date = transactions.date.
   })
}

function searchBar()
 {
   searchInput.addEventListener('input',(e)=>{
   console.log(e.target.value);
   const searchedItem =transactions.refId=== e.target.value
   renderTableToDom(searchedItem)
})}
