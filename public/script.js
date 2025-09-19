// Données des catégories et sous-catégories
const categories = {
    defunt: {
        name: "Défunts",
        icon: "⛪",
        subcategories: {
            "defunt-proche": "Défunts (proches)",
            "defunt-anniversaire": "Anniversaire de décès",
            "defunt-famille": "Défunts de la famille",
            "ames-purgatoire": "Âmes du purgatoire",
            "defunt-commemoration": "Commémoration spéciale"
        }
    },
    sante: {
        name: "Santé",
        icon: "❤️",
        subcategories: {
            "sante-malade": "Personne malade",
            "sante-operation": "Avant une opération",
            "sante-guerison": "Demande de guérison",
            "sante-handicap": "Personne handicapée",
            "sante-personnel": "Personnel soignant"
        }
    },
    famille: {
        name: "Famille",
        icon: "👨‍👩‍👧‍👦",
        subcategories: {
            "famille-unite": "Unité familiale",
            "famille-couple": "Couple en difficulté",
            "famille-grossesse": "Grossesse",
            "famille-enfants": "Enfants",
            "famille-aine": "Personnes âgées"
        }
    },
    voyage: {
        name: "Voyage",
        icon: "✈️",
        subcategories: {
            "voyage-securite": "Protection et sécurité",
            "voyage-pelerinage": "Pèlerinage",
            "voyage-depart": "Départ en voyage",
            "voyage-retour": "Retour de voyage",
            "voyage-conducteurs": "Conducteurs et voyageurs"
        }
    },
    "action-de-grace": {
        name: "Action de grâce",
        icon: "🙏",
        subcategories: {
            "grace-guerison": "Guérison obtenue",
            "grace-naissance": "Naissance",
            "grace-anniversaire": "Anniversaire de mariage",
            "grace-reussite": "Réussite obtenue",
            "grace-proteger": "Protection reçue"
        }
    },
    travail: {
        name: "Travail",
        icon: "💼",
        subcategories: {
            "travail-emploi": "Recherche d'emploi",
            "travail-projet": "Projet professionnel",
            "travail-collegues": "Collègues de travail",
            "travail-justice": "Justice au travail",
            "travail-reconversion": "Reconversion professionnelle"
        }
    },
    reussite: {
        name: "Réussite",
        icon: "🎓",
        subcategories: {
            "reussite-examen": "Examen ou concours",
            "reussite-etudes": "Études",
            "reussite-formation": "Formation",
            "reussite-projet": "Projet important",
            "reussite-choix": "Choix de vie"
        }
    },
    spiritualite: {
        name: "Spiritualité",
        icon: "⛪",
        subcategories: {
            "spiritualite-conversion": "Conversion",
            "spiritualite-foi": "Approfondissement de la foi",
            "spiritualite-vocation": "Vocations",
            "spiritualite-retraite": "Retraite spirituelle",
            "spiritualite-mission": "Missions évangélisatrices"
        }
    },
    monde: {
        name: "Monde & Société",
        icon: "🌍",
        subcategories: {
            "monde-paix": "Paix dans le monde",
            "monde-refugies": "Réfugiés et migrants",
            "monde-dirigeants": "Dirigeants",
            "monde-justice": "Justice sociale",
            "monde-ecologie": "Sauvegarde de la création"
        }
    }
};

