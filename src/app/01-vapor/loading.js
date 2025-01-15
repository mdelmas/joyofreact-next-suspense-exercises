import { range } from "@/utils";
import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";
import ArticleWrapper from "./ArticleWrapper";

function VaporExerciseLoading() {
  return (
    <ArticleWrapper>
      {range(1, 8).map((i) => (
        <LibraryGameCardSkeleton key={i} />
      ))}
    </ArticleWrapper>
  );
}

export default VaporExerciseLoading;
