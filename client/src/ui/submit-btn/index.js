export default function SubmitBtn({
  type = 'submit',
  value,
  className = 'btn btn-primary btn-block',
}) {
  return (
    <div className='form-group'>
      <input type={type} value={value} className={className} />
    </div>
  );
}
