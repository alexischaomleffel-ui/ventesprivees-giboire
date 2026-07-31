// Données de démonstration — Mini SaaS Groupe Giboire
// Programmes immobiliers du Grand Ouest + quelques villes nationales.
// Les lots sont réputés "synchronisés depuis UnLatch".
(function () {
  const PROGRAMS = [
    { id: "thabor",   name: "Les Terrasses du Thabor", city: "Rennes",     dept: "35", lat: 48.1188, lng: -1.6631, delivery: "T2 2027", arch: "Atelier Loyer" },
    { id: "georges",  name: "Carré Saint-Georges",     city: "Rennes",     dept: "35", lat: 48.1093, lng: -1.6743, delivery: "T4 2026", arch: "Studio Kerné" },
    { id: "chalands", name: "Le Clos des Chalands",    city: "Nantes",     dept: "44", lat: 47.2081, lng: -1.5461, delivery: "T3 2027", arch: "Agence Rivage" },
    { id: "rance",    name: "L'Écrin de la Rance",     city: "Saint-Malo", dept: "35", lat: 48.6493, lng: -2.0257, delivery: "Livrable", arch: "Atelier Loyer" },
    { id: "kerlann",  name: "Les Jardins de Kerlann",  city: "Vannes",     dept: "56", lat: 47.6587, lng: -2.7603, delivery: "T1 2027", arch: "Studio Kerné" },
    { id: "helios",   name: "Villa Hélios",            city: "La Baule",   dept: "44", lat: 47.2861, lng: -2.3906, delivery: "T2 2028", arch: "Agence Rivage" },
    { id: "iris",     name: "Le Domaine des Iris",     city: "Angers",     dept: "49", lat: 47.4739, lng: -0.5518, delivery: "T4 2026", arch: "Atelier Loyer" },
    { id: "prisme",   name: "Le Prisme",               city: "Bordeaux",   dept: "33", lat: 44.8560, lng: -0.5680, delivery: "T3 2027", arch: "Studio Kerné" },
    { id: "belleville", name: "Résidence Belleville",  city: "Paris 19e",  dept: "75", lat: 48.8720, lng: 2.3840,  delivery: "T1 2028", arch: "Agence Rivage" }
  ];

  // status: dispo | optionne | vendu ; featured = mis en avant sur le site public
  const LOTS = [
    { id: "L-thabor-B12", prog: "thabor",  lot: "B12", type: "T3", surface: 67, floor: 3, orient: "Sud-Ouest", balcony: 9,  price: 312000, status: "dispo",    avail: "Immédiate",   featured: true,  promoNote: "Dernier T3 traversant", views: 214 },
    { id: "L-thabor-A21", prog: "thabor",  lot: "A21", type: "T2", surface: 44, floor: 2, orient: "Est",       balcony: 5,  price: 248000, status: "optionne", avail: "T2 2027",     featured: true,  promoNote: "", views: 156 },
    { id: "L-thabor-C04", prog: "thabor",  lot: "C04", type: "T4", surface: 89, floor: 4, orient: "Sud",       balcony: 14, price: 435000, status: "dispo",    avail: "T2 2027",     featured: false, promoNote: "", views: 61 },
    { id: "L-georges-04", prog: "georges", lot: "04",  type: "T1", surface: 29, floor: 1, orient: "Ouest",     balcony: 0,  price: 168000, status: "dispo",    avail: "Immédiate",   featured: true,  promoNote: "Idéal investisseur", views: 302 },
    { id: "L-georges-11", prog: "georges", lot: "11",  type: "T3", surface: 64, floor: 3, orient: "Sud-Est",   balcony: 8,  price: 289000, status: "dispo",    avail: "Immédiate",   featured: true,  promoNote: "", views: 98 },
    { id: "L-chalands-33", prog: "chalands", lot: "33", type: "T2", surface: 46, floor: 5, orient: "Sud",      balcony: 6,  price: 274000, status: "dispo",    avail: "T3 2027",     featured: true,  promoNote: "Vue sur l'Erdre", views: 187 },
    { id: "L-chalands-08", prog: "chalands", lot: "08", type: "T4", surface: 92, floor: 2, orient: "Sud-Ouest", balcony: 12, price: 468000, status: "vendu",   avail: "—",           featured: false, promoNote: "", views: 44 },
    { id: "L-rance-PH2", prog: "rance",    lot: "PH2", type: "T4", surface: 104, floor: 6, orient: "Nord-Ouest", balcony: 22, price: 689000, status: "dispo",   avail: "Immédiate",   featured: true,  promoNote: "Attique — vue mer", views: 421 },
    { id: "L-rance-14",  prog: "rance",    lot: "14",  type: "T2", surface: 48, floor: 1, orient: "Sud",       balcony: 7,  price: 296000, status: "optionne", avail: "Immédiate",   featured: false, promoNote: "", views: 73 },
    { id: "L-kerlann-22", prog: "kerlann", lot: "22",  type: "T3", surface: 68, floor: 2, orient: "Sud",       balcony: 10, price: 268000, status: "dispo",    avail: "T1 2027",     featured: true,  promoNote: "Jardin privatif", views: 129 },
    { id: "L-helios-05", prog: "helios",   lot: "05",  type: "T3", surface: 71, floor: 1, orient: "Sud-Ouest", balcony: 11, price: 398000, status: "dispo",    avail: "T2 2028",     featured: true,  promoNote: "À 400 m de la plage", views: 268 },
    { id: "L-iris-17",   prog: "iris",     lot: "17",  type: "T2", surface: 45, floor: 3, orient: "Est",       balcony: 5,  price: 219000, status: "dispo",    avail: "T4 2026",     featured: true,  promoNote: "", views: 84 },
    { id: "L-prisme-31", prog: "prisme",   lot: "31",  type: "T3", surface: 66, floor: 4, orient: "Sud",       balcony: 8,  price: 345000, status: "dispo",    avail: "T3 2027",     featured: true,  promoNote: "Loi Pinel", views: 142 },
    { id: "L-belleville-52", prog: "belleville", lot: "52", type: "T2", surface: 42, floor: 5, orient: "Ouest", balcony: 4, price: 465000, status: "dispo",   avail: "T1 2028",     featured: true,  promoNote: "Terrasse végétalisée", views: 356 }
  ];

  const LEADS = [
    { id: 1, first: "Marie",   last: "Tanguy",    email: "marie.tanguy@exemple.fr",     phone: "06 12 45 78 90", lot: "L-thabor-B12", date: "21 juil. 2026 · 14:32", status: "nouveau",   advisor: "", message: "Bonjour, je souhaiterais visiter le T3 des Terrasses du Thabor. Quelles sont vos disponibilités ?" },
    { id: 2, first: "Karim",   last: "Benali",    email: "k.benali@exemple.fr",         phone: "07 88 21 09 44", lot: "L-rance-PH2",  date: "21 juil. 2026 · 11:05", status: "nouveau",   advisor: "", message: "Intéressé par l'attique de Saint-Malo. Possibilité de financement ?" },
    { id: 3, first: "Sophie",  last: "Renaud",    email: "sophie.renaud@exemple.fr",    phone: "06 34 56 12 78", lot: "L-chalands-33", date: "20 juil. 2026 · 17:48", status: "recontacter", advisor: "Julien Marchand", message: "Rappel demandé en fin de journée pour le lot 33 à Nantes." },
    { id: 4, first: "Thomas",  last: "Le Gall",   email: "t.legall@exemple.fr",         phone: "06 77 90 33 21", lot: "L-georges-04", date: "20 juil. 2026 · 09:12", status: "recontacter", advisor: "Amélie Rocher", message: "Investissement locatif, budget ~170 k€." },
    { id: 5, first: "Nadia",   last: "Fournier",  email: "nadia.fournier@exemple.fr",   phone: "07 21 65 43 09", lot: "L-helios-05",  date: "19 juil. 2026 · 16:20", status: "traite",    advisor: "Julien Marchand", message: "Visite effectuée le 18/07, réfléchit." },
    { id: 6, first: "Antoine", last: "Perrot",    email: "antoine.perrot@exemple.fr",   phone: "06 09 87 65 43", lot: "L-belleville-52", date: "19 juil. 2026 · 10:03", status: "nouveau", advisor: "", message: "Demande de plaquette pour la résidence Belleville." }
  ];

  window.GIBOIRE = { PROGRAMS, LOTS, LEADS };

  // Helpers partagés
  window.GIBOIRE.euro = function (n) {
    return n.toLocaleString("fr-FR").replace(/\u202f/g, "\u00a0") + "\u00a0€";
  };
  window.GIBOIRE.programById = function (id) {
    return PROGRAMS.find(function (p) { return p.id === id; });
  };
})();
