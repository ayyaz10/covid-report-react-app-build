const Input = ({
  type,
  name,
  placeholder,
  onPatientChange,
  setPatientState,
  inputValue,
  // handlePatientChange,
}) => {
  return (
    <input
      onChange={(e) => setPatientState(e)}
      type={type}
      name={name}
      placeholder={placeholder}
      value={inputValue}
      className='form-control mb-3'
      required
    />
  );
};

export default Input;
