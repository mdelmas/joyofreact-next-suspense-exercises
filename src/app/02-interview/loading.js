import React from "react";

import Spinner from "@/components/Spinner";
import ArticleWrapper from "./ArticleWrapper";

async function InterviewExercise() {
  return <ArticleWrapper comments={<Spinner />} />;
}

export default InterviewExercise;
