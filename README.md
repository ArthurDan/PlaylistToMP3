# PlaylistToMP3

## Qu'est ce que c'est ?

Cette application permet de transformer une playlist youtube ou une vidéo youtube en fichiers audio mp3 et, ainsi, de les télécharger. Chaque vidéo sera transformé un fichier mp3 indépendant.

## Pré-requis

Posséder node.js sur sa machine.

**Windows :**
Telecharger ffmpeg-3.0-win64-static.7z en suivant le lien : https://www.videohelp.com/software/ffmpeg/old-versions

Ajouter à la variable d'environnement Path
* FFMPEG_PATH tel que %SYSTEM_ROOT%\ffmpeg-3.0-win64-static\bin\ffmpeg.exe
* FFPROBE_PATH tel que %SYSTEM_ROOT%\ffmpeg-3.0-win64-static\bin\ffprobe.exe

**Unix :**
Installer ffmpeg en entrant la commande suivante dans le terminal :
> apt-get install ffmpeg</blockquote>

**MacOS X:**
La manière la plus simple d'installer ffmeg sur mac est de passer par le [Homebrew](https://brew.sh/).
Entrez la commande suivante dans le terminal :
> brew intall ffmpeg</blockquote>


## Comment l'utiliser

Modifiez la valeur a la clé "pathDownload" dans \PlaylistToMP3\routes\config.json qui correspond à la route où sera téléchargé tel que:
```js
"pathDownload":"C:/Users/falle/Music/yt2mp3",
```
Avec un terminal ou un invité de commandes, placez-vous dans le dossier PlaylistToMP3. Pour le premier lancement tapez la commande
> npm install</blockquote>

Pour lancer l'application, tapez la commande
> npm start</blockquote>

Ouvrez un navigateur et accédez a l'adresse localhost:4000

Si vous voulez télécharger une playlist, rentrez l'url dans le champ de gauche puis cliquez sur le bouton convertir en-dessous

Pour une simple vidéo, rentrez l'url dans le champ de gauche puis cliquez sur le bouton convertir en-dessous

### Get

* localhost:4000/ : correspond à la page d'accueil de l'application 

### Post

* localhost:4000/playlist : prend en paramètre la variable youtubeUri qui correspond a l'url de la playlist

* localhost:4000/video : prend en paramètre la variable youtubeUri qui correspond a l'url de la playlist

