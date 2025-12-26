

function DateCompo() {

  let time = new Date();

  return (
    <p className="lead">This is current date and time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
  );
}

export default DateCompo;
