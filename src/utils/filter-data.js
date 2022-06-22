import { useFilters } from "../contexts";

function getFilteredData(filteredList, rateBy) {
    const {price} = useFilters()
    if (rateBy && rateBy === "4_STARS_AND_ABOVE") {
        return filteredList.filter((item) => item.rating >= 4)
    } 
    if (rateBy && rateBy === "3_STARS_AND_ABOVE") {
        return filteredList.filter((item) => item.rating >= 3);
    }
    if (rateBy && rateBy === "2_STARS_AND_ABOVE") {
        return filteredList.filter((item) => item.rating >= 2);
    }
    if (rateBy && rateBy === "1_STARS_AND_ABOVE") {
        return filteredList.filter((item) => item.rating >= 1);
    }
    if (rateBy && rateBy === "PRICE") {
        console.log("price" , price)
        return filteredList.filter((item) => item.discountedPrice >= price)
    }
    return filteredList;
  }

  export {getFilteredData}