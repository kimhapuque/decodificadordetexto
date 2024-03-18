document.getElementById('encrypt-button').addEventListener('click', function() {
    var inputText = document.getElementById('input-text').value;
    var encryptedText = encryptText(inputText);
    document.getElementById('output-text').innerText = encryptedText;
  });
  
  document.getElementById('decrypt-button').addEventListener('click', function() {
    var inputText = document.getElementById('input-text').value;
    var decryptedText = decryptText(inputText);
    document.getElementById('output-text').innerText = decryptedText;
  });
  
  document.getElementById('copy-button').addEventListener('click', function() {
    var outputText = document.getElementById('output-text').innerText;
    copyToClipboard(outputText);
  });
  
  function encryptText(text) {
    return text.replace(/[a-zA-Z]/g, function(c) {
      return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
  }
  
  function decryptText(text) {
    return encryptText(text);
  }
  
  function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Texto copiado para a área de transferência!");
  }
  