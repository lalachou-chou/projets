# Vérifications — 26 octobre 2026

## Dates et page de contact — 30 octobre 2026

- IA locale datée de septembre 2026 ; GTFS-RT, AtelierPhoto, outils professionnels et portfolio datés d’octobre 2026. Dates de Dofus et du jeu conservées.
- Tous les boutons de contact pointent vers `contact.html`, y compris dans le modèle et la démonstration. Liens locaux vérifiés.
- Page « Clara Matarasso · France » avec consigne `noindex, nofollow, nosnippet`. Configuration Apache facultative complétée avec `X-Robots-Tag` pour cette page ; son application sur un hébergement n’a pas été testée.
- Adresse absente du HTML initial et des anciens liens mailto. Révélation au clic, copie au presse-papiers et masquage au rechargement vérifiés dans le navigateur. Aucun envoi d’e-mail effectué.
- Affichage vérifié à 1 280 et 320 pixels, sans débordement ni erreur JavaScript. Syntaxe de `contact.js` vérifiée.
- La page reste publique : non-indexation et adresse assemblée au clic ne garantissent pas une protection contre les scrapers. Aucun fichier robots.txt ne bloque la lecture de la consigne noindex.
- Aucun commit Git ni déploiement effectué.

## Liens GitHub, contact et modales — 30 octobre 2026

- Quatre liens GitHub vérifiés sur l’accueil et les fiches : Dofus, GTFS-RT, AtelierPhoto et portfolio. Sept projets chargés.
- « Sélection personnelle » remplacé par « Me contacter » avec `mailto:…`, sur les pages du site et le modèle. Aucun formulaire, serveur d’envoi ni stockage ajouté ; aucun traitement SQL côté site.
- Images des fiches et liens d’agrandissement équipés d’une modale native. Ouverture depuis l’image et la légende, fermeture par bouton, Échap et clic extérieur vérifiées ; retour du focus et maintien du clavier dans la modale vérifiés.
- Capture paysage, storyboard et image verticale vérifiés ; modale et en-tête contrôlés à 320 pixels sans débordement. Fiche sans image vérifiée sans modale créée.
- Syntaxe JavaScript, liens locaux et conservation des CSP vérifiés. Aucun script intégré, gestionnaire HTML d’événement ou clé privée ajouté. Aucun avertissement ni erreur JavaScript relevé pendant les essais.
- Le contact a été vérifié par son lien, sans déclencher de messagerie ni envoyer d’e-mail. Les adresses GitHub ont été comparées aux adresses fournies ; les dépôts n’ont pas été audités.
- Ancien guide de démonstration : liens vers sa fiche supprimée remplacés par un retour à l’accueil. Portfolio ajouté aux liens de secours sans JavaScript.
- Aperçu : `apercus/modale-images.png`. `image-modal.js` ajouté à la liste des fichiers à transférer dans le README.
- Aucun commit Git ni déploiement effectué.

## Ajout des outils professionnels — 30 octobre 2026

- Page `projet/outils-travail.html` ajoutée en sixième position, sans image ni lien vers les outils internes ; lien de secours ajouté à l’accueil.
- Galerie adaptée aux images facultatives : six cartes affichées, dont cinq avec image et une carte textuelle. Une image renseignée conserve les contrôles de validité de son URL.
- Syntaxe JavaScript, JSON, champs requis et ressources locales des sept pages vérifiés.
- Galerie et fiche consultées à 1 280 et 320 pixels ; aucun débordement horizontal ni erreur JavaScript relevés, navigation vers la fiche et retour vérifiés.
- Aperçu enregistré dans `apercus/outils-travail.png`. Documentation des champs facultatifs mise à jour.
- Aucun déploiement ni commit Git effectué.

## Ajout d’AtelierPhoto — 30 octobre 2026

- Page `projet/atelier-photo.html` ajoutée en cinquième position dans `projets.json`, avec capture agrandissable et lien de secours sans JavaScript sur l’accueil.
- JSON, champs requis des cinq projets et existence des ressources locales vérifiés.
- Galerie et fiche consultées à 1 280 et 320 pixels ; cinq projets affichés dans l’ordre prévu, capture chargée et aucun débordement horizontal.
- Navigation accueil → fiche AtelierPhoto → accueil vérifiée ; aucune erreur ni alerte JavaScript relevée.
- Aperçu enregistré dans `apercus/atelier-photo.png`.
- Vérifications de la présentation uniquement : l’application et ses benchmarks n’ont pas été testés. Aucun déploiement ni commit Git effectué.

## Ajout du jeu vidéo — 30 octobre 2026

