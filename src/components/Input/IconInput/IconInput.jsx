import Styles from "./IconInput.module.scss";

function IconInput(props) {
  const {
    iconComponent,
    textInput,
    titleInput,
    miniTitleInput,
    isInValid,
    errorText,
    typeInput,
    valueVar,
    onChangefunc,
  } = props;

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
            onChange={(e) => onChangefunc(e.target.value)}
            className={Styles.Input}
            autoComplete="off"
            placeholder={textInput}
            value={typeInput === "date" ? textInput : valueVar}
            type={typeInput ? typeInput : "text"}
            // onChange={onChange}
          />
          {!!isInValid && <p className={Styles.ErrorText}>{errorText}</p>}
          <div className={Styles.IconWrap}>
            {!!iconComponent && iconComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconInput;
