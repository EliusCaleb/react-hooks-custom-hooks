import React, { useEffect } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";

function HomePage() {
  // fetch data for posts using custom hooks
  const { data: posts, isLoaded } = useQuery("http://localhost:4000/posts");
  // set the document title
  useEffect(() => {
    document.title = "Underreacted | Home";
  }, []);
  useDocumentTitle("Underreacted | Home");
  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;


//code that is replace by hools 
//const { posts, isLoaded } = useQuery();
  /*
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    fetch("http://localhost:4000/posts")
      .then((r) => r.json())
      .then((posts) => {
        setPosts(posts);
        setIsLoaded(true);
      });
  }, []);
  */