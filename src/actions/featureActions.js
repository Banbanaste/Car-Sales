export const addFeature = payload => {
  return { type: "ADD_FEATURE", payload };
};

export const subtractFeature = payload => {
  return { type: "SUBTRACT_FEATURE", payload };
};
