
import BookList from './BookList';


export default async function BookListPage() {

  const response = await fetch(`http://backend-balancer-963158454.ap-east-1.elb.amazonaws.com:8080/books`, {

    cache: 'no-store',
  });
  const books = await response.json();


  return <BookList books={books} />;
}
