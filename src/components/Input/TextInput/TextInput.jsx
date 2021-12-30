import { useState, useEffect } from "react";
import styles from "./TextInput.module.scss";

const TextInput = ({
  title,
  name,
  disabled,
  onChange,
  value,
  type = "text",
}) => {
  const [data, setData] = useState("");

  useEffect(() => {
    value && setData(value);
  }, [value]);

  const handleOnChange = (e) => {
    setData(e.target.value);
    onChange(e);
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
