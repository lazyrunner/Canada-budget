import decoratedData from '../../components/charts/BarGraph/data';

function updateData(data, keyPath) {
  if (data.children) {
    data.children.map(child => updateData(child, keyPath));
  }
  // add a fill to all the uncolored cells
  if (!data.hex) {
    data.style = {
      fill: "#223F9A"
    };
  }
  data.style = {
    ...data.style,
    fillOpacity: keyPath && !keyPath[data.name] ? 0.2 : 1
  };

  return data;
}

const reducer = (state = decoratedData, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "updateChildValue":
      newState.children.forEach(parent => {
        if (parent.name === action.payload.parent) {
          parent.children.forEach(child => {
            if (child.name === action.payload.child) {
              let diff = child.value - action.payload.value;
              newState.total -= diff;
              child.value = action.payload.value;
            }
          })
        }
      });
      return newState;
    case "updateChildPercent":
      newState.children.forEach(parent => {
        if (parent.name === action.payload.parent) {
          parent.children.forEach(child => {
            if (child.name === action.payload.child) {
              let diff = child.percent - action.payload.percent;
              newState.savedPercent += diff;
              child.percent = action.payload.percent;
            }
          })
        }
      });
      return newState;
    case "updateHighlight":
      let updatedState = updateData(state, action.payload)
      return updatedState
    case "clicked":
      newState.clicked = !newState.clicked;
      newState.parent = action.payload.parent;
      newState.child = action.payload.child;
      return newState;
    default:
      return state;
  }
}

export default reducer;