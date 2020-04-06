import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Foods</h1>
    <div className="border">
      <img className="food-img" src={img + "?grayscale"} alt="random" />
      <img
        className="food-img"
        src="https://sugarfreelondoner.com/wp-content/uploads/2019/05/keto-milk-chocolate.jpg"
        alt="chocolate"
      />
      <img
        className="food-img"
        src="https://minimalistbaker.com/wp-content/uploads/2016/05/THE-BEST-Vegan-Chocolate-Ice-Cream-SO-creamy-rich-and-easy-to-make-vegan-glutenfree-icecream-dessert-chocolate-recipe-summer.jpg"
        alt="ice cream"
      />
      <img
        className="food-img"
        src="https://www.mypricechopper.com/Frontend/Media/Recipes/spinachleaves359x359.jpg"
        alt="spinach"
      />
    </div>
  </div>,
  document.getElementById("root")
);
