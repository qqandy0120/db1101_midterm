import React from "react";

const Form = () => {
  return (
    <form action="get" className="search">
      <div className="addressTags">
        <label htmlFor="address">地址</label>
        <input type="text" id="address" name="inputAddress" />
      </div>
      <div className="conditionTags">
        <label htmlFor="condition">篩選類別</label>
        <button>環境指標</button>
        <button>環保</button>
        <button>治安</button>
      </div>
      <button className="submit" type="submit">
        查詢
      </button>
    </form>
  );
};

export default Form;
