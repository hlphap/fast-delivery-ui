import { useState, useEffect } from "react";
import styles from "./TextInput.module.scss";

const TextInput = ({
  title,
  name,
  disabled,
  onChange,
  valueDisabled,
  type = "text",
}) => {
  const [data, setData] = useState("");

  useEffect(() => {
    valueDisabled && setData(valueDisabled);
  }, [valueDisabled]);

  const handleOnChange = (e) => {
    onChange(e);
    setData(e.target.value);
  };

  return (
    <div className={styles.textInput}>
      <h1>{title ? title : "Tên field"}</h1>
      <input
        type={type}
        placeholder={title ? `${title}...` : "Nhập dữ liệu"}
        name={name}
        value={data}
        disabled={disabled}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default TextInput;
