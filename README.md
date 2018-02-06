# PlaylistToMP3

## Qu'est ce que c'est ?

Cette application permet de transformer une playlist youtube ou une vidéo youtube en fichier audio mp3 et de la télécharger. Pour une playlist, chaque vidéo sera un fichier mp3 différent.

## Pré-requis

Posséder node.js sur sa machine.

*Windows :*
Telecharger ffmpeg-3.0-win64-static.7z sur le lien : https://www.videohelp.com/software/ffmpeg/old-versions

Ajouter à la variable d'environnement Path
* FFMPEG_PATH tel que %SYSTEM_ROOT%\ffmpeg-3.0-win64-static\bin\ffmpeg.exe
* FFPROBE_PATH tel que %SYSTEM_ROOT%\ffmpeg-3.0-win64-static\bin\ffprobe.exe

*Unix :*
installer ffmpeg
> apt-get install ffmpeg</blockquote>

## Comment l'utiliser

Avec un terminal ou un invité de commande placez vous dans le dossier PlaylistToMP3. Pour le premier lancement tapez la commande
> npm install</blockquote>

Pour lancer l'application, tapez la commande
> npm start</blockquote>

Ouvrez un navigateur et accédez a l'adresse localhost:4000

