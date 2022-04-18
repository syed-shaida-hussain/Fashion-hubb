 function getSortedData(sortedList, sortBy ) {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
        return sortedList.sort((a, b) => b ["discountedPrice"] - a["discountedPrice"]);
    }
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
        return sortedList.sort((a, b) => a["discountedPrice"] - b["discountedPrice"]);
    }
        return sortedList;
}

export {getSortedData}