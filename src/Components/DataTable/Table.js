import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Data from "./Data/TableData";
import Columns from "./Data/TableColumn";
import CustomTableStyle from "./TableStyles/CustomTableStyle";
import CustomRowBackColor from "./TableStyles/CustomRowBackColor";
import { Checkbox, Button } from "@material-ui/core";
import useStyles from "./styles";

const Table = () => {
  const classes = useStyles();

  const [mainInfo, setMainInfo] = useState(true);

  const switchMode = () => {
    setMainInfo((prevMainInfo) => !prevMainInfo);
  };

  return (
    <div>
      <div>
        <Button
          variant="contained"
          className={classes.changeButton}
          style={{
            backgroundColor: "#2975D9",
            color: "white",
            borderRadius: "10px 10px 0 0",
            marginRight: 5,
            fontSize: 12,
          }}
          onClick={switchMode}
        >
          Main Info
        </Button>
        <Button
          variant="contained"
          className={classes.changeButton}
          style={{
            backgroundColor: "white",
            color: "#3F63F5",
            borderRadius: "10px 10px 0 0",
            fontSize: 12,
          }}
          onClick={switchMode}
        >
          Additional Info
        </Button>
      </div>
      {mainInfo && (
        <>
          <DataTable
            columns={Columns}
            data={Data()}
            selectableRows
            selectableRowsComponent={Checkbox}
            noContextMenu={true}
            noHeader={true}
            sortIcon
            selectableRowsHighlight
            customStyles={CustomTableStyle}
            conditionalRowStyles={CustomRowBackColor}
            pagination
            dense
          />
        </>
      )}
    </div>
  );
};

export default Table;
