/* MND — Le Plan · shared intelligence: smart step suggestions + messaging seed.
   Plain global script -> window.GX */
(function () {
  var TEMPLATES = {
    digital: { label: 'Lancement digital', match: ['boutique','site','ligne','web','digital','e-commerce','app','plateforme'],
      steps: [
        { name:'Cadrage & arborescence', type:'task', dur:5 },
        { name:'Design de l\'interface', type:'task', dur:8 },
        { name:'Intégration & développement', type:'task', dur:12 },
        { name:'Contenus & photographies', type:'task', dur:6 },
        { name:'Recette & tests', type:'task', dur:4 },
        { name:'Mise en ligne', type:'milestone', dur:0 } ] },
    lieu: { label: 'Ouverture de lieu', match: ['salon','flagship','temple','espace','atelier','local','boutique physique','façade'],
      steps: [
        { name:'Bail & permis', type:'task', dur:15 },
        { name:'Plans & enseigne', type:'task', dur:12 },
        { name:'Travaux & finitions', type:'task', dur:30 },
        { name:'Mobilier & signalétique', type:'task', dur:12 },
        { name:'Inauguration', type:'milestone', dur:0 } ] },
    produit: { label: 'Lancement produit', match: ['produit','gamme','huile','formule','cosmétique','soin','beurre','sérum','shampoing'],
      steps: [
        { name:'Sourcing des matières', type:'task', dur:12 },
        { name:'Formulation laboratoire', type:'task', dur:10 },
        { name:'Packaging & étiquettes', type:'task', dur:14 },
        { name:'Production lot pilote', type:'task', dur:12 },
        { name:'Gamme prête à la vente', type:'milestone', dur:0 } ] },
    campagne: { label: 'Campagne & communication', match: ['campagne','social','marketing','communication','lancement','publicité','contenu','presse'],
      steps: [
        { name:'Stratégie & message', type:'task', dur:6 },
        { name:'Shooting éditorial', type:'task', dur:8 },
        { name:'Production des contenus', type:'task', dur:10 },
        { name:'Programmation & diffusion', type:'task', dur:5 },
        { name:'Lancement de la campagne', type:'milestone', dur:0 } ] },
    formation: { label: 'Programme de formation', match: ['formation','académie','academie','cursus','diplôme','diplome','école','ecole','cohorte'],
      steps: [
        { name:'Conception du cursus', type:'task', dur:15 },
        { name:'Plateforme & supports', type:'task', dur:15 },
        { name:'Recrutement de la cohorte', type:'task', dur:10 },
        { name:'Première session', type:'task', dur:20 },
        { name:'Diplôme & certification', type:'milestone', dur:0 } ] },
    evenement: { label: 'Événement', match: ['événement','evenement','gala','couronnement','soirée','soiree','cérémonie','ceremonie','salon professionnel'],
      steps: [
        { name:'Concept & lieu', type:'task', dur:10 },
        { name:'Invitations & relations presse', type:'task', dur:12 },
        { name:'Logistique & prestataires', type:'task', dur:14 },
        { name:'Répétition générale', type:'task', dur:3 },
        { name:'Soirée', type:'milestone', dur:0 } ] }
  };
  var DEFAULT = { label: 'Plan générique', steps: [
    { name:'Cadrage & objectifs', type:'task', dur:5 },
    { name:'Préparation', type:'task', dur:10 },
    { name:'Exécution', type:'task', dur:15 },
    { name:'Revue & ajustements', type:'task', dur:5 },
    { name:'Livraison', type:'milestone', dur:0 } ] };

  function suggest(name) {
    var n = (name || '').toLowerCase();
    var best = null;
    Object.keys(TEMPLATES).forEach(function (k) {
      var t = TEMPLATES[k];
      if (t.match.some(function (w) { return n.indexOf(w) !== -1; })) best = t;
    });
    var tpl = best || DEFAULT;
    return { label: tpl.label, generic: !best, steps: tpl.steps.map(function (s) { return Object.assign({}, s, { on: true }); }) };
  }

  function channels(projects) {
    var base = [{ id: 'general', name: 'général', topic: 'Annonces de la maison' }];
    (projects || []).forEach(function (p) {
      base.push({ id: 'ch_' + p.id, name: slug(p.name), topic: p.name, project: p.id });
    });
    base.push({ id: 'studio', name: 'studio-création', topic: 'Photo, design, contenus' });
    return base;
  }
  function slug(s) { return (s || '').toLowerCase().split(' — ')[0].normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

  function seedMessages() {
    return {
      general: [
        { who:'brice', t:'2026-02-20T09:05', text:'Bonjour à toutes et à tous. La revue souveraine de la semaine est calée jeudi 10h.' },
        { who:'yeman', t:'2026-02-20T09:12', text:'Parfait. Je présenterai l\'avancement de la présence sociale et du podcast.' },
        { who:'naima', t:'2026-02-21T14:30', text:'Petit rappel : sourcing matières validé ✔ — on passe à la production du lot pilote.' },
        { who:'brice', t:'2026-02-23T08:40', text:'mi nyɔ́ ɖɛkpɛ. Belle semaine à la maison.' }
      ],
      ch_p1: [
        { who:'adjoa', t:'2026-02-18T11:00', text:'Étiquette « verre teinté » finalisée, je dépose le visuel dans Documents.' },
        { who:'koffi', t:'2026-02-19T16:20', text:'Reçu. Échantillons emballage en cours, retour fournisseur sous 3 jours.' },
        { who:'brice', t:'2026-02-22T10:05', text:'On vise la gamme prête pour le 20 mars. Tenable ?' },
        { who:'koffi', t:'2026-02-22T10:18', text:'Oui si le packaging est bouclé le 2 mars. Je suis dessus.' }
      ],
      ch_p2: [
        { who:'koffi', t:'2026-02-16T09:30', text:'Travaux démarrés. Gros oeuvre planifié à partir du 9 mars.' },
        { who:'brice', t:'2026-02-17T18:00', text:'Permis obtenu. On sécurise l\'enseigne avec Adjoa.' },
        { who:'adjoa', t:'2026-02-18T09:15', text:'Plans & enseigne avancent — proposition d\'ici fin de semaine.' }
      ],
      ch_p3: [
        { who:'yeman', t:'2026-02-20T13:00', text:'Shooting éditorial calé le 23 février avec Abibèko Studios.' },
        { who:'adjoa', t:'2026-02-21T10:40', text:'Je prépare le moodboard et la direction artistique.' }
      ],
      ch_p4: [
        { who:'yeman', t:'2026-02-19T15:10', text:'Cursus 3 niveaux : structure posée. Je commence les supports en mars.' }
      ],
      studio: [
        { who:'adjoa', t:'2026-02-21T17:05', text:'Banque d\'images mise à jour. Pensez à créditer Abibèko Studios.' },
        { who:'yeman', t:'2026-02-22T12:00', text:'Top. On garde la lumière chaude et sculptée, signature maison.' }
      ]
    };
  }

  window.GX = { suggest: suggest, channels: channels, seedMessages: seedMessages };
})();