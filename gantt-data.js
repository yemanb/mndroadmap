/* MND — Gantt sample plan data + date helpers.
   Loaded as a plain global script -> window.GANTT */
(function () {
  // Illustrative "today" so the demo shows a mix of done / in-progress / future.
  var TODAY = '2026-02-23';

  var OWNERS = {
    brice:  { id: 'brice',  name: 'Brice A.',  role: 'Direction',   color: 'var(--indigo-600)' },
    yeman:  { id: 'yeman',  name: 'Yéman A.',  role: 'Marque',      color: 'var(--copper-500)' },
    naima:  { id: 'naima',  name: 'Naïma K.',  role: 'Opérations',  color: 'var(--indigo-400)' },
    koffi:  { id: 'koffi',  name: 'Koffi D.',  role: 'Production',   color: 'var(--copper-700)' },
    adjoa:  { id: 'adjoa',  name: 'Adjoa T.',  role: 'Studio',      color: 'var(--obsidian-400)' }
  };

  // type: goal | project | milestone | task | subtask
  // status mirrors kanban column; progress 0..100; prio: high|medium|low
  var ITEMS = [
    { id:'g1', type:'goal', name:'Lancement Souverain 2026', parent:null },

    // ---- Projet 1 — Gamme Huile Couronne ----
    { id:'p1', type:'project', name:'Gamme — Huile Couronne', parent:'g1', owner:'brice' },
    { id:'t1', type:'task', name:'Sourcing matières premières', parent:'p1', owner:'naima', prio:'high',
      start:'2026-01-05', end:'2026-01-23', progress:100, deps:[] },
    { id:'s1', type:'subtask', name:'Fournisseurs Bénin (moringa, karité)', parent:'t1', owner:'naima', prio:'medium',
      start:'2026-01-05', end:'2026-01-14', progress:100, deps:[] },
    { id:'s2', type:'subtask', name:'Contrôle qualité matières', parent:'t1', owner:'koffi', prio:'medium',
      start:'2026-01-15', end:'2026-01-23', progress:100, deps:['s1'] },
    { id:'t2', type:'task', name:'Formulation laboratoire', parent:'p1', owner:'adjoa', prio:'high',
      start:'2026-01-26', end:'2026-02-06', progress:100, deps:['t1'] },
    { id:'m1', type:'milestone', name:'Formules validées', parent:'p1', owner:'brice', prio:'high',
      start:'2026-02-06', end:'2026-02-06', progress:100, deps:['t2'] },
    { id:'t3', type:'task', name:'Packaging — verre teinté + capsule cuivre', parent:'p1', owner:'koffi', prio:'medium',
      start:'2026-02-09', end:'2026-03-02', progress:62, deps:['m1'] },
    { id:'s3', type:'subtask', name:'Design étiquette', parent:'t3', owner:'adjoa', prio:'medium',
      start:'2026-02-09', end:'2026-02-18', progress:100, deps:['m1'] },
    { id:'s4', type:'subtask', name:'Échantillons emballage', parent:'t3', owner:'koffi', prio:'low',
      start:'2026-02-19', end:'2026-03-02', progress:30, deps:['s3'] },
    { id:'t4', type:'task', name:'Production lot pilote', parent:'p1', owner:'brice', prio:'high',
      start:'2026-03-03', end:'2026-03-20', progress:0, deps:['t3'] },
    { id:'m2', type:'milestone', name:'Gamme prête à la vente', parent:'p1', owner:'brice', prio:'high',
      start:'2026-03-20', end:'2026-03-20', progress:0, deps:['t4'] },

    // ---- Projet 2 — Flagship, Le Temple du Soin ----
    { id:'p2', type:'project', name:'Flagship — Le Temple du Soin', parent:'g1', owner:'brice' },
    { id:'t5', type:'task', name:'Bail & permis (Cotonou)', parent:'p2', owner:'brice', prio:'high',
      start:'2026-01-12', end:'2026-02-13', progress:100, deps:[] },
    { id:'t6', type:'task', name:'Architecture & travaux', parent:'p2', owner:'koffi', prio:'high',
      start:'2026-02-16', end:'2026-04-10', progress:14, deps:['t5'] },
    { id:'s5', type:'subtask', name:'Plans & enseigne', parent:'t6', owner:'adjoa', prio:'medium',
      start:'2026-02-16', end:'2026-03-06', progress:45, deps:['t5'] },
    { id:'s6', type:'subtask', name:'Gros œuvre & finitions', parent:'t6', owner:'koffi', prio:'high',
      start:'2026-03-09', end:'2026-04-10', progress:0, deps:['s5'] },
    { id:'t7', type:'task', name:'Mobilier & signalétique', parent:'p2', owner:'naima', prio:'medium',
      start:'2026-04-06', end:'2026-04-24', progress:0, deps:['s5'] },
    { id:'m3', type:'milestone', name:'Inauguration du flagship', parent:'p2', owner:'brice', prio:'high',
      start:'2026-04-30', end:'2026-04-30', progress:0, deps:['t6','t7','m2'] },

    // ---- Projet 3 — Présence Souveraine ----
    { id:'p3', type:'project', name:'Présence Souveraine', parent:'g1', owner:'yeman' },
    { id:'t8', type:'task', name:'Identité sociale @maison.mnd', parent:'p3', owner:'yeman', prio:'medium',
      start:'2026-02-02', end:'2026-02-20', progress:100, deps:[] },
    { id:'t9', type:'task', name:'Shooting éditorial (Abibèko)', parent:'p3', owner:'yeman', prio:'high',
      start:'2026-02-23', end:'2026-03-06', progress:8, deps:['t8'] },
    { id:'t10', type:'task', name:'RACINES — podcast (3 épisodes)', parent:'p3', owner:'yeman', prio:'low',
      start:'2026-03-09', end:'2026-04-17', progress:0, deps:['t9'] },
    { id:'t11', type:'task', name:'Campagne de lancement', parent:'p3', owner:'adjoa', prio:'high',
      start:'2026-04-20', end:'2026-05-15', progress:0, deps:['t10','m2'] },

    // ---- Projet 4 — MND Académie ----
    { id:'p4', type:'project', name:'MND Académie', parent:'g1', owner:'yeman' },
    { id:'t12', type:'task', name:'Cursus 3 niveaux — contenu', parent:'p4', owner:'yeman', prio:'medium',
      start:'2026-03-02', end:'2026-04-03', progress:0, deps:['m1'] },
    { id:'t13', type:'task', name:'Plateforme en ligne', parent:'p4', owner:'koffi', prio:'medium',
      start:'2026-04-06', end:'2026-05-08', progress:0, deps:['t12'] },
    { id:'t14', type:'task', name:'Première cohorte — Initiation', parent:'p4', owner:'naima', prio:'high',
      start:'2026-05-11', end:'2026-06-12', progress:0, deps:['t13','m3'] },
    { id:'m4', type:'milestone', name:'Diplôme & certification scellés', parent:'p4', owner:'brice', prio:'high',
      start:'2026-06-26', end:'2026-06-26', progress:0, deps:['t14'] }
  ];

  // ---- Date helpers (UTC-noon to dodge timezone drift) ----
  function parse(iso) { var p = iso.split('-'); return Date.UTC(+p[0], +p[1]-1, +p[2], 12); }
  function toISO(ms) { var d = new Date(ms); return d.getUTCFullYear()+'-'+String(d.getUTCMonth()+1).padStart(2,'0')+'-'+String(d.getUTCDate()).padStart(2,'0'); }
  var DAY = 86400000;
  function dayDiff(aISO, bISO) { return Math.round((parse(bISO)-parse(aISO))/DAY); }
  function addDays(iso, n) { return toISO(parse(iso)+n*DAY); }
  function dow(iso) { return new Date(parse(iso)).getUTCDay(); } // 0=Sun

  window.GANTT = { TODAY:TODAY, OWNERS:OWNERS, ITEMS:ITEMS, parse:parse, toISO:toISO, DAY:DAY, dayDiff:dayDiff, addDays:addDays, dow:dow };
})();
