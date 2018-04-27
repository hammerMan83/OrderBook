import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Action Type",
              accessor: "actionType"
            },
              {
                Header: "Bid / Ask",
                accessor: "bidOrAsk"
              },
              {
                Header: "TUSD Filled",
                accessor: "amountFilled"
              },
              {
                Header: "TUSD Amount",
                accessor: "buySellAmount"
              },
              {
                Header: "Actual Rate",
                accessor: "status"
              },            
              {
                Header: "Est. Total BTC",
                accessor: "estimatedTotal"
              },
              {
                Header: "Status",
                accessor: "status"
              }
          ]}
          className="-striped -highlight"
        />
        <br />
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
