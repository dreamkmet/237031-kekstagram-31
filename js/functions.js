function checkStringLength(string , maxlength) {
  if (string.length <= maxlength) {
    return true;
  } else {
    return false;
  }
}

// Строка короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false
