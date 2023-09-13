const reducer = (state = "Dummy Name", action) => {
  if (action.type === "NAME") {
    state = action.payload;
  }
  return state;
};

export default reducer;
