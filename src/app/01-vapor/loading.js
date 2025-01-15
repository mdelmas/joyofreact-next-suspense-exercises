import { range } from "@/utils";
import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";

function VaporExerciseLoading() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        <p></p>
      </header>
      <div className="game-grid">
        {range(1, 8).map((i) => (
          <LibraryGameCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

export default VaporExerciseLoading;
