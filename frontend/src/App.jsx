/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function ShoeCard(props) {
  console.log(props);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={props.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <h2 className="card-title">{props.tile}</h2>
          <div className="badge badge-primary"> new </div>
          {/* <div className="card-actions justify-end"></div> */}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      <ShoeCard image="/img/1.jpg" tile="Dev FullStack" />
      <ShoeCard image="/img/2.jpg" tile="Dev FullStack junior" />
      <ShoeCard image="/img/3.jpg" tile="Gojo Wallpeper" />
      <ShoeCard image="/img/4.jpg" tile="Gojo " />
    </div>
  );
}
