import React from "react";

function CoffeeCard({ arabicaData, robustaData, libericaData, excelsaData }) {
  if (!arabicaData && !robustaData && !libericaData && !excelsaData) {
    return;
  }

  //   const data = robustaData ? robustaData : libericaData;

  //   function getHistory(data) {
  //     if (data.length > 0 && data[0].history) {
  //       return data[0].history;
  //     }
  //     if (data.length === 1) {
  //       return data.history;
  //     } else {
  //       return "History data not available";
  //     }
  //   }

  let data;
  if (arabicaData) {
    data = arabicaData;
  } else if (robustaData) {
    data = robustaData;
  } else if (libericaData) {
    data = Array.isArray(libericaData) ? libericaData : [libericaData];
  } else if (excelsaData) {
    data = Array.isArray(excelsaData) ? excelsaData : [excelsaData];
  }

  function getHistory(data) {
    if (data.length > 0 && data[0].history) {
      return data[0].history;
    } else {
      return "History data not available";
    }
  }

  return (
    <div className="collapse-content ">
      <div className="w-full bg-white card lg:card-side">
        <div className="card-body">
          <h3 className="flex items-center justify-center text-lg font-normal card-title"></h3>
          <p className="text-sm">{getHistory(data)}</p>
        </div>
      </div>
      <div className="flex justify-center w-full gap-2 py-2">
        <a
          href="#1"
          className="bg-white border-none btn btn-xs hover:bg-brown-light"
        >
          1
        </a>
        {[...Array(data.length)].map((_, index) => (
          <a
            key={index}
            href={`#${index + 2}`}
            className="border-none bg-beige-light btn btn-xs hover:bg-brown-light"
          >
            {index + 2}
          </a>
        ))}
      </div>
    </div>
  );
}

export default CoffeeCard;
