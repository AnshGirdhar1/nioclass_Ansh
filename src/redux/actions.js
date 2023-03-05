import axios from "axios";
import {
  GET_QUESTIONS_DATA_ERROR,
  GET_QUESTIONS_DATA_LOADING,
  GET_QUESTIONS_DATA_SUCCESS,
} from "./actionTypes";

export const getQuestionsData = (id) => async (dispatch) => {
  dispatch({
    type: GET_QUESTIONS_DATA_LOADING,
    payload: true,
  });
  try {
    const res = await axios.get(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${id}`
    );
    dispatch({
      type: GET_QUESTIONS_DATA_SUCCESS,
      payload: res.data[0].Question,
    });
  } catch (e) {
    dispatch({
      type: GET_QUESTIONS_DATA_ERROR,
      payload: true,
    });
  } finally {
    dispatch({
      type: GET_QUESTIONS_DATA_LOADING,
      payload: false,
    });
  }
};
