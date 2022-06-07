function checkCommentLength(text, length) {
  const textLength = text.length;
  return !(textLength > length);
}

checkCommentLength('А что так можно было?', 140);
