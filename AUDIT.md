# Audit du site bilan-mdph.fr, rubrique par rubrique

Audit réalisé le 7 octobre 2026 sur la branche `pages-enfants` (état identique à `main`, commit `77be381`). Aucune page existante n'a été modifiée : ce document signale, il ne corrige rien.

## Méthode

- Rubriques : celles du menu latéral « Dans cette rubrique » (identique sur toutes les pages). Les rubriques « La MDPH, c'est quoi », « Les bilans » et « L'équipe » sont regroupées plus bas sous « Pages communes ».
- Nombre de mots : texte de la balise `<article>` (titre, chapô, corps, notes, cartes « Dans cette rubrique », signature), sans le menu, l'en-tête, le pied de page, le lecteur audio ni les boutons de partage. Les chiffres sont donc légèrement supérieurs au seul corps de texte.
- Liens internes : liens présents dans le contenu de l'article uniquement. Le menu latéral, le menu principal et le pied de page, identiques sur toutes les pages, sont exclus. Les liens de signature vers `/equipe` sont comptés, ce qui explique les 32 liens entrants de cette page.
- Accueil : présence d'un lien vers la page dans le contenu de `index.html` (hors menu principal et pied de page).
- Les fichiers `index (N).html` de la racine n'ont pas été pris en compte.

## Pages par rubrique

### La MDPH, c'est quoi (8 pages, 4617 mots au total)

| Page | Mots | Liens internes sortants | Liens internes entrants | Lien depuis le contenu de l'accueil | sitemap.xml | Index de recherche |
|---|---:|---:|---:|:-:|:-:|:-:|
| `/mdph-c-est-quoi` | 1248 | 17 | 2 | **non** | **non** | **non** |
| `/dossier-mdph-adulte` | 323 | 6 | 7 | oui | oui | oui |
| `/certificat-medical-mdph` | 303 | 5 | 8 | oui | oui | oui |
| `/projet-de-vie-mdph` | 342 | 4 | 8 | oui | oui | oui |
| `/pieces-a-joindre-dossier-mdph` | 241 | 8 | 8 | oui | oui | oui |
| `/checklist-dossier-mdph-2026` | 900 | 4 | 9 | oui | oui | oui |
| `/reforme-formulaire-mdph-2026` | 546 | 2 | 4 | oui | oui | oui |
| `/retentissement-fonctionnel` | 714 | 5 | 20 | oui | oui | oui |

### Enfants et adolescents (3 pages, 4570 mots au total)

| Page | Mots | Liens internes sortants | Liens internes entrants | Lien depuis le contenu de l'accueil | sitemap.xml | Index de recherche |
|---|---:|---:|---:|:-:|:-:|:-:|
| `/bilan-mdph-enfant` | 2185 | 17 | 2 | **non** | **non** | **non** |
| `/scolarisation-pps-aesh` | 1182 | 7 | 1 | **non** | **non** | **non** |
| `/passage-aeeh-aah-20-ans` | 1203 | 5 | 2 | **non** | **non** | **non** |

### Adultes (7 pages, 3569 mots au total)

| Page | Mots | Liens internes sortants | Liens internes entrants | Lien depuis le contenu de l'accueil | sitemap.xml | Index de recherche |
|---|---:|---:|---:|:-:|:-:|:-:|
| `/bilan-mdph-adulte` | 703 | 12 | 9 | oui | oui | oui |
| `/handicap-invisible-rqth` | 583 | 4 | 4 | oui | oui | oui |
| `/handicap-psychique-mdph` | 238 | 4 | 3 | oui | oui | oui |
| `/handicap-cognitif-mdph` | 607 | 6 | 3 | oui | oui | oui |
| `/autisme-adulte-mdph` | 159 | 3 | 3 | oui | oui | oui |
| `/tdah-adulte-mdph` | 601 | 5 | 4 | oui | oui | oui |
| `/tdah-rqth` | 678 | 5 | 4 | oui | oui | oui |

### Personnes âgées (4 pages, 4332 mots au total)

| Page | Mots | Liens internes sortants | Liens internes entrants | Lien depuis le contenu de l'accueil | sitemap.xml | Index de recherche |
|---|---:|---:|---:|:-:|:-:|:-:|
| `/mdph-apres-60-ans` | 1450 | 12 | 11 | oui | oui | **non** |
| `/bilan-neuropsychologique-personne-agee` | 1330 | 5 | 10 | oui | oui | **non** |
| `/handicap-vieillissant` | 859 | 4 | 3 | oui | oui | **non** |
| `/aidants-et-proches` | 693 | 3 | 3 | oui | oui | **non** |

### Les bilans (8 pages, 2832 mots au total)

