/* EDIT */

let price = 18.5;
let cid = [
  ['PENNY', 0.25],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];






/* NEW CONSTANTS & VARIABLES */

const units = [
  [0, 0.01, 'PENNY'],
  [1, 0.05, 'NICKEL'],
  [2, 0.1, 'DIME'],
  [3, 0.25, 'QUARTER'],
  [4, 1, 'ONE'],
  [5, 5, 'FIVE'],
  [6, 10, 'TEN'],
  [7, 20, 'TWENTY'],
  [8, 100, 'ONE HUNDRED']
];






/* DOM ELEMENTS */

const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");






/* FUNCTIONS */

const sumCid = () => {
  return cid.reduce((total, e) => total + e[1], 0);
};



const getUnit = (num) => {
  if (num >= 100) return units[8];
  if (num >= 20) return units[7];
  if (num >= 10) return units[6];
  if (num >= 5) return units[5];
  if (num >= 1) return units[4];
  if (num >= 0.25) return units[3];
  if (num >= 0.1) return units[2];
  if (num >= 0.05) return units[1];
  if (num >= 0.01) return units[0];
  return false;
};



const calcDrawer = (entered, arr) => {
  /* entered === changeNum */
  /* arr === cid */
  let remain = JSON.parse(JSON.stringify(entered));
  let drawer = JSON.parse(JSON.stringify(arr));
  let unit = getUnit(remain);
  let change = [];

  while (remain >= 0.01 && unit) {
    //CLOSE
    if (unit[0] === 0 && remain > drawer[0][1]) return false;

    if (drawer[unit[0]][1] <= remain) {
      change.push([unit[2], drawer[unit[0]][1]]);
      remain = Number((remain - drawer[unit[0]][1]).toFixed(2));
      drawer[unit[0]][1] = 0;
      unit = units[unit[0] - 1];
    } else if (Number((remain % unit[1]).toFixed(2)) === 0) {
      change.push([unit[2], remain]);
      drawer[unit[0]][1] = Number((drawer[unit[0]][1] - remain).toFixed(2));
      remain = 0;
      break
    } else {
      let quotient = Number((remain - (remain % unit[1])).toFixed(2));
      change.push([unit[2], quotient]);
      drawer[unit[0]][1] = Number((drawer[unit[0]][1] - quotient).toFixed(2));
      remain = Number((remain - quotient).toFixed(2));
      unit = units[unit[0] - 1];
    }
  }

  return [drawer, change];
};



const getChange = (entered) => {
  /* entered === cash */
  let changeStr = ``;
  const drawer = calcDrawer(entered - price, cid);

  drawer[1].forEach(e => {
    if (e[1] !== 0) {
      changeStr += `${e[0]}: $${e[1]} `;
    }
  });
  changeStr = changeStr.trim();

  return changeStr;
};



const getStatus = (entered) => {
  // entered === cash
  const changeNum = entered - price;
  const canChange = calcDrawer(changeNum, cid);
  const funds = sumCid();

  if (entered < price) {
    return "INSUFFICIENT_ENTERED";
  }
  if (entered === price) {
    return "NO_CHANGE_DUE";
  }
  if (funds < changeNum || !canChange) {
    return "INSUFFICIENT_FUNDS";
  }
  if (entered > price && funds === changeNum) {
    return "CLOSED";
}
  if (entered > price && funds > changeNum && canChange) {
    return "OPEN";
  }
};






/* EVENT LISTENER */

purchaseBtn.addEventListener("click", () => {
  const cash = Number(cashInput.value);

  switch (getStatus(cash)) {
    case "INSUFFICIENT_ENTERED":
      window.alert("Customer does not have enough money to purchase the item");
      break;

    case "NO_CHANGE_DUE":
      changeDue.textContent = "No change due - customer paid with exact cash"
      break;

    case "INSUFFICIENT_FUNDS":
      changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
      break;

    case "CLOSED":
      changeDue.textContent = "Status: CLOSED " + `${getChange(cash)}`;
      break;

    case "OPEN":
      changeDue.textContent = "Status: OPEN " + `${getChange(cash)}`;
      break;
    default:

  }
});