// Modèles de suggestions par sous-catégorie
const suggestions = {
    // --- DEFUNTS ---
    "defunt-proche": "Pour le repos de l'âme de [Nom du défunt], que le Seigneur l'accueille dans la lumière éternelle et qu'Il console sa famille et ses proches dans la douleur du deuil.",
    "defunt-anniversaire": "En mémoire du [nombre]ᵉ anniversaire du décès de [Nom du défunt], afin que son âme repose dans la paix du Christ et que sa famille trouve réconfort et espérance.",
    "defunt-famille": "Pour les âmes de tous les défunts de la famille [Nom de famille], afin que Dieu les accueille dans son royaume et leur accorde le repos éternel.",
    "ames-purgatoire": "Pour toutes les âmes du purgatoire, en particulier celles oubliées ou délaissées, que la miséricorde de Dieu les purifie et les introduise dans la joie du paradis.",
    "defunt-commemoration": "À l’occasion de cette commémoration de [Nom ou événement], prions pour le repos de tous les défunts et le réconfort des familles en deuil.",

    // --- SANTÉ ---
    "sante-malade": "Pour [Nom du malade], afin que Dieu lui accorde la guérison, le courage et la paix dans cette période d’épreuve.",
    "sante-operation": "Pour [Nom] qui doit subir une opération à [hôpital/lieu], que le Seigneur guide les mains des médecins et assure un rétablissement complet.",
    "sante-guerison": "Pour la guérison de [Nom], que Dieu lui rende force, espérance et santé afin qu’il/elle retrouve la joie de vivre.",
    "sante-handicap": "Pour [Nom] vivant avec un handicap, afin que le Seigneur lui accorde force, dignité et soutien au quotidien.",
    "sante-personnel": "Pour le personnel soignant de [lieu/hôpital], que Dieu les fortifie, leur donne patience, et les bénisse dans leur mission auprès des malades.",

    // --- FAMILLE ---
    "famille-unite": "Pour la famille [Nom de famille], afin que Dieu protège leur unité, renforce leur amour et les garde fidèles dans la foi.",
    "famille-couple": "Pour [Prénoms du couple], en difficulté dans leur union, que Dieu restaure leur amour, apaise les tensions et renouvelle leur engagement mutuel.",
    "famille-grossesse": "Pour [Nom] et son enfant à naître, que Dieu veille sur la grossesse, accorde santé à la mère et bénédiction à l’enfant.",
    "famille-enfants": "Pour les enfants de [Nom de famille] et tous les enfants, que le Seigneur les protège, guide leur croissance et les comble de sagesse.",
    "famille-aine": "Pour [Nom], personne âgée, et pour tous les aînés, que Dieu leur accorde santé, sérénité et soutien dans leurs dernières années.",

    // --- VOYAGE ---
    "voyage-securite": "Pour [Nom] en voyage vers [Destination], que Dieu le/la protège, assure sa sécurité et le ramène sain et sauf.",
    "voyage-pelerinage": "Pour les pèlerins en route vers [lieu de pèlerinage], que Dieu les accompagne, les garde unis et leur accorde de recevoir des grâces abondantes.",
    "voyage-depart": "Pour [Nom] au moment de son départ en voyage, que Dieu lui accorde une route sûre et un séjour paisible.",
    "voyage-retour": "Pour [Nom] de retour de voyage, en action de grâce pour sa protection, et afin que Dieu continue de le bénir auprès des siens.",
    "voyage-conducteurs": "Pour tous les conducteurs et voyageurs, que Dieu les garde prudents sur les routes et les protège de tout danger.",

    // --- ACTION DE GRÂCE ---
    "grace-guerison": "En action de grâce pour la guérison de [Nom], afin de rendre gloire à Dieu pour sa bonté et sa miséricorde.",
    "grace-naissance": "En action de grâce pour la naissance de [Nom de l’enfant], que Dieu bénisse l’enfant et comble de joie sa famille.",
    "grace-anniversaire": "En action de grâce pour l’anniversaire de mariage de [Prénoms], que Dieu renouvelle leur amour et fortifie leur engagement.",
    "grace-reussite": "En action de grâce pour la réussite de [Nom] à [examen/projet], que Dieu continue de le/la guider et d’éclairer son avenir.",
    "grace-proteger": "En action de grâce pour la protection reçue durant [situation], afin de remercier le Seigneur pour sa présence et sa fidélité.",

    // --- TRAVAIL ---
    "travail-emploi": "Pour [Nom] en recherche d’emploi, que Dieu ouvre des portes et lui accorde un travail digne pour subvenir à ses besoins.",
    "travail-projet": "Pour la réussite du projet professionnel de [Nom], que Dieu inspire ses choix, guide ses pas et bénisse ses efforts.",
    "travail-collegues": "Pour [Nom] et ses collègues de [Entreprise], que Dieu leur donne unité, respect et harmonie dans le travail.",
    "travail-justice": "Pour [Nom] confronté à une injustice au travail, que Dieu lui apporte justice, paix et persévérance.",
    "travail-reconversion": "Pour [Nom] engagé dans une reconversion professionnelle, que Dieu éclaire son chemin et le soutienne dans ce renouveau.",

    // --- RÉUSSITE ---
    "reussite-examen": "Pour [Nom] qui passe [examen/concours], que Dieu lui accorde sagesse, concentration et sérénité afin qu’il/elle réussisse.",
    "reussite-etudes": "Pour les études de [Nom], que Dieu lui donne persévérance, intelligence et réussite dans son parcours scolaire/universitaire.",
    "reussite-formation": "Pour [Nom] engagé dans une formation, que Dieu bénisse ses efforts et lui accorde de progresser avec succès.",
    "reussite-projet": "Pour [Nom] et son projet [préciser], que Dieu le soutienne et l’aide à atteindre de bons résultats.",
    "reussite-choix": "Pour [Nom] dans ses choix de vie, que Dieu lui donne discernement et paix intérieure pour prendre les bonnes décisions.",

    // --- SPIRITUALITÉ ---
    "spiritualite-conversion": "Pour [Nom] et pour tous ceux qui cherchent Dieu, que le Seigneur les attire à Lui et leur accorde une conversion sincère.",
    "spiritualite-foi": "Pour [Nom], afin que sa foi s’approfondisse, qu’il/elle demeure fidèle et persévère dans l’espérance chrétienne.",
    "spiritualite-vocation": "Pour les vocations sacerdotales et religieuses, particulièrement dans notre paroisse et notre diocèse, que Dieu appelle des ouvriers à sa moisson.",
    "spiritualite-retraite": "Pour [Nom] en retraite spirituelle à [lieu], que Dieu le comble de lumière, de paix et de renouveau intérieur.",
    "spiritualite-mission": "Pour les missions évangélisatrices menées à [lieu], que Dieu fortifie les missionnaires et ouvre les cœurs à l’Évangile.",

    // --- MONDE & SOCIÉTÉ ---
    "monde-paix": "Pour la paix dans le monde, en particulier dans [pays ou région], que Dieu inspire aux dirigeants des solutions justes et pacifiques.",
    "monde-refugies": "Pour les réfugiés et migrants contraints de quitter leur terre, que Dieu leur accorde protection, dignité et un accueil fraternel.",
    "monde-dirigeants": "Pour les dirigeants de nos pays, que Dieu leur donne sagesse, justice et souci du bien commun.",
    "monde-justice": "Pour la justice sociale dans notre société, que Dieu soutienne les opprimés et inspire la solidarité et la fraternité.",
    "monde-ecologie": "Pour la sauvegarde de la création, que Dieu inspire chacun à prendre soin de la nature et des générations futures."
};

// Index de recherche - création d'une liste plate de toutes les sous-catégories
const searchIndex = [];
for (const [categoryId, category] of Object.entries(categories)) {
    for (const [subId, subName] of Object.entries(category.subcategories)) {
        searchIndex.push({
            id: subId,
            name: subName,
            categoryId: categoryId,
            categoryName: category.name,
            icon: category.icon
        });
    }
}

// Fonctions pour la gestion des dates
function calculateEndDate(startDate, daysToAdd) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split('T')[0];
}

// Fonctions pour la gestion des montants
function formatAmount(amount) {
    return amount.toLocaleString() + ' FCFA';
}

// Fonctions pour la validation
function validatePhoneNumber(phone) {
    return /^[\+]?[0-9\s\-\(\)]{8,}$/.test(phone);
}

function validateEmail(email) {
    if (!email) return true; // Email optionnel
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Fonctions de navigation
function navigateTo(page) {
    window.location.href = page;
}

// Fonctions de sauvegarde et récupération des données
function saveFormData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFormData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