| Page | Mots | Liens internes sortants | Liens internes entrants | Lien depuis le contenu de l'accueil | sitemap.xml | Index de recherche |
|---|---:|---:|---:|:-:|:-:|:-:|
| `/les-bilans` | 304 | 8 | 1 | **non** | **non** | **non** |
| `/bilan-a-distance` | 133 | 2 | 9 | oui | oui | oui |
| `/bilan-psychologique-mdph` | 382 | 6 | 9 | oui | oui | oui |
| `/bilan-neuropsychologique-mdph` | 452 | 5 | 12 | oui | oui | oui |
| `/bilan-orthopedagogique-mdph` | 621 | 5 | 1 | **non** | oui | **non** |
| `/bilan-en-deux-jours` | 215 | 4 | 4 | oui | oui | oui |
| `/questionnaire-complementaire-tnd` | 365 | 4 | 7 | oui | oui | oui |
| `/prix-bilan-mdph` | 360 | 2 | 8 | oui | oui | oui |

### L'équipe (4 pages, 949 mots au total)

| Page | Mots | Liens internes sortants | Liens internes entrants | Lien depuis le contenu de l'accueil | sitemap.xml | Index de recherche |
|---|---:|---:|---:|:-:|:-:|:-:|
| `/equipe` | 399 | 5 | 32 | **non** | oui | oui |
| `/lieux-de-consultation` | 179 | 0 | 5 | **non** | oui | oui |
| `/mentions-legales` | 193 | 1 | 3 | **non** | oui | oui |
| `/confidentialite` | 178 | 1 | 3 | **non** | oui | oui |

### Détail des liens entrants des pages Enfants et adolescents

- `/bilan-mdph-enfant` : reçoit des liens depuis `/scolarisation-pps-aesh`, `/mises-a-jour`
  ; envoie vers `/bilan-a-distance`, `/bilan-mdph-adulte`, `/certificat-medical-mdph`, `/equipe`, `/glossaire/aeeh`, `/glossaire/cdaph`, `/glossaire/cerfa-demande`, `/glossaire/cerfa-medical`, `/glossaire/cmi`, `/glossaire/mdph`, `/glossaire/pch`, `/glossaire/projet-de-vie`, `/passage-aeeh-aah-20-ans`, `/pieces-a-joindre-dossier-mdph`, `/prix-bilan-mdph`, `/projet-de-vie-mdph`, `/scolarisation-pps-aesh`
- `/scolarisation-pps-aesh` : reçoit des liens depuis `/bilan-mdph-enfant`
  ; envoie vers `/bilan-mdph-enfant`, `/equipe`, `/glossaire/cdaph`, `/glossaire/cerfa-demande`, `/glossaire/cerfa-medical`, `/glossaire/mdph`, `/passage-aeeh-aah-20-ans`
- `/passage-aeeh-aah-20-ans` : reçoit des liens depuis `/bilan-mdph-enfant`, `/scolarisation-pps-aesh`
  ; envoie vers `/equipe`, `/glossaire/aah`, `/glossaire/aeeh`, `/glossaire/cdaph`, `/glossaire/mdph`

## Constats sur la rubrique Enfants et adolescents

1. **Trois pages seulement**, contre sept pour les adultes et quatre pour les personnes âgées. En volume de texte, la rubrique n'est pourtant pas la plus petite (environ 4 600 mots, contre 3 600 pour la rubrique Adultes) : le déséquilibre porte sur le nombre de sujets traités et sur la visibilité, pas sur la longueur.
2. **Aucune page enfants n'est liée depuis le contenu de la page d'accueil.** L'accueil a une section entière consacrée aux plus de 60 ans (« Après 60 ans : troubles de la mémoire… ») et une section « Pages utiles pour commencer » orientée adultes ; aucune section ne s'adresse aux parents. Le mot « enfant » n'apparaît qu'une fois dans le contenu de l'accueil, au sens « enfant adulte d'un parent âgé ». Seul le menu principal mène à la rubrique.
3. **Les trois pages enfants sont absentes de `sitemap.xml` et de l'index de recherche du site (`content-index.json`)** : la recherche interne ne les trouve pas.
4. **Maillage interne faible** : `/bilan-mdph-enfant` ne reçoit que 2 liens depuis le contenu d'autres pages (`/scolarisation-pps-aesh` et `/mises-a-jour`), `/scolarisation-pps-aesh` un seul. Aucune page adulte ni aucune page « Les bilans » ne renvoie vers la rubrique enfants.
5. Les trois pages enfants ne figurent pas dans la liste des URL réécrites du fichier `.htaccess` (ni dans celle du flux de déploiement public). Vérification faite le 7 octobre 2026 sur la copie publique : `/bilan-mdph-enfant`, `/scolarisation-pps-aesh` et `/passage-aeeh-aah-20-ans` répondent bien (code 200), donc pas de lien cassé constaté, mais la liste du `.htaccess` est incomplète. Même remarque pour `/mdph-c-est-quoi`, `/les-bilans` et `/mises-a-jour`.

