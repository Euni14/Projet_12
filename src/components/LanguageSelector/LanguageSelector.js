import { useSelector, useDispatch } from "react-redux";
import { setLangAsync } from "../../services/content/contentSlice";

export function LanguageSelector() {
  const lang = useSelector((state) => state.content.lang);

  const supportedLangs = useSelector((state) => state.content.supportedLangs);

  const dispatch = useDispatch();

  return (
    <div>
      <select
        value={lang}
        onChange={(newLang) => dispatch(setLangAsync(newLang.target.value))}
      >
        {Object.entries(supportedLangs).map(([code, name]) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