- Page `projet/jeu-video.html` ajoutée en quatrième position dans la liste actuelle de quatre projets ; liens de secours sans JavaScript synchronisés avec cette liste.
- Première capture utilisée en couverture ; seconde capture placée dans la section bonus sur les débuts du jeu. Liens disponibles pour ouvrir chaque image en grand.
- JSON, champs requis des quatre projets et existence des ressources locales vérifiés.
- Galerie et fiche consultées à 1 280 et 320 pixels ; aucun débordement horizontal, deux images chargées et navigation accueil → fiche → capture bonus → fiche → accueil vérifiée.
- Aucune erreur ni alerte JavaScript relevée. Aperçu enregistré dans `apercus/jeu-video.png`.
- Statut « en développement » et future sortie Steam mentionnés sans lien fictif. Vérifications de la présentation uniquement ; aucun déploiement ni commit Git effectué.

## Ajout du projet GTFS-RT — 30 octobre 2026

- Page `projet/gtfs-rt.html` ajoutée en troisième position dans `projets.json`, avec la capture fournie et un lien de secours sans JavaScript sur l’accueil.
- Syntaxe JavaScript, JSON, champs requis des cinq projets et existence des ressources locales vérifiés.
- Galerie et fiche consultées à 1 280 et 320 pixels ; cinq cartes chargées, capture affichée sans recadrage et aucun débordement horizontal.
- Navigation accueil → fiche GTFS-RT → accueil vérifiée ; aucune erreur ni alerte JavaScript relevée.
- Aperçu enregistré dans `apercus/gtfs-rt.png`.
- Vérifications de la présentation uniquement : l’application GTFS-RT elle-même n’a pas été fournie ni testée. Aucun déploiement ni commit Git effectué.

## Ajout de l’IA en local — 30 octobre 2026

- Page `projet/ia-locale.html` ajoutée en deuxième position dans `projets.json`, avec la capture Open WebUI et le lien vers le projet tiers mentionné dans le récit.
- Syntaxe JavaScript, JSON, champs requis des quatre projets et existence des ressources locales vérifiés.
- Galerie et fiche consultées dans le navigateur à 1 280 et 320 pixels ; quatre cartes chargées, capture affichée sans recadrage et aucun débordement horizontal à 320 pixels.
- Navigation accueil → fiche IA locale → accueil vérifiée ; aucune erreur ni alerte JavaScript relevée.
- Aperçu enregistré dans `apercus/ia-locale.png`.
- Vérifications locales uniquement ; aucun déploiement ni commit Git effectué.

## Ajout de l’overlay Dofus — 30 octobre 2026

- Page `projet/dofus-resource-assistant.html` ajoutée en première position dans `projets.json`, avec la capture fournie et les liens GitHub et YouTube.
- Syntaxe JavaScript, JSON, champs requis des trois projets et existence des ressources locales vérifiés.
- Galerie et fiche consultées dans le navigateur à 1 280 et 320 pixels ; trois cartes chargées, capture entière et aucun débordement horizontal à 320 pixels.
- Navigation accueil → fiche Dofus → accueil vérifiée ; aucune erreur ni alerte JavaScript relevée.
- Aperçu de la galerie enregistré dans `apercus/galerie-dofus.png`.
- Vérifications locales uniquement ; aucun déploiement ni commit Git effectué.

## Résultats

- Syntaxe JavaScript vérifiée avec `node --check script.js`.
- Cinq pages HTML vérifiées : liens locaux existants, champs obligatoires des projets présents, CSP incluse et absence de gestionnaires d'événements ou de scripts intégrés directement au HTML.
- Trois fichiers SVG analysés avec un parseur XML.
- Galerie inspectée dans le navigateur intégré, en largeurs de 1 440, 390 et 320 pixels. Absence de débordement horizontal vérifiée aux trois largeurs sur l'accueil ; page détaillée également vérifiée à 320 pixels.
- Images chargées correctement et aucune erreur ni alerte JavaScript relevée lors du contrôle initial de la galerie.
- Navigation réelle : accueil → page détaillée → réalisation de démonstration → accueil ; seconde page détaillée également consultée.
- Accès clavier : la première tabulation atteint le lien d'évitement « Aller aux projets ».
- Ajout temporaire d'une troisième page et inscription dans `projets.json` : nouveau projet visible dans l'ordre attendu, sans modification de l'accueil ni du script.
- Texte contenant des balises échappées : affiché comme du texte, sans création d'élément HTML dans la carte.
- Lien de réalisation utilisant `javascript:` : non affiché.
- Fichier HTML absent dans la liste : les autres projets restent visibles et un message accompagné de « Réessayer » apparaît.
- Après restauration de la liste, « Réessayer » recharge les deux projets et retire le message. Les fichiers temporaires ont été supprimés.

## Livrables visuels

Captures réelles dans `apercus/ordinateur.png`, `apercus/mobile.png` et `apercus/page-projet.png`.

## Limites

Contrôles effectués localement dans le navigateur intégré, sans audit exhaustif d'accessibilité ni test sur tous les navigateurs. Le comportement sans JavaScript repose sur des pages détaillées statiques et des liens de secours dans l'accueil. Le serveur de production n'a pas été configuré : HTTPS et les en-têtes HTTP Apache facultatifs restent à vérifier chez l'hébergeur. Aucun site n'a été publié.