## Autres constats de visibilité

- `/mdph-c-est-quoi` et `/les-bilans` : absentes de `sitemap.xml` et de l'index de recherche, pas de lien depuis le contenu de l'accueil.
- Les quatre pages Personnes âgées et `/bilan-orthopedagogique-mdph` sont dans `sitemap.xml` mais absentes de l'index de recherche.
- Pages très courtes : `/bilan-a-distance/` (133 mots), `/autisme-adulte-mdph/` (159 mots), `/lieux-de-consultation` (179 mots), `/bilan-en-deux-jours` (215 mots), `/handicap-psychique-mdph` (238 mots).

## Mentions « réalisé par » ou « rédigé par » suivies d'un nom de praticien

### Dans le corps des pages ou les métadonnées

| Page | Formulation relevée |
|---|---|
| `/bilan-mdph-enfant` (section « Qui fait quoi au cabinet ») | « Les bilans psychologiques sont réalisés par Max Bouche… Les bilans neuropsychologiques sont réalisés par Sabrina Chmura… Cécile Fleurant… réalise des bilans en orthopédagogie » |
| `/les-bilans` (chapô et carte) | « Les bilans psychologiques sont réalisés par Max Bouche… neuropsychologiques… par Sabrina Chmura… en orthopédagogie… par Cécile Fleurant » ; carte : « réalisé par Cécile Fleurant » |
| `/bilan-psychologique-mdph` (chapô) | « Le bilan neuropsychologique est réalisé par Sabrina Chmura. Le bilan psychologique est réalisé par Max Bouche. » |
| `/bilan-neuropsychologique-mdph` (chapô) | même formulation |
| `/bilan-orthopedagogique-mdph` (chapô, balise `description`, Open Graph et JSON-LD) | « réalisé par Cécile Fleurant » ; « Le bilan neuropsychologique est réalisé par Sabrina Chmura, et le bilan psychologique par Max Bouche » |
| `/equipe` (section « Qui fait quoi ») | « Le bilan neuropsychologique est réalisé par Sabrina Chmura. Le bilan psychologique est réalisé par Max Bouche. » ; « Cécile Fleurant réalise des bilans en orthopédagogie » |

Le titre « Qui réalise les bilans et évaluations » (page `/equipe` et menu) n'est pas suivi d'un nom : non concerné. Les occurrences « rédigé par un médecin » (certificat médical) sont sans rapport.

### Signatures en bas de page

31 pages se terminent par « Rédigé par [nom], … Dernière révision le … » :

- Max Bouche (18 pages) : `/aidants-et-proches`, `/bilan-a-distance/`, `/bilan-mdph-adulte`, `/bilan-mdph-enfant`, `/bilan-psychologique-mdph`, `/certificat-medical-mdph`, `/dossier-mdph-adulte`, `/handicap-invisible-rqth`, `/handicap-psychique-mdph`, `/handicap-vieillissant`, `/les-bilans`, `/mdph-apres-60-ans`, `/mdph-c-est-quoi`, `/mises-a-jour`, `/passage-aeeh-aah-20-ans`, `/prix-bilan-mdph`, `/projet-de-vie-mdph`, `/scolarisation-pps-aesh`.
- Sabrina Chmura (12 pages) : `/autisme-adulte-mdph/`, `/bilan-en-deux-jours`, `/bilan-neuropsychologique-mdph`, `/bilan-neuropsychologique-personne-agee`, `/checklist-dossier-mdph-2026`, `/handicap-cognitif-mdph`, `/pieces-a-joindre-dossier-mdph`, `/questionnaire-complementaire-tnd`, `/reforme-formulaire-mdph-2026`, `/retentissement-fonctionnel`, `/tdah-adulte-mdph`, `/tdah-rqth`.
- Cécile Fleurant (1 page) : `/bilan-orthopedagogique-mdph`.

Les données structurées JSON-LD de ces pages déclarent aussi un auteur de type `Person` au nom du praticien.

## Mentions de bilan à distance, condensé, hybride ou téléconsultation

Aucune occurrence de « téléconsultation », « hybride » ni de « bilan condensé » dans les pages publiées, hormis le journal des mises à jour.

| Page | Ce qui est écrit | Type de bilan concerné |
|---|---|---|
| `/bilan-a-distance/` | « Les bilans se font en présentiel, au cabinet. La visioconférence n'est possible que pour le rendez-vous d'anamnèse d'un adulte » ; « Le bilan neuropsychologique se fait en présentiel, et non à distance. Il en va de même pour les autres rendez-vous du bilan. » | Tous les bilans, sans distinction |
| `/index.html` (section « Où et comment nous consultons » et carte) | « Les bilans se font en présentiel ; la visioconférence n'est possible que pour le rendez-vous d'anamnèse d'un adulte » | Tous |
| `/les-bilans` (carte) | même formulation | Tous |
| `/bilan-psychologique-mdph` (Déroulé) | « Comme pour le bilan neuropsychologique, le bilan se fait en présentiel » | **Bilan psychologique** |
| `/bilan-mdph-enfant`, `/bilan-mdph-adulte`, `/bilan-en-deux-jours`, `/bilan-neuropsychologique-personne-agee` | « Le bilan se fait en présentiel, en général sur une ou deux demi-journées » | Tous |
| `/lieux-de-consultation`, `/prendre-rendez-vous` | Visioconférence « uniquement pour le rendez-vous d'anamnèse d'un adulte » ; bouton « Prendre rendez-vous en visioconférence » | Anamnèse adulte |
| `/mises-a-jour` | « retrait de la formule condensée » ; « retrait des formules à distance et condensée » | Journal historique, sans incidence |
| `/mentions-legales` | « ne constituent en aucun cas une consultation à distance » | Formulaire de contact, sans rapport |

**Point à arbitrer** : le site dit partout que *tous* les bilans se font en présentiel, y compris le bilan psychologique (`/bilan-psychologique-mdph` le dit explicitement). Or la règle donnée pour ce chantier est que le bilan psychologique *peut* se faire à distance selon la situation, et que seul le bilan neuropsychologique est toujours en présentiel. Les nouvelles pages suivent la règle donnée pour ce chantier ; elles sont donc en décalage avec les pages existantes sur ce point, tant que celles-ci ne sont pas mises à jour. La page `/bilan-orthopedagogique-mdph` ne dit rien du présentiel ou de la distance (conforme).

## Incohérences et points à vérifier entre pages

1. **Bilan psychologique à distance** : voir le point à arbitrer ci-dessus.
2. **Référence étrangère** : `/bilan-orthopedagogique-mdph` écrit que l'orthopédagogie est « plus ancienne et mieux établie au Québec qu'en France ». Ses trois sources sont des sites non officiels (cahiers-pedagogiques.com, orthopedagogue-nord.com, aideor.com).
3. **Tarifs** : `/bilan-orthopedagogique-mdph` (section « Coût ») renvoie à « nous contacter directement », alors que les autres pages renvoient à la fiche Doctolib des praticiens et à `/prix-bilan-mdph`.
4. **Sources non officielles** : `/bilan-en-deux-jours` cite lesfurets.com (comparateur commercial) ; `/handicap-psychique-mdph` liste « CNSA, IGAS, CEAPSY » sans titre ni adresse.
5. **Titre de Cécile Fleurant** : « Clinicienne, orthopédagogue » sur `/equipe`, « enseignante spécialisée en orthopédagogie » sur `/bilan-mdph-enfant`, `/les-bilans` et `/bilan-orthopedagogique-mdph`. Sur `/equipe`, sa fonction inclut « constitution des dossiers MDPH », formulation qui peut laisser croire que le cabinet constitue le dossier à la place de la famille.
6. **Durée du bilan** : plusieurs pages annoncent « une ou deux demi-journées », alors que `NOTES-INTERNES.md` indique que le déroulé réel (nombre et durée des séances) reste à compléter par les praticiens.
7. **Titre de `/bilan-en-deux-jours`** : « Combien de temps pour obtenir un bilan » sur la page, « Délais d'un bilan neuropsychologique » dans l'index de recherche ; l'adresse (« en deux jours ») ne correspond plus au contenu.
8. **Montants de l'AEEH** sur `/bilan-mdph-enfant` : le tableau donne le complément seul (ex. 114,76 € pour la 1re catégorie, « en vigueur depuis le 1er avril 2026 »), alors que service-public.gouv.fr (vérifié le 1er juin 2026) affiche des montants allant de 267,77 € à 1 963,08 €, qui additionnent la base, le complément et le cas échéant la majoration. Les chiffres semblent concorder (153,01 + 114,76 = 267,77), mais la différence de présentation peut troubler une famille qui compare. À vérifier au moment de chaque revalorisation.
9. **Pages enfants et visibilité** : voir plus haut (accueil, sitemap, index de recherche, `.htaccess`).

## Ce qui n'a pas été vérifié

- Le rendu visuel des pages existantes n'a pas été contrôlé dans ce chantier.
- La validité de chaque source citée par les pages existantes n'a pas été vérifiée une à une, sauf la fiche AEEH de service-public.gouv.fr.
