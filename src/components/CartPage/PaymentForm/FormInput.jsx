const FormInput = ({ label, id, type = 'text', placeholder, register, name, rules, error }) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register(name, rules)} />
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </fieldset>
  );
};

export default FormInput;
