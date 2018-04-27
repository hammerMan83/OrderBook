import React from "react";
import namor from "namor";
import "./index.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const getStatus = () => {
  switch (getRandomInt(3)) {
    case 0:
      return "Pending";
    case 1:
      return "Open";
      break;
    case 2:
      return "Done";
  };
}

const newOrder = () => {
  const bidOrAsk = getRandomBetween(0.0001, 0.0002).toFixed(8);
  const buySellAmount = getRandomInt(100).toFixed(8);
  const estimatedTotal = (bidOrAsk * buySellAmount).toFixed(8);

  return {
    actionType: getRandomInt(2) === 1 ? "Limit Sell" : "Limit Buy", 
    bidOrAsk: bidOrAsk,
    amountFilled: Math.random().toFixed(8),
    buySellAmount: buySellAmount,
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    estimatedTotal: estimatedTotal
  };
};

export function makeData(len = 5) {
  return range(len).map(a => {
    let x = {
      ...newOrder()
    };

    console.log(x);
    return x;
  });
}

export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
    For more examples, visit {''}
    <br />
    <a href="https://github.com/react-tools/react-table" target="_blank">
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>;

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;

