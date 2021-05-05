import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Data from "./Data/TableData";
import Columns from "./Data/TableColumn";
import AddData from "./Data/AddTableData";
import AddColumns from "./Data/AddTableColumn";
import CustomTableStyle from "./TableStyles/CustomTableStyle";
import CustomRowBackColor from "./TableStyles/CustomRowBackColor";
import AddCustomTableStyle from "./TableStyles/AddCustomTableStyle";
import AddCustomRowBackColor from "./TableStyles/AddCustomRowBackColor";
import { Checkbox, Button } from "@material-ui/core";
import { TableHeader, Footer } from "../";
import useStyles from "./styles";

const Table = () => {
  const classes = useStyles();

  const [mainInfo, setMainInfo] = useState(true);

  const switchMode = () => {
    setMainInfo((prevMainInfo) => !prevMainInfo);
  };

  const checkBoxProps = {
    color: "primary",
  };

  return (
    <div>
      <TableHeader />
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
      {mainInfo ? (
        <div>
          <DataTable
            columns={Columns}
            data={Data()}
            selectableRows
            selectableRowsComponent={Checkbox} // Pass the function only
            selectableRowsComponentProps={checkBoxProps}
            noContextMenu={true}
            noHeader={true}
            selectableRowsHighlight
            customStyles={CustomTableStyle}
            conditionalRowStyles={CustomRowBackColor}
            pagination
            dense
          />
          <Footer />
        </div>
      ) : (
        <div>
          <DataTable
            columns={AddColumns}
            data={AddData()}
            selectableRows
            selectableRowsComponent={Checkbox} // Pass the function only
            selectableRowsComponentProps={checkBoxProps}
            noContextMenu={true}
            noHeader={true}
            selectableRowsHighlight
            customStyles={AddCustomTableStyle}
            conditionalRowStyles={AddCustomRowBackColor}
            pagination
          />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Table;
