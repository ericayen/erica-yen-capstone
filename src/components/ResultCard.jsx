import React from "react";

function ResultCard({ result }) {
  return (
    <div className="p-8 mb-2 bg-beige-light">
      <h2 className="text-lg font-medium lg:text-2xl">
        {result.coffee_type} ({result.region})
      </h2>
      <div className="w-full bg-white card lg:card-side">
        <div className="items-center card-body">
          <p className="text-sm lg:text-base">{result.history}</p>
          <p className="text-sm lg:text-base">
            <span className="font-medium">Countries: </span>
            {result.countries}
          </p>
          <p className="text-sm lg:text-base">
            <span className="font-medium">Roast profile: </span>
            {result.roast_profile}
          </p>
          <p className="text-sm lg:text-base">
            <span className="font-medium">Flavor profile: </span>
            {result.flavor}
          </p>
          <p className="text-sm lg:text-base">
            <span className="font-medium">Acidity: </span>
            {result.acidity}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
