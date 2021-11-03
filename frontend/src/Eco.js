import React from "react";

const Eco = () => {
  return (
    <div className="card" id="eco">
      <div className="title">
        <h3>環保</h3>
        <p>1公里內...</p>
      </div>
      <div className="table">
        <table>
          <tr>
            <td>綠色友善餐廳</td>
            <td>5間</td>
          </tr>
          <tr>
            <td>綠色商店</td>
            <td>3間</td>
          </tr>
          <tr>
            <td>自備飲料杯優惠店家</td>
            <td>3間</td>
          </tr>
          <tr>
            <td>自備餐具優惠店家</td>
            <td>1間</td>
          </tr>
          <tr>
            <td>舊衣回收箱</td>
            <td>2個</td>
          </tr>
          <tr>
            <td>垃圾車停靠點</td>
            <td>2個</td>
          </tr>
          <tr>
            <td>公民營廢棄物清除機構</td>
            <td>1間</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Eco;
