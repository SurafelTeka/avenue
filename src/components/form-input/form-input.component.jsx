import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
      {/* <input className="form-input" {...otherProps} />
        
        Previously our input is below label and subsequent selector doesnt work , its looking for a sibling component "form-input-label" class after the input 

        so placed it above
        
        */}
    </Group>
  );
};

export default FormInput;
