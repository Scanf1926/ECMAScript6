function getValue(condition) {

  if(condition) {

    let value = "blue";
    return value;

  }
  else {
    //由于这里没有声明value，所以浏览器应该会报错
    return value;
  }


}