
import BookSingleCard from "./BookSingleCard";

export default function BookCard({ books }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-4">
      {books.map((item) => {
        return(
            <BookSingleCard key={item._id} book={item}/>)
      })}
    </div>
  );
}
