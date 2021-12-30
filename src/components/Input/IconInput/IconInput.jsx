import { useState } from "react";
import Styles from "./IconInput.module.scss";

function IconInput({
  iconComponent,
  textInput,
  titleInput,
  miniTitleInput,
  typeInput,
  name,
  onChange,
}) {
  const [data, setData] = useState("");

  const handleOnChange = (e) => {
    setData(e.target.value);
    onChange(e);
  };

  return (
    <div className={Styles.FranceInputBlock}>
      <div className={Styles.FranceInputWrap}>
        <div className={Styles.TextInputWrap}>
          {!!titleInput && (
            <h3 className={Styles.TitleInput}>
              {titleInput}
              <span className={Styles.MiniTitleInput}>{miniTitleInput}</span>
            </h3>
          )}
        </div>
        <div className={Styles.InputWrap}>
          <input
            name={name}
            className={Styles.Input}
            autoComplete="off"
            placeholder={textInput}
            type={typeInput ? typeInput : "text"}
            value={data}
            onChange={handleOnChange}
          />
          <div className={Styles.IconWrap}>
            {!!iconComponent && iconComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconInput;
