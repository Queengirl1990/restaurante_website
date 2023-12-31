<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $comment = $_POST["comment"];
    $date = date("d. F Y");

    $entry = "$name\t$comment\t$date\n";

    // Öffne oder erstelle die Gästebuch-Datei
    $file = fopen("guestbook_entries.txt", "a");

    // Schreibe die Daten in die Datei
    fwrite($file, $entry);

    // Schließe die Datei
    fclose($file);

    // Gib den Eintrag zurück als Bestätigung für die Anzeige im Popup
    echo $entry;
} else {
    echo "Formular wurde nicht gesendet!";
}
?>
