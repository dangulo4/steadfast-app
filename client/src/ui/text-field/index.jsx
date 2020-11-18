export default function TextField({
  type = 'text',
  name,
  value,
  label,
  onChange,
  autoComplete,
  minLength,
  error,
}) {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        minLength={minLength}
      />

      {error && <span className='error'>{error}</span>}
    </div>
  );
}
