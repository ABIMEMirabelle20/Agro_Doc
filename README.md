# 🌱 Détection intelligente des maladies des plantes par Deep Learning

**Application web intelligente pour la détection précoce des maladies des cultures à partir d'images**

**Deep Learning IndabaX Bénin 2026 — Hackathon**
**Équipe : ClimaLab**
**Membres : AGBO Vvien, DJOSSOU M. Benoît, EGUE Richnel, Maissiri Fatime, ABIME Mirabelle**
---

## 🌱 Détection précoce des maladies des plantes dans le contexte agricole béninois

Les maladies des plantes peuvent entraîner une diminution importante de la production agricole lorsqu'elles ne sont pas identifiées suffisamment tôt.

Dans de nombreuses situations, l'agriculteur doit se baser sur l'observation visuelle de ses cultures ou attendre l'intervention d'une personne disposant de connaissances agronomiques. Cette situation peut retarder la prise de décision et favoriser la propagation de certaines maladies.

Notre projet propose une **application web basée sur le Deep Learning et la vision par ordinateur**, capable d'analyser une image d'une plante et de fournir une première estimation de son état sanitaire.

> **Une photo pour détecter plus tôt, une information pour décider plus rapidement.**

---

# 1. Problématique

L'agriculteur peut rencontrer plusieurs difficultés lorsqu'une plante commence à présenter des symptômes :

* les premiers symptômes peuvent être difficiles à reconnaître ;
* une même plante peut présenter plusieurs maladies ou symptômes similaires ;
* l'accès à un spécialiste n'est pas toujours immédiat ;
* une mauvaise identification peut entraîner une mauvaise décision ;
* le temps entre l'apparition des symptômes et leur identification peut favoriser la propagation de la maladie.

Dans ce contexte, il existe un besoin d'outils simples permettant de fournir **une première information rapide sur l'état sanitaire d'une plante**.

Le problème que nous cherchons à résoudre est donc :

> **Comment aider un agriculteur à identifier rapidement une maladie visible sur une plante à partir d'une simple image, afin de faciliter une intervention précoce ?**

---

# 2. Objectif

## Objectif général

Développer une **application web intelligente capable d'analyser une image d'une plante et de détecter les signes visibles d'une maladie à l'aide d'un modèle de Deep Learning**, puis de fournir à l'utilisateur une première orientation sur le résultat obtenu.

## Objectifs spécifiques

Le projet vise à :

* analyser une image fournie par l'utilisateur ;
* identifier la maladie la plus probable parmi les classes couvertes par le modèle ;
* afficher le niveau de confiance de la prédiction ;
* présenter les symptômes associés à la maladie détectée ;
* fournir une première orientation à l'utilisateur ;
* proposer une interface simple et accessible depuis un navigateur web ;
* démontrer le potentiel du Deep Learning pour assister le diagnostic phytosanitaire.

---

# 3. Solution proposée

Nous développons une application web permettant à un agriculteur de soumettre une image de sa plante.

Le fonctionnement général est le suivant :

```text
📷 Image de la plante
        ↓
Prétraitement de l'image
        ↓
🧠 Modèle de Deep Learning
        ↓
Analyse des symptômes visibles
        ↓
🌱 Maladie probable
        ↓
📊 Niveau de confiance
        ↓
💡 Première orientation
```

L'objectif n'est pas de remplacer l'expertise d'un agronome.

L'application constitue **un outil d'aide au diagnostic**, permettant de détecter plus rapidement un problème potentiel et d'orienter l'utilisateur vers une action appropriée.

---

# 4. Utilisateurs cibles

### 🎯 Cible principale

* Petits et moyens agriculteurs ;
* Producteurs agricoles utilisant un smartphone.

### 🎯 Cibles secondaires

* Coopératives agricoles ;
* Groupements de producteurs ;
* Agents d'encadrement agricole ;
* Techniciens agricoles ;
* Structures d'accompagnement des agriculteurs ;
* Étudiants et acteurs de la recherche agricole.

---

# 5. Données

Le modèle utilise un jeu de données d'images de plantes présentant différentes classes de maladies et, lorsque cela est disponible, des plantes saines.

Les données utilisées dans le prototype sont issues de jeux de données publics destinés à la recherche en vision par ordinateur et en agriculture.

> **Limite importante :** les données d'entraînement ne représentent pas nécessairement toutes les conditions agricoles rencontrées au Bénin. Les différences de variété, de climat, de luminosité, de qualité des images et de pratiques agricoles peuvent influencer les performances du modèle.

Cette limite sera prise en compte dans les prochaines étapes du projet avec la constitution progressive d'un jeu de données mieux adapté au contexte béninois.

---

# 6. Approche Deep Learning

Le projet repose sur la **vision par ordinateur** et le **Deep Learning**.

L'image fournie par l'utilisateur est transmise au modèle qui apprend à distinguer différentes catégories correspondant aux états sanitaires présents dans le jeu de données.

Selon le modèle retenu, le système peut effectuer une classification de l'image ou une détection des zones présentant des symptômes.

Le résultat est ensuite transmis à l'interface web.

---

# 7. Prototype

Le prototype est une application web développée avec **React**.

L'utilisateur peut :

* 📤 importer une image depuis son appareil ;
* 📷 utiliser une image provenant d'une caméra lorsque cette fonctionnalité est disponible ;
* 📹 soumettre une vidéo pour une analyse expérimentale ;
* 🧠 lancer l'analyse par IA ;
* 🌱 consulter la maladie prédite ;
* 📊 consulter le score de confiance ;
* 💡 consulter une première orientation.

### Exemple de résultat

