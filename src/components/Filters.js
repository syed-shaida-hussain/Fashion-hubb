import {useFilters } from "../contexts/filter-context/filter-context"
 
const Filters = () => {

    const {sortBy , rateBy , showFastDeliveryOnly , showCodOnly , showCategoryMen , showCategoryWomen , price , dispatch } = useFilters()

    const priceChangeHandler = (value) => {
        dispatch({ type: "PRICE", payload: value });
        dispatch({ type : "RATE" , payload : "PRICE"})
      };

    return (
        <aside className="filters">
        <div className="filter flex ">
            <p className="filter-heading margin-left margin-bottom margin-top">Filters</p>
            <a className="clear-link margin-right margin-bottom margin-top" onClick = {() => dispatch({type : "CLEAR"})}>Clear</a>
        </div>
        <input
          type="range"
          list="price-range"
          min={0}
          max={4000}
          step={1000}
          value={price}
          className="price-input"
          onChange={e => priceChangeHandler(e.target.value)}
        />
        <datalist id="price-range">
          <option value="0" label="0"></option>
          <option value="1000"></option>
          <option value="2000" label="2000"></option>
          <option value="3000"></option>
          <option value="4000" label = "4000"></option>
        </datalist>
        <div className="flex margin">
          <span className="price-range-txt">0</span>
          <span className="price-range-txt">1k</span>
          <span className="price-range-txt">2k</span>
          <span className="price-range-txt">3k</span>
          <span className="price-range-txt">4k</span>
        </div>

        <div className="filter">
                <p className="filter-heading-text margin-left">Category</p>
                <div>
                <input className="margin-left margin-right margin-top margin-bottom" id="category-checkbox1" name = "category"
                    type="checkbox" checked={showCategoryMen}
                    onChange={() => dispatch({ type: "CATEGORY_MEN" })}/>
               <label className="input-label1  margin-bottom margin-top" for="category-checkbox1">
                     Men
                </label>
            </div>
            <div>
                <input className="margin-left margin-right margin-bottom" id="category-checkbox2" name = "category"
                    type="checkbox" checked = {showCategoryWomen}
                    onChange={() => dispatch({ type: "CATEGORY_WOMEN"  })}  />
                <label className="input-label2 margin-right margin-bottom" for="category-checkbox2"> 
                 Women</label>
            </div>
        </div>
        <div className="filter">
            <p className="filter-heading-text margin-left">Services : </p>
            <div className="flex">
                <input className="margin-left margin-top margin-bottom" id="category-checkbox3" name = "service"
                    type="checkbox" checked={showCodOnly}
                    onChange={() => dispatch({ type: "COD" })}/>
               <label className="input-label1 margin-bottom margin-top" for="category-checkbox3">
                    COD Available
                </label>
            </div>
            <div className="flex">
                <input className="margin-left margin-bottom" id="category-checkbox4" name = "service"
                    type="checkbox" checked = {showFastDeliveryOnly}
                    onChange={() => dispatch({ type: "TOGGLE_DELIVERY"  })}  />
                <label className="input-label2 margin-right margin-bottom" for="category-checkbox4">Fast
                    Delivery 🚚</label>
            </div>
        </div>

        <p className="filter-heading-text margin-left">Rating :</p>
        <div className="rating margin-top">
            <input id="rating1" className="margin-left" name="ratings" type="radio" onChange={() =>
          dispatch({ type: "RATE", payload: "4_STARS_AND_ABOVE" })
        }
        checked={rateBy && rateBy === "4_STARS_AND_ABOVE"} />
            <label for="rating1"> 4 stars and above </label>
        </div>
        <div className="rating">
            <input id="rating2" className="margin-left" name="ratings" type="radio" onChange={() =>
          dispatch({ type: "RATE", payload: "3_STARS_AND_ABOVE" })
        }
        checked={rateBy && rateBy === "3_STARS_AND_ABOVE"}  />
            <label for="rating2"> 3 stars and above</label>
        </div>
        <div className="rating">
            <input id="rating3" className="margin-left" name="ratings" type="radio" onChange={() =>
          dispatch({ type: "RATE", payload: "2_STARS_AND_ABOVE" })
        }
        checked={rateBy && rateBy === "2_STARS_AND_ABOVE"}  />
            <label for="rating3"> 2 stars and above</label>
        </div>
        <div className="rating">
            <input id="rating4" className="margin-left" name="ratings" type="radio" onChange={() =>
          dispatch({ type: "RATE", payload: "1_STARS_AND_ABOVE" })
        }
        checked={rateBy && rateBy === "1_STARS_AND_ABOVE"} />
            <label for="rating4"> 1 stars and above</label>
        </div>
        <p className="filter-heading-text margin-left">Sort by :</p>
        <div className="rating">
            <input id="price-filter1" className="margin-left" name="sort" type="radio" onChange={() =>
          dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
        }
        checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}/>
            <label for="price-filter1"> Price-Low to High</label>
        </div>
        <div className="rating">
            <input id="price-filter2" className="margin-left" name="sort" type="radio"  onChange={() =>
          dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
        }
        checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}/>
            <label for="price-filter2"> Price-High to Low</label>
        </div>
    </aside>
    )
}

export {Filters}