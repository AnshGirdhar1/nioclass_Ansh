import {
  GET_QUESTIONS_DATA_ERROR,
  GET_QUESTIONS_DATA_LOADING,
  GET_QUESTIONS_DATA_SUCCESS,
} from "./actionTypes";

const initialData = {
  get: {
    data: "",
    loading: false,
    error: false,
  },
};

export const questionsReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case GET_QUESTIONS_DATA_SUCCESS: {
      return {
        ...state,
        get: {
          ...state.get,
          data: payload,
        },
      };
    }
    case GET_QUESTIONS_DATA_LOADING: {
      return {
        ...state,
        get: {
          ...state.get,
          loading: payload,
        },
      };
    }
    case GET_QUESTIONS_DATA_ERROR: {
      return {
        ...state,
        get: {
          ...state.get,
          error: payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
