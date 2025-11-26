# 🚀 AEENI Website - Refonte 2025

Le site officiel de l'**Association des Étudiants de l'École Nationale d'Informatique (ENI)** - Madagascar.

> **Un voyage de 4 ans en code** : De ma première version à cette nouvelle UI époustouflante, découvrez comment j'ai fait évoluer ce projet ! 

## 📖 À Propos

L'AEENI est l'association regroupant les étudiants en informatique de l'École Nationale d'Informatique avec des campus à **Fianarantsoa** et **Tuléar**. Ce site met en avant :

- 🏆 Les compétitions et événements
- 👥 La communauté et les clubs
- 🛍️ Le merchandise officiel
- 🤝 Les partenariats stratégiques
- 📱 Notre parcours extraordinaire

## 🎨 Design & Technologie

### Stack Technique
- **HTML5** - Structure sémantique moderne
- **CSS3** - Animations fluides et design responsif
- **JavaScript** - Interactivité et animations
- **GSAP 3.12** - Animations avancées et parallaxe
- **Font Awesome 6.4** - Iconographie
- **Google Fonts** - Typographie premium (Montserrat, Poppins, Space Mono)

### Palette Couleurs (2024)
- **Grenat Profond** : `#a41e34` - Couleur principale
- **Orange Chaud** : `#ff7a3d` - Accent dynamique
- **Arrière-plan Sombre** : `#4a1422` - Héro section
- **Blanc Pur** : Pour le contraste

### Caractéristiques UI/UX

✨ **Animations Fluides**
- Scroll animations avec Intersection Observer
- GSAP pour les entrées de page
- Floating cards et éléments interactifs
- Hover effects sophistiqués

📱 **Responsive Design**
- Mobile-first approach
- Breakpoints optimisés
- Navigation fluide sur tous les appareils

🎯 **Performance**
- Lazy loading des images
- CSS optimisé
- Animations GPU-accelerated
- Backdrop blur effects modernes

## 🗂️ Structure du Projet

```
AEENI-website/
├── index.css               # Fichier de styling
├── index.html              # Page principale
├── image/                  # Assets et images
│   ├── dev.jpg
│   ├── club3.png
│   ├── ENI.jpg
│   ├── logos/
│   └── ...
└── README.md              # Ce fichier
```

## 📑 Sections du Site

### Hero Section
Accueil dynamique avec animations parallaxe et floating cards presentant Innovation, Excellence et Communauté.

### Actualités
Grille Bento showcasing les projets en cours :
- 🚀 Compétition DEVHUNT 2024
- 🏀 Tournoi Basketball SMATCHIN
- ⭐ Rising Newbies Contest

### Parcours
Timeline interactive montrant l'évolution de l'AEENI :
- Une école prestigieuse
- Clubs diversifiés
- Partenariats solides
- Compétitions légendaires
- L'élite nationale

### Merchandise
Collection exclusive de produits officiels AEENI.

### Partenaires
Grid des collaborateurs et clubs associés.

## 🎯 Mon Évolution en 3 Ans

| Aspect | Avant | Maintenant |
|--------|-------|-----------|
| **Design** | Basique | Moderne & sophistiqué |
| **Animations** | Statique | Fluides avec GSAP |
| **Palette** | Basique | Grenat + Orange premium |
| **Performance** | Standard | Optimisée |
| **UX** | Simple | Interactive & immersive |
| **Responsif** | Basique | Parfaitement adapté |

## 🚀 Comment Utiliser

1. **Cloner le repository**
```bash
git clone https://github.com/DylanMickael/AEENI-website.git
cd AEENI-website
```

2. **Ouvrir dans un navigateur**
```bash
# Simplement ouvrir index.html
open index.html
```

3. **Serveur local (optionnel)**
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server
```

## 🔗 Liens Importants

- 📱 **Facebook** : [AEENI Community](https://www.facebook.com/groups/162416697294083)
- 📧 **Email** : aeeni.contact@gmail.com
- 🏫 **ENI Fianarantsoa** : [univ-fianar.mg](https://m.univ-fianar.mg/?page_id=472)

## 🤝 Partenaires Principaux

- ENI - École Nationale d'Informatique
- Arato
- Kalybot
- Mahefa Numeric
- NG Academy
- WeCours
- Akata Goavana
- Clubs internes (C2E, C3LF, C4M, Cyber)

## 📱 Responsive Breakpoints

- **Desktop** : 1400px+
- **Tablet** : 768px - 1399px
- **Mobile** : < 768px

## 🛠️ Technologies Utilisées

```javascript
// Animations GSAP
gsap.from('.hero-title', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

// Scroll animations avec Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});
```

## 💡 Améliorations Futures

- [ ] Intégration avec CMS
- [ ] Blog des actualités
- [ ] Galerie photo interactive
- [ ] Système de commentaires
- [ ] Analytics avancées
- [ ] Dark mode toggle
- [ ] Multilangue (FR/EN)

## 📄 Licence

© 2025 AEENI - Association des Étudiants de l'École Nationale d'Informatique.
Tous droits réservés.

---

**Créé par** : [Dylan Mickael](https://github.com/DylanMickael)  
**Dernière mise à jour** : 2025  
**Repository** : [DylanMickael/AEENI-website](https://github.com/DylanMickael/AEENI-website)

> *De 2021 à 2024 : L'évolution d'un développeur passionné* 🚀
