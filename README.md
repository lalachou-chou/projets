# Galerie de projets

Site statique en français, sans dépendance à installer, sans CMS et sans base de données. Il se transfère sur un hébergement HTML/CSS/JavaScript, à la racine ou dans un sous-dossier.

## Fichiers

```text
index.html                   Accueil
contact.html                 Identité et adresse e-mail révélée au clic
contact.js                   Affichage et copie de l’adresse
style.css                    Styles communs, couleurs et responsive
script.js                    Lecture des pages et affichage de la galerie
image-modal.js               Agrandissement accessible des images des projets
projets.json                 Liste des fichiers, dans l'ordre d'affichage
projet/                      Une page HTML par projet
images/                      Images des projets et favicon
demo/                        Exemple de réalisation consultable
modeles/projet-modele.html    Modèle à dupliquer
hebergement/apache.htaccess  En-têtes facultatifs pour Apache
```

Les visuels SVG sont des illustrations légères fournies avec le site. Remplacez-les par vos captures ou images. Le projet « guide utilisateur » est explicitement un exemple ; retirez-le ou personnalisez-le avant de communiquer le site à des employeurs. La page du portfolio décrit la création de ce site.

## Ajouter un projet

1. Dupliquez `modeles/projet-modele.html` dans `projet/`, par exemple `projet/mon-projet.html`. Utilisez uniquement des lettres minuscules non accentuées, des chiffres, des tirets ou des underscores, puis `.html`.
2. Ouvrez le fichier dans un éditeur de texte, en UTF-8. Modifiez le titre, le résumé, la contribution et les sections détaillées. Conservez les attributs `data-project-...` : ils permettent à l'accueil de lire vos textes. Vous n'avez pas à modifier le JavaScript.
3. Déposez votre image dans `images/` et remplacez le `src="../images/portfolio.svg"` ainsi que le `href` du lien qui l’entoure par son chemin, par exemple `../images/mon-projet.webp`. Écrivez une description dans `alt`. Conservez `data-image-modal` sur le lien pour ouvrir l’image dans la modale. Formats acceptés : WebP, PNG, JPEG, AVIF et SVG. Préférez une image paysage d'environ 1 200 × 744 px, optimisée idéalement sous 300 Ko. N'utilisez que des SVG de confiance.
4. Pour afficher « Ouvrir le projet », décommentez la ligne contenant `data-project-link` et renseignez une adresse HTTPS ou un lien relatif valide. Si le projet n'est pas public, laissez cette ligne commentée : le bouton n'apparaîtra pas dans la galerie.
5. Ajoutez le nom du fichier dans `projets.json` :

```json
[
  "guide-utilisateur.html",
  "portfolio.html",
  "mon-projet.html"
]
```

6. Transférez la nouvelle page, son image et `projets.json` sur votre hébergement. Rechargez l'accueil pour vérifier le résultat.

Il faut une virgule entre deux entrées, mais pas après la dernière. Pour réordonner les projets, déplacez les lignes du JSON. Pour retirer un projet de la galerie, retirez sa ligne ; pour le rendre inaccessible aussi par son adresse directe, retirez également son fichier du serveur.

### Les champs reconnus dans la page HTML

| Attribut conservé | Utilisation sur l'accueil |
| --- | --- |
| `data-project-title` | Titre du projet |
| `data-project-summary` | Courte description |
| `data-project-contribution` | Votre contribution |
| `data-project-image` | Image et texte alternatif, facultatifs |
| `data-project-image-fit="contain"` | Facultatif, sur l’image : affiche la capture entière dans la carte, sans recadrage |
| `data-project-label` | Libellé tel que « Projet personnel » |
| `data-project-tag` | Thème ou outil, un attribut par élément |
| `data-project-link` | Lien vers la réalisation, facultatif |

Le titre, le résumé et la contribution sont obligatoires. L’image est facultative : sans élément `data-project-image`, la galerie affiche une carte textuelle. Si une image est renseignée, son chemin doit rester valide et local au dossier `images/`. Modifiez aussi le `<title>` et la meta `description` de la page pour les onglets et les moteurs de recherche. Les titres, images et résumés des cartes proviennent du contenu visible des pages, pas d'une deuxième saisie.

Le navigateur ne peut pas énumérer les fichiers d'un répertoire sur un hébergement statique : `projets.json` est donc nécessaire. Un fichier non inscrit dans cette liste reste consultable directement mais n'apparaît pas sur l'accueil.

## Consulter le site sur votre ordinateur

L'accueil charge les pages avec `fetch`. Un double-clic sur `index.html` (`file://`) ne suffit pas ; utilisez un petit serveur local ou votre hébergement.

Avec Python installé, ouvrez un terminal dans ce dossier et lancez :

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Ouvrez ensuite `http://127.0.0.1:8080`. Pour arrêter le serveur, appuyez sur Ctrl+C. Vous pouvez aussi utiliser un serveur local intégré à votre éditeur.

## Transfert sur l'hébergement

Décompressez `site-projets.zip` et transférez son contenu dans le dossier public de votre hébergement. Le ZIP contient uniquement les fichiers nécessaires au site, avec les deux projets fournis. Vos futurs projets s'ajoutent ensuite directement sur le serveur.

Sans le ZIP, transférez `index.html`, `contact.html`, `contact.js`, `style.css`, `script.js`, `image-modal.js`, `projets.json` ainsi que les dossiers `projet`, `images` et `demo`. Conservez de préférence `README.md`, `modeles`, `apercus` et `hebergement` sur votre ordinateur. Le site n'a pas de compilation à effectuer.

Vous pouvez installer le site dans un sous-dossier : les chemins sont relatifs. Respectez les minuscules des noms de fichiers, notamment sur les serveurs Linux. Activez HTTPS dans votre hébergement et privilégiez SFTP ou FTPS pour le transfert. Conservez une copie locale avant chaque modification.

## Protections et limites

- Le bouton « Me contacter » ouvre `contact.html`. L’adresse n’est ni dans le HTML ni dans un lien `mailto` : elle est assemblée au clic par `contact.js`, puis peut être copiée. JavaScript est nécessaire pour la révéler. Aucun formulaire d’envoi, stockage de messages ou traitement SQL n’est utilisé.
- La page de contact contient la consigne `noindex, nofollow, nosnippet`. Le modèle de configuration Apache ajoute aussi `X-Robots-Tag` pour cette page, si cette configuration est installée. Ne bloquez pas son exploration dans `robots.txt`, sinon les moteurs ne pourront pas lire la consigne de non-indexation. Voir la [documentation Google sur noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
- La non-indexation et l’affichage au clic limitent la collecte basique, sans garantir la confidentialité : la page et le JavaScript restent publics et un scraper avancé peut récupérer l’adresse. Il ne s’agit pas d’un contrôle d’accès. Cela n’efface pas les copies d’une adresse qui aurait déjà été publiée.
- Les images des fiches s’ouvrent dans une modale native, fermable avec Échap, le bouton « Fermer » ou un clic à l’extérieur. Le focus revient au lien d’origine. Sans JavaScript, les liens ouvrent directement les images dans le même onglet.
- Aucune clé, aucun mot de passe, aucune dépendance distante, aucun suivi et aucun formulaire ne sont embarqués dans le site.
- La galerie crée ses éléments avec `textContent` : elle n'exécute pas le HTML des textes récupérés. Elle accepte uniquement des noms de fichiers prévus dans `projet/`, des images locales dans `images/` et des liens HTTP/HTTPS. Les protocoles tels que `javascript:` sont refusés.
- Une politique de sécurité du contenu (CSP) est présente dans chaque page : scripts et styles externes non autorisés sont bloqués, de même que les scripts intégrés directement dans le HTML. Gardez votre code dans les fichiers CSS et JS communs.
- Le modèle ne contient aucun accès d'administration. Toute page que vous déposez sur le serveur est un document publié : ne mettez pas de secrets ou de données confidentielles dans le HTML.
- Le code de vos propres pages HTML reste sous votre responsabilité. Le filtre de la galerie ne transforme pas une page HTML malveillante en page sûre. Vérifiez vos ajouts et utilisez des images de confiance.
- Sans JavaScript, les pages détaillées restent lisibles. L'accueil propose des liens de secours pour les deux projets livrés ; actualisez aussi sa section `noscript` si vous souhaitez offrir ce secours pour de nouveaux projets.

Sur Apache avec `mod_headers` et l'autorisation de modifier les en-têtes, le fichier `hebergement/apache.htaccess` peut être copié à la racine du site et renommé `.htaccess`. Il ajoute notamment une protection contre l'intégration du site dans une frame, qui ne peut pas être définie par la CSP en meta. Fusionnez ses règles avec un éventuel `.htaccess` existant : ne le remplacez pas aveuglément. Si votre hébergeur utilise un autre serveur, configurez les en-têtes dans son panneau. Le HTTPS et les en-têtes HTTP doivent être vérifiés sur votre hébergement final ; le code seul ne peut pas les activer partout.

## Personnaliser l'apparence

Les couleurs se trouvent dans `:root` au début de `style.css`. La police est locale au système, ce qui évite de charger des polices depuis un tiers. La mise en page passe en une colonne sur mobile et respecte la préférence de réduction des animations.

## Vérifications réalisées

Les captures du site sont dans `apercus/`. Les résultats des contrôles sont consignés dans `VERIFICATION.md`.
