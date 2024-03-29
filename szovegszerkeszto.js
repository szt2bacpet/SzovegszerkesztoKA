document.getElementById('filePicker').addEventListener('change', handleFileSelect);
document.getElementById('saveButton').addEventListener('click', saveText);

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('textEditor').value = e.target.result;
    };
    reader.readAsText(file);
  }
}

function saveText() {
  const textToSave = document.getElementById('textEditor').value;

  if (textToSave.trim() !== '') {
    const blob = new Blob([textToSave], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'nevtelen.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    document.getElementById('feedbackMessage').innerText = 'Sikeres mentés!';
    document.getElementById('feedbackMessage').style.color = 'green';
  } else {
    document.getElementById('feedbackMessage').innerText = 'Üres tartalom enm menthető!';
    document.getElementById('feedbackMessage').style.color = 'red';
  }
}
