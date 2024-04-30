import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
      {/* <input className="form-input" {...otherProps} />
        
        Previously our input is below label and subsequent selector doesnt work , its looking for a sibling component "form-input-label" class after the input 

        so placed it above
        
        */}
    </div>
  );
};

export default FormInput;
