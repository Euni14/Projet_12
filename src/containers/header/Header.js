import "./Header.css";
import { LanguageSelector } from "../../components/LanguageSelector/LanguageSelector";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLangAsync } from "../../services/content/contentSlice";

function Header() {
  const { translations } = useSelector((state) => state.content);
  const contentstatus = useSelector((state) => state.content.status);
  const dispatch = useDispatch();
  useEffect(() => {
    const asyncFn = async () => {
      dispatch(setLangAsync());
      console.log(translations);
    };
    asyncFn();
  }, []);

  return contentstatus === "loading" ? (
    <p>Loading...</p>
  ) : (
    <div className="header">
      HEADER {translations.un}
      <LanguageSelector></LanguageSelector>
    </div>
  );
}

export default Header;
