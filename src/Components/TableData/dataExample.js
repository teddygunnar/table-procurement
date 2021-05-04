import Checkmark from "../../assets/icons/Icon Checkmark.svg";

function createData(no, nosr, date, dept, ket, appr, actv, created) {
  return { no, nosr, date, dept, ket, appr, actv, created };
}

const rows = [
  createData(
    1,
    "PAJI-K00011",
    "01/01/21",
    "FIN-FINANCE",
    "Finger Print 1 Unit",
    "A",
    <img src={Checkmark} alt="checkmark icon" />,
    "Ipul"
  ),
  createData(
    2,
    "PAJI-K00011",
    "01/01/21",
    "FIN-FINANCE",
    "Pembelian AC untuk kantor",
    "R",
    <img src={Checkmark} alt="checkmark icon" />,
    "Ipul"
  ),
  createData(
    3,
    "PAJI-K00011",
    "01/01/21",
    "FIN-FINANCE",
    "Finger Print 1 Unit",
    "R",
    <img src={Checkmark} alt="checkmark icon" />,
    "Ipul"
  ),
  createData(
    4,
    "PAJI-K00011",
    "01/01/21",
    "FIN-FINANCE",
    "Finger Print 1 Unit",
    "R",
    <img src={Checkmark} alt="checkmark icon" />,
    "Ipul"
  ),
  createData(
    5,
    "PAJI-K00011",
    "01/01/21",
    "FIN-FINANCE",
    "Finger Print 1 Unit",
    "C",
    <img src={Checkmark} alt="checkmark icon" />,
    "Ipul"
  ),
];

export default rows;
