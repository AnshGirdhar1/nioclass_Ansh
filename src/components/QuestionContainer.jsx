import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionsData } from "../redux/actions";

const QuestionContainer = () => {
  const dispatch = useDispatch();
  const allQuestions = [
    "AreaUnderTheCurve_901",
    "BinomialTheorem_901",
    "DifferentialCalculus2_901",
  ];
  const [index, setIndex] = useState(0);
  const questionDisplayText = useSelector((state) => state.questions.get.data);
  const loading = useSelector((state) => state.questions.get.loading);
  const error = useSelector((state) => state.questions.get.error);

  const moveNext = () => {
    setIndex(index + 1);
  };

  const movePrev = () => {
    setIndex(index - 1);
  };

  useEffect(() => {
    dispatch(getQuestionsData(allQuestions[index]));
  }, [index]);
  return (
    <div className="question-displayer">
      <div className="question-container">
        <Grid container>
          <Grid item>
            <Typography as="h4" variant="h4" className="question-heading">
              Question {index + 1}
            </Typography>
          </Grid>
          {loading ? (
            <Grid item container className="question-loading-container">
              <CircularProgress />
            </Grid>
          ) : error ? (
            <Grid item container className="question-display-container">
              <Typography>Something Went Wrong...</Typography>
            </Grid>
          ) : (
            <Grid item container className="question-display-container">
              <MathJax>
                <Typography>{questionDisplayText}</Typography>
              </MathJax>
            </Grid>
          )}
          <Grid item container className="pagination-container">
            <Button
              onClick={movePrev}
              disabled={index === 0}
              className="pagination-btn"
            >
              Prev
            </Button>
            <Button
              onClick={moveNext}
              disabled={index === allQuestions?.length - 1}
              className="pagination-btn"
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default QuestionContainer;
