import React from "react";
import { useNavigate } from "react-router-dom";

function BeansCard({ arabicaData, robustaData, libericaData, excelsaData }) {
  const navigate = useNavigate();

  if (!arabicaData && !robustaData && !libericaData && !excelsaData) {
    return;
  }

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

  function getTitle(data) {
    if (data.length > 0 && data[0].coffee_type) {
      return data[0].coffee_type;
    } else {
      return "Title not available";
    }
  }

  function getHistory(data) {
    if (data.length > 0 && data[0].history) {
      return data[0].history;
    } else {
      return "History data not available";
    }
  }

  const handleLeanMore = () => {
    navigate(`/beans/${getTitle(data)}`, { state: { data } });
  };

  return (
    <div className="mb-2 collapse collapse-plus bg-beige-light">
      <input type="checkbox" name="my-accordion-3" />
      <h2 className="pl-12 text-lg font-medium lg:text-2xl collapse-title">
        {getTitle(data)}
      </h2>
      <div className="collapse-content ">
        <div className="w-full bg-white card lg:card-side">
          <div className="items-center card-body">
            <p className="text-sm lg:text-base">{getHistory(data)}</p>
            <button
              onClick={handleLeanMore}
              className="px-3 py-2 mt-4 text-sm font-medium text-white border border-solid rounded-full w-fit bg-brown border-brown sm:px-4 lg:px-5 lg:text-base hover:bg-white hover:text-brown hover:border-solid hover:border hover:border-brown active:scale-95"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeansCard;
