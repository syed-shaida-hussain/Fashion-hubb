import { useFilters } from "../contexts";

function getFilteredData(filteredList , filterBy , rateBy ) {
    const {price} = useFilters()

    if (rateBy && rateBy === "4_STARS_AND_ABOVE") {
        if (filterBy  === "PRICE_FILTER") {
            return filteredList.filter((item) => item.rating >= 4).filter((item) => Number(item.discountedPrice) <= price)
        } else{
            return filteredList.filter((item) => item.rating >= 4)
        }
    } 
    if (rateBy && rateBy === "3_STARS_AND_ABOVE") {
        if (filterBy === "PRICE_FILTER") {
            return filteredList.filter((item) => item.rating >= 3).filter((item) => Number(item.discountedPrice) <= price)
        } else{
            return filteredList.filter((item) => item.rating >= 3);
        }
    }
    if (rateBy && rateBy === "2_STARS_AND_ABOVE") {
        if ( filterBy === "PRICE_FILTER") {
            return filteredList.filter((item) => item.rating >= 2).filter((item) => Number(item.discountedPrice) <= price)
        } else{
            return filteredList.filter((item) => item.rating >= 2);
        }    }
    if (rateBy && rateBy === "1_STARS_AND_ABOVE") {
        if ( filterBy === "PRICE_FILTER") {
            return filteredList.filter((item) => item.rating >= 1).filter((item) => Number(item.discountedPrice) <= price)
        } else{
            return filteredList.filter((item) => item.rating >= 1);
        }    }

    if ( filterBy === "PRICE_FILTER") {
        return filteredList.filter((item) => Number(item.discountedPrice) <= price)
    }

    return filteredList;
  }

  export {getFilteredData}