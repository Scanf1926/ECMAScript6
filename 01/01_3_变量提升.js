function getValue(condition) {

  var value;
  if(condition) {

    value = "blue";
    return value;

  } else {
    return value;
  }

  //value变量的声明被提升到了顶部，而初始化的工作保留在了原处
  //这样很容易导致bug
}
