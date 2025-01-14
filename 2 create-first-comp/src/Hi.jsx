function Hi() {

  let MyName = 'Vasu';
  let fullName=()=>{
    return MyName;
  }
  return <h1>Hi {fullName()}</h1>;

  //in javascript we use backticks to write javascript code inside html tags but in react we don't use backticks
  //we use curly braces to write javascript code inside html tags
}

export default Hi;