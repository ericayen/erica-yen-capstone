import React from "react";
import { useLocation } from "react-router-dom";

function DetailCard({ item }) {
  const location = useLocation();

  return (
    <div className="w-full bg-white card lg:card-side">
      <div className="items-center card-body">
        {location.pathname === "/quiz/result" && (
          <p className="text-sm lg:text-base">{item.history}</p>
        )}
        <p className="text-sm lg:text-base">
          <span className="font-medium">Countries: </span>
          {item.countries}
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-medium">Roast profile: </span>
          {item.roast_profile}
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-medium">Flavour profile: </span>
          {item.flavour}
        </p>
        <p className="text-sm lg:text-base">
          <span className="font-medium">Acidity: </span>
          {item.acidity}
        </p>
      </div>
    </div>
  );
}

export default DetailCard;
