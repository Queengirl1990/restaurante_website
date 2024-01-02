function submitEntry() {
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../scripts/guestbook.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //Gästebuch einträge speichern
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Erfolgreich gespeichert, zeige das Popup an
                showPopup();
                // Optional: Seite neu laden
                // location.reload();
            } else {
                // Fehler beim Speichern, ggf. eine Fehlermeldung anzeigen
                alert("Fehler beim Speichern der Nachricht!");
            }
        }
    };

    var data = "name=" + encodeURIComponent(name) + "&comment=" + encodeURIComponent(comment);
    xhr.send(data);
}

function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
