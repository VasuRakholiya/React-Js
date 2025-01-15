let CurrentTime = () => {
  let date = new Date();
  return <p classNameName="lead">
    this is the current time :{date.toLocaleTimeString()}-{date.toLocaleDateString()}
  </p>
};

export default CurrentTime;