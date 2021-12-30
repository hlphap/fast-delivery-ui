import styles from "./SelectInput.module.scss";

const SelectInput = ({ title, name, options, onChange, valueShow, value }) => {
  return (
    <div className={styles.selectInput}>
      <h1>{title ? title : "Tên field"}</h1>
      <select
        type="text"
        placeholder={title ? `${title}...` : "Nhập dữ liệu"}
        name={name}
        onChange={onChange}
        defaultValue="default"
      >
        {title && (
          <option value="default" disabled>
            {valueShow ? valueShow : title}
          </option>
        )}
        {options &&
          options.map((option) => (
            <option value={JSON.stringify(option)} key={option._id}>
              {" "}
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectInput;
