import { useEffect } from "react";
/*
function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}
*/
// custom hooks for homepage
/*
function useDocumentTitle() {
  useEffect(() => {
    document.title = "Underreacted | Home";
  }, []);
}
*/
// custom hooks for arrticle page
function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}
export default useDocumentTitle;
