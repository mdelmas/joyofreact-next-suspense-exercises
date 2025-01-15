import React from "react";

import { getGamesInLibrary } from "@/helpers/vapor-helpers";
import LibraryGameCard from "@/components/LibraryGameCard";
import ArticleWrapper from "./ArticleWrapper";

export const dynamic = "force-dynamic";

async function VaporExercise() {
  const games = await getGamesInLibrary();

  return (
    <ArticleWrapper
      secondaryTitle={
        <>
          <span className="num-of-games">{games.length}</span> games in library
        </>
      }
    >
      {games.map((game) => (
        <LibraryGameCard key={game.slug} game={game} />
      ))}
    </ArticleWrapper>
  );
}

export default VaporExercise;
