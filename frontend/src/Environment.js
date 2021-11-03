import React from "react";

const Environment = () => {
  return (
    <div className="whole">
      <div className="card" id="environment">
        <div className="title">
          <h3>環境指標</h3>
          <p>現在的...</p>
        </div>
        <div className="table">
          <table>
            <tr>
              <td></td>
              <td>鄰近測站</td>
              <td>數值</td>
              <td>狀態</td>
            </tr>
            <tr>
              <td>空氣品質指標AQI</td>
              <td>新北市-永和</td>
              <td>37</td>
              <td>良好</td>
            </tr>
            <tr>
              <td>紫外線指數</td>
              <td>新北市-板橋</td>
              <td>6</td>
              <td>高量級</td>
            </tr>
            <tr>
              <td>水庫水質卡爾森指數</td>
              <td>翡翠水庫</td>
              <td>52</td>
              <td>優氧</td>
            </tr>
            <tr>
              <td>河川汙染指數</td>
              <td>淡水河-中正橋</td>
              <td>4.5</td>
              <td>中度汙染</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Environment;
