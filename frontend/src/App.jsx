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
          {/* <div className="badge badge-primary"> new </div> */}
          {/* <div className="card-actions justify-end"></div> */}
          {props.isNew ? (
            <div className="badge badge-primary"> new </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
const PAPPER = [
  { image: "/img/1.jpg", isNew: true, tile: "Dev FullStack" },
  { image: "/img/2.jpg", isVisible: true, tile: "Dev FullStack junior" },
  { image: "/img/3.jpg", tile: "Gojo Wallpeper" },
  { image: "/img/4.jpg", isNew: true, tile: "Gojo" },
];

// export default function App() {
//   return (
//     <div className="flex flex-col items-center gap-5">
//       {PAPPER.map((papper) => (
//    return <ShoeCard {...papper}/>
//       ))}
//     </div>
//   );
// }

export default function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      {PAPPER.map((papper, index) => (
        <ShoeCard key={index} {...papper} />
      ))}
    </div>
  );
}
