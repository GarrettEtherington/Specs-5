import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice"
import displayCountryReducer from "../redux/slices/displayCountrySlice";
// import displayCountryReducer from "../redux/slices/displayCountryReducer"


export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayCountryReducer
    },
})
