
import BookList from './BookList';


export default async function BookListPage() {

  const response = await fetch(`http://frontend-balancer-1586500413.us-east-1.elb.amazonaws.com:8080/books`, {

    cache: 'no-store',
  });
  const books = await response.json();


  return <BookList books={books} />;
}
