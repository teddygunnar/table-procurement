import React from "react";
import {
  Typography,
  InputBase,
  Button,
  Grid,
  NativeSelect,
} from "@material-ui/core";
import SearchIcon from "../../assets/icons/Icon feather-search.svg";
import FilterIcon from "../../assets/icons/Icon awesome-filter.svg";
import monthsArray from "./Months";
import daysArray from "./Days";
import yearsArray from "./Years";
import styles from "./Header.module.css";

const TableHeader = () => {
  return (
    <div className={styles.mainContainer}>
      <div item className={styles.containerHeader}>
        <Typography variant="h4">Store Requisition (SR)</Typography>
        <div className={styles.contHeaderRight}>
          <div className={styles.searchBar}>
            <div className={styles.searchIcon}>
              <Button color="primary">
                <img src={SearchIcon} alt="Search Icon" />
              </Button>
            </div>
            <InputBase
              placeholder="Search...."
              inputProps={{ "aria-label": "search" }}
              className={styles.inputBase}
            />
            <Typography
              style={{ color: "#3F63F5", fontSize: "20px" }}
              align="right"
            >
              - No.SR
            </Typography>
            <Button>
              <img src={FilterIcon} alt="Filter Icon" />
            </Button>
          </div>

          <div className={styles.date}>
            <div className={styles.borderBox}>
              <NativeSelect defaultValue="">
                {daysArray.map((day, i) => (
                  <option value={day} key={i}>
                    {day}
                  </option>
                ))}
              </NativeSelect>
            </div>
            <div className={styles.borderBox}>
              <NativeSelect defaultValue="">
                {monthsArray.map((month, i) => (
                  <option value={month} key={i}>
                    {month}
                  </option>
                ))}
              </NativeSelect>
            </div>
            <div className={styles.borderBox}>
              <NativeSelect defaultValue="">
                {yearsArray.map((year, i) => (
                  <option value={year} key={i}>
                    {year}
                  </option>
                ))}
              </NativeSelect>
            </div>
          </div>
        </div>
      </div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={styles.gridContainer}
      >
        <Grid
          item
          xs={12}
          md={3}
          sm={5}
          align="center"
          className={styles.gridItem}
        >
          <Typography style={{ fontSize: "25px" }}>This month :</Typography>
          <Typography
            style={{
              fontSize: "25px",
              color: "#3F63F5",
              fontWeight: "bolder",
              margin: "0px 25px",
            }}
          >
            20
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sm={5}
          align="center"
          className={styles.gridItem}
        >
          <Typography style={{ fontSize: "25px" }}>On Progress:</Typography>
          <Typography
            style={{
              fontSize: "25px",
              color: "#FFA31A",
              fontWeight: "bolder",
              margin: "0px 25px",
            }}
          >
            20
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sm={5} className={styles.gridItem}>
          <Typography style={{ fontSize: "25px" }}>Approved :</Typography>
          <Typography
            style={{
              fontSize: "25px",
              color: "#00AF9E",
              fontWeight: "bolder",
              margin: "0px 25px",
            }}
          >
            20
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default TableHeader;
