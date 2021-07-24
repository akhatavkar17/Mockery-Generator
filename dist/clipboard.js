function copy() {
  let textarea = document.getElementById('out-box');
  textarea.select();
  document.execCommand("copy");
}