```text
Résultat de l'analyse

🌱 Culture : Tomate

⚠️ État détecté :
Maladie 

📊 Confiance :
92 %

🔎 Symptômes :
• Taches visibles sur les feuilles
• Décoloration
• Lésions caractéristiques

💡 Orientation :
Surveiller les plants voisins et demander
une confirmation auprès d'un agent agricole
avant toute intervention.
```

---

# 8. Fonctionnement de l'application

```text
                    UTILISATEUR
                        │
                        ▼
               📷 Image / Vidéo
                        │
                        ▼
              Application React
                        │
                        ▼
                API de prédiction
                        │
                        ▼
             🧠 Modèle Deep Learning
                        │
                        ▼
                Analyse de l'image
                        │
                        ▼
             Résultat + confiance
                        │
                        ▼
             💡 Aide à la décision
```

---

# 9. Périmètre du prototype

| Dans le périmètre                                              | Hors périmètre                                       |
| -------------------------------------------------------------- | ---------------------------------------------------- |
| Détection/classification des maladies couvertes par le dataset | Diagnostic de toutes les maladies existantes         |
| Analyse d'images de plantes                                    | Remplacement d'un agronome                           |
| Prédiction avec score de confiance                             | Garantie d'un diagnostic certain                     |
| Interface web React                                            | Application mobile native complète                   |
| Analyse expérimentale de vidéos                                | Surveillance continue des champs                     |
| Affichage d'une première orientation                           | Prescription automatique de produits phytosanitaires |
| Évaluation du modèle                                           | Déploiement à grande échelle                         |

---

# 10. Pourquoi ce projet ?

Notre ambition n'est pas simplement de créer un modèle de classification d'images.

Nous voulons explorer comment **l'intelligence artificielle peut rendre une première information phytosanitaire plus accessible**, notamment dans les situations où l'agriculteur ne dispose pas immédiatement d'une expertise spécialisée.

Le projet s'inscrit ainsi dans une logique :

**Problème agricole → Intelligence artificielle → Prototype → Évaluation → Amélioration pour le contexte béninois**

---

# 11. Limites du prototype

Le prototype développé pendant le hackathon présente plusieurs limites :

* nombre limité de cultures et de maladies ;
* dépendance à la qualité de l'image ;
* performances potentiellement différentes selon les conditions réelles ;
* données d'entraînement pas encore suffisamment représentatives de toutes les cultures béninoises ;
* absence de validation systématique par des experts agronomes ;
* le résultat de l'IA ne constitue pas un diagnostic définitif.

Ces limites sont importantes et doivent être prises en compte avant toute utilisation réelle à grande échelle.

---

# 12. Prochaines étapes

Après le hackathon, plusieurs améliorations sont envisagées :

### 🇧🇯 1. Adapter le modèle au contexte béninois

Constituer progressivement un dataset local contenant des images prises dans différentes zones agricoles du Bénin.

### 🌱 2. Étendre les cultures couvertes

Ajouter progressivement les principales cultures ciblées par les utilisateurs.

### 🧠 3. Améliorer le modèle

Explorer le fine-tuning, l'augmentation des données et différents modèles de Deep Learning afin d'améliorer la robustesse du système.

### 📱 4. Développer une version mobile

Permettre à l'agriculteur de prendre directement une photo dans son champ.

### 🌦️ 5. Ajouter des données environnementales

À terme, combiner l'analyse d'image avec d'autres informations telles que :

* température ;
* humidité ;
* pluviométrie ;
* localisation ;
* historique des maladies.

L'objectif serait alors d'aller au-delà de la simple analyse d'image et de développer un **système d'aide à l'évaluation du risque phytosanitaire**.

---

# 13. Technologies utilisées

React → Interface utilisateur
       ↓
API Python → Communication avec le modèle
       ↓
TensorFlow/Keras → Inférence Deep Learning
       ↓
best_model.keras → Prédiction de la maladie
       ↓
Résultat → Classe + confiance + recommandation
---

# 14. Structure du projet

```text
plant-disease-ai/
│
├── frontend/
│   └── React application
│
├── backend/
│   └── API de prédiction
│
├── model/
│   └── modèle de Deep Learning
│
├── data/
│   └── documentation des données
│
├── notebooks/
│   └── expérimentation
│
├── docs/
│   └── documentation du projet
│
├── requirements.txt
├── .gitignore
└── README.md
```

---

# 15. Installation

### Cloner le dépôt

```bash
git clone https://github.com/ABIMEMirabelle20/Agro_Doc
cd plant-disease-ai
```

### Installer les dépendances

```bash
pip install -r requirements.txt
```

### Lancer le backend

```bash
[commande à compléter]
```

### Lancer le frontend

```bash
npm install
npm run dev
```

---

# 16. Équipe

**Deep Learning IndabaX Bénin 2026 — Hackathon**
👨🏾‍💻 AGBO Vvien
👨🏾‍💻 DJOSSOU  Benoît
👨🏾‍💻 EGUE Richnel
👩🏾‍💻 Maissiri Fatime
👨🏾‍💻 ABIME Mirabelle

---

# 17. Vision

> **Rendre l'intelligence artificielle accessible aux acteurs agricoles afin de contribuer à une détection plus précoce des problèmes phytosanitaires et à une agriculture plus résiliente.**

---

## ⚠️ Avertissement

Cette application est un **prototype de recherche développé dans le cadre du Deep Learning IndabaX Bénin 2026**.

Les résultats fournis par le modèle sont des prédictions automatiques et ne remplacent pas l'avis d'un agronome ou d'un professionnel compétent.

---

## 📄 Licence

[À définir]
