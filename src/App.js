import "./App.css";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { setLangAsync } from "./services/content/contentSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const contentstatus = useSelector((state) => state.content.status);
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncFn = async () => {
      dispatch(setLangAsync());
    };
    asyncFn();
  }, []);

  return contentstatus === "loading" ? (
    <Spinner></Spinner>
  ) : (
    <div>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
