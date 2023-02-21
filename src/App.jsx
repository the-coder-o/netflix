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
        <Route path="/sign-in-email-password-user" element={<SignInEmail />} />
        <Route path="/movie-product/:id" element={<SingleProduct />} />
        <Route path="/cartoons-categories" element={<Cartoons />} />
        <Route path="/action-movies-categories" element={<MoviesAction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
