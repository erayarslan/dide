CodeMirror.commands.save = function (editor) {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  var url = window.URL.createObjectURL(new Blob([editor.getValue()], {type: "text/javascript"}));
  a.href = url;
  a.download = "test.js";
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  styleActiveLine: true,
  matchBrackets: true,
  tabSize: 2,
  theme: "paraiso-dark",
  fullScreen: true,
  lineWrapping: true,
  showTrailingSpace: true,
  lineNumberFormatter: function (line) {
    return "@" + line;
  }
});