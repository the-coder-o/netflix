import { Route, Routes } from "react-router-dom";

import "./App.css";
import Main from "./Components/Main/Main";
import Register from "./Pages/Register/Register";
import SignInEmail from "./Pages/SignInEmail/SignInEmail";
import SignUpEmail from "./Pages/SignUpEmail/SignUpEmail";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Cartoons from "./Components/Categorys/Cartoons/Cartoon";
import MoviesAction from "./Components/Categorys/Movies/Movies";
import Footer from "./Components/Footer/Footer";
import MoviePopular from "./Components/Categorys/PopularMovies/PopularMovies";
import SearchMovies from "./Components/SearchMovies/SearchMovies";
import Page18 from "./Components/18-page/Page18";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Main />} />
        <Route
          path="/sign-up-email-password-new-user"
          element={<SignUpEmail />}
        />
        <Route path="/cartoons-categories" element={<Cartoons />} />
        <Route path="/movie-product/:id" element={<SingleProduct />} />
        <Route path="/action-movies-categories" element={<MoviesAction />} />
        <Route path="/popular-movies-categories" element={<MoviePopular />} />
        <Route path="/sign-in-email-password-user" element={<SignInEmail />} />
        <Route path="/search-movies-category-all" element={<SearchMovies />} />
        <Route
          path="/You-are-looking-for-banned-movies-and-you-must-be-18+🔞"
          element={<Page18 />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
