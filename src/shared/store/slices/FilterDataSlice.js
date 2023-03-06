import { createSlice } from "@reduxjs/toolkit";

const allFilterData = (data) => {
  const allData = [
    ...data.brandFilter,
    ...data.originFilter,
    data.fitmentFilter,
  ];
  return allData.flat(1);
};

export const FilterDataSlice = createSlice({
  name: "FilterData",
  initialState: {
    rangeFilter: [],
    brandFilter: [],
    originFilter: [],
    fitmentFilter: [],
  },
  reducers: {
    rangeFilter: (state, action) => {
      state.rangeFilter = action.payload;
      state.allFilter = allFilterData(state);
    },
    brandFilter: (state, action) => {
      state.brandFilter = action.payload;
      state.allFilter = allFilterData(state);
    },
    originFilter: (state, action) => {
      state.originFilter = action.payload;
      state.allFilter = allFilterData(state);
    },
    fitmentFilter: (state, action) => {
      state.fitmentFilter = action.payload;
      state.allFilter = allFilterData(state);
    },
    clearFilter: (state) => {
      state.allFilter = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  brandFilter,
  rangeFilter,
  originFilter,
  fitmentFilter,
  clearFilter,
} = FilterDataSlice.actions;

export default FilterDataSlice.reducer;
