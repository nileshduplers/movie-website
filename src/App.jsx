import { useState } from "react";
import Header from "./components/Header/Header";
import StreamMovie from "./components/StreamMovie/StreamMovie";
import MovieData from "./components/MovieData";
import Footer from "./components/Footer/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <StreamMovie />
      <MovieData />
      <Footer />
    </>
  );
}

export default App;
