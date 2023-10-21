const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum = 0;
	const getCTd = document.getElementsByClassName("price");
	for(let i=0;i<getCTd
    .length;i++){
		sum+=parseInt(getCTd[i].innerText);
	}
	const newtr = document.createElement("tr");
	const newCell = document.createElement("td");
	newCell.innerText="Total:"+sum;
  newtr.appendChild(newCell);
	document.getElementsByTagName("table")[0].appendChild(newtr);
};

getSumBtn.addEventListener("click", getSum);

