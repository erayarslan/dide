window.addEventListener("beforeunload", function (e) {
  doSave(editor.getValue())
  (e || window.event).returnValue = "hehe";
  return null;
});

var doSave = function (value) {
  var fileName = prompt("filename");
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  var url = window.URL.createObjectURL(new Blob([value], {type: "text/javascript"}));
  a.href = url;
  a.download = fileName + ".js";
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

CodeMirror.commands.save = function (editor) {
  doSave(editor.getValue());
};

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  styleActiveLine: true,
  matchBrackets: true,
  tabSize: 2,
  theme: "paraiso-dark",
  lineWrapping: true,
  showTrailingSpace: true,
  lineNumberFormatter: function (line) {
    return "@" + line;
  }
});