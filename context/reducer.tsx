export const initialState = {};

export function reducer(state: any, action: any) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "CHANGE":
    case "DELETE":
    default: {
      //   throw Error("Unknown action: " + action.type);
      return state;
    }
  }
}
