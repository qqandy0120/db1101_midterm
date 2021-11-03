import React from "react";

const Safety = () => {
  return (
    <div class="card" id="safety">
      <div class="title">
        <h3>治安</h3>
        <p>半年內發生的...</p>
      </div>
      <div class="table">
        <table>
          <tr>
            <td>自行車竊案</td>
            <td>3件</td>
          </tr>
          <tr>
            <td>機車竊案</td>
            <td>5件</td>
          </tr>
          <tr>
            <td>汽車竊案</td>
            <td>2件</td>
          </tr>
          <tr>
            <td>住宅竊案</td>
            <td>1件</td>
          </tr>
          <tr>
            <td>隨機強盜案</td>
            <td>1件</td>
          </tr>
          <tr>
            <td>隨機搶奪案</td>
            <td>1件</td>
          </tr>
          <tr>
            <td>交通事故</td>
            <td>3件</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Safety;
