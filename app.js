// Ajoute tes ressources dans cette liste. Exemple :
// { niveau: '6e', type: 'cours', titre: 'Les fractions', description: 'Cours au format PDF', fichier: 'ressources/6e-fractions.pdf' },
// Types possibles : 'cours', 'exercice', 'corrige'.
const ressources = [
  {
    niveau: '3e',
    type: 'cours',
    titre: 'Chapitre 2 — Homothéties et Thalès',
    description: 'Cours, exercices et activités sur Digipad',
    fichier: '3e-chapitre-2.html'
  },
  {
    niveau: '6e',
    type: 'cours',
    titre: 'Chapitre 2 — Angles',
    description: 'Cours, exercices et activités sur Digipad',
    fichier: '6e-chapitre-2.html'
  }
];

const liste = document.getElementById('resource-list');
const niveauSelect = document.getElementById('niveau');
const typeSelect = document.getElementById('type');
function afficherRessources() {
  const selection = ressources.filter(r =>
    (niveauSelect.value === 'tous' || r.niveau === niveauSelect.value) &&
    (typeSelect.value === 'tous' || r.type === typeSelect.value)
  );
  liste.replaceChildren();
  if (!selection.length) {
    const bloc = document.createElement('div');
    bloc.className = 'empty';
    const emoji = document.createElement('div'); emoji.className = 'emoji'; emoji.textContent = '📚';
    const titre = document.createElement('h3'); titre.textContent = 'Les ressources arrivent bientôt !';
    const texte = document.createElement('p'); texte.textContent = 'Aucun document publié pour cette sélection pour le moment.';
    bloc.append(emoji, titre, texte); liste.append(bloc); return;
  }
  selection.forEach(r => {
    const bloc = document.createElement('article'); bloc.className = 'resource';
    const info = document.createElement('div');
    const titre = document.createElement('h3'); titre.textContent = r.titre;
    const description = document.createElement('p'); description.textContent = `${r.niveau} · ${r.type} · ${r.description || ''}`;
    info.append(titre, description);
    const lien = document.createElement('a'); lien.href = r.fichier; lien.textContent = 'Ouvrir ↗'; lien.target = '_blank'; lien.rel = 'noopener noreferrer';
    bloc.append(info, lien); liste.append(bloc);
  });
}
niveauSelect.addEventListener('change', afficherRessources);
typeSelect.addEventListener('change', afficherRessources);
document.querySelectorAll('[data-level]').forEach(lien => lien.addEventListener('click', () => { niveauSelect.value = lien.dataset.level; afficherRessources(); }));
document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.getElementById('menu-toggle'); const nav = document.getElementById('navigation');
menu.addEventListener('click', () => { const ouvert = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(ouvert)); });
nav.querySelectorAll('a').forEach(lien => lien.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));
afficherRessources();
