function trim(str) {
  str = str.replace(/\s+/g, " ");
  str = str.replace(/^\s|\s$/g, "");
  return str;
}

function isValidString(name) {
  if (name === null || name === undefined) {
    return false;
  }

  name = trim(name);
  if (name === "") {
    return false;
  }
  let namePattern = /^[a-zA-Z\s\.]+$/;

  let matches = name.match(namePattern);
  if (matches === null || matches[0] !== name) {
    return false;
  }
  return true;
}

function isValidNumeric(num) {
  if (num === null || num === undefined) {
    return false;
  }
  // num = trim(num);
  if (num === "") {
    return false;
  }

  let numPattern = /^[0-9]*$/;
  let matches = num.match(numPattern);
  if (matches === null || matches[0] !== num) {
    return false;
  }
  return true;
}
function isValidNumericWithoutZero(num) {
  if (num === null || num === undefined) {
    return false;
  }
  // num = trim(num);
  if (num === "") {
    return false;
  }

  let numPattern = /^[1-9][0-9]*$/;
  let matches = num.match(numPattern);
  if (matches === null || matches[0] !== num) {
    return false;
  }
  return true;
}
function isValidFloat(num) {
  if (num === null || num === undefined) {
    return false;
  }
  if (num === "") {
    return false;
  }

  let floatPattern = /[0-9]+(\.[0-9][0-9]?)?/;
  let matches = num.match(floatPattern);
  if (matches === null || matches[0] !== num) {
    return false;
  }
  return true;
}
function isValidFloatWithoutZero(num) {
  if (num === null || num === undefined) {
    return false;
  }
  if (num === "") {
    return false;
  }

  let floatPattern = /^(?!0*(\.0+)?$)(\d+|\d*\.\d+)$/;
  let matches = num.match(floatPattern);
  if (matches === null || matches[0] !== num) {
    return false;
  }
  return true;
}

function isValidAlphaNum(alphaNum) {
  if (alphaNum === null || alphaNum === undefined) {
    return false;
  }

  alphaNum = trim(alphaNum);
  if (alphaNum === "") {
    return false;
  }

  let alphaNumPattern = /^[a-zA-Z\s0-9]+$/;
  let matches = alphaNum.match(alphaNumPattern);
  if (matches === null || matches[0] !== alphaNum) {
    return false;
  }
  return true;
}

function isValidPassword(str) {
  let returnValue = false;

  // check for null string
  if (str === null) {
    return returnValue;
  }
  str = trim(str);

  // check for empty or for spaces
  if (str === "" || str.search(/\s/) !== -1) {
    return returnValue;
  }
  let re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=_.!*?]).{8,}$/;
  // let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return re.test(str);
}

function isValidEmailId(str) {
  let returnValue = false;

  // check for null string
  if (str === null || str === undefined || str.length > 64) {
    return returnValue;
  }

  str = trim(str);

  // check for empty or for spaces
  if (str === "" || str.search(/\s/) !== -1) {
    return returnValue;
  }

  // check for valid email pattern
  let pEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let matches = str.match(pEmail);
  if (matches === null || matches[0] !== str) {
    return returnValue;
  }
  return true;
}

function isValidDate(dateStr) {
  let date = new Date(dateStr);

  return !isNaN(date.valueOf());
}
function isEmpty(anyStr) {
  if (!anyStr || anyStr === "" || anyStr.length === 0) {
    return false;
  }
  return true;
}
function isEmptyArr(arr) {
  if (arr.length === 0) {
    return false;
  }
  return true;
}

const exposedFunctions = {
  isValidDate: isValidDate,
  isValidEmailId: isValidEmailId,
  isValidPassword: isValidPassword,
  isValidString: isValidString,
  isValidNumeric: isValidNumeric,
  isValidAlphaNum: isValidAlphaNum,
  isEmpty: isEmpty,
  isEmptyArr: isEmptyArr,
  isValidFloat: isValidFloat,
  trim: trim,
  isValidFloatWithoutZero: isValidFloatWithoutZero,
  isValidNumericWithoutZero: isValidNumericWithoutZero,
};

export default exposedFunctions;
