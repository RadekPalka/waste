import wasteTypeList  from './WasteType.js';

const wasteList = document.querySelector('.waste>ul');


const addElementToList = ({name,id}) =>{
  const li = document.createElement("li")
  li.textContent = `Nazwa: ${name}, nr Coko: ${id}`
  wasteList.appendChild(li)
}

wasteTypeList.forEach(addElementToList)
