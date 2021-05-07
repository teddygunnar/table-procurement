import axios from "axios";

const BASE = "https://dreadnought.core-erp.com/CORE_ERP_API/PROCUREMENT/sr";
const KEY = "SVR-0303903-0109209301-0193031";
const AUTH =
  "MzAyNEQ2Q0U2QkE5ODYzRUYxMzVCQUFGRDc1MEZDNDE5MUZERDcyNDAxQzAzNkM1OUVBNzhEMDZCQTExMTA5MzoxMjM0";

const options = {
  headers: {
    "Content-Type": "application/json",
    SERVER_KEY: KEY,
    Authorization: `Basic ${AUTH}`,
  },
};

const parameter = {
  rqSRList: {
    COMPANY_ID: "TBP",
    SITE_ID: "CAMP",
    USER_ID: "dilly",
    SESSION_LOGIN_ID:
      "DB2B72534D38EA86C79DB2A0E1F2B70E458ED6EEF04BCB7E7B318C08E7AE0700",
    FILTER_DAY: "ALL",
    FILTER_MONTH: "05",
    FILTER_YEAR: "2020",
    FILTER_COLOUMN: "",
    FILTER_VALUE: "",
    PAGE_NO: "1",
  },
};

export const fetchData = async () => {
  try {
    const {
      data: { rsSRList },
    } = await axios.post(BASE, parameter, options);
    return Array.from(rsSRList);
  } catch (error) {
    console.log(error);
  }
};
