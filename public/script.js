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
    "defunt-proche": "Pour le repos de l'âme de [Nom du défunt], que Dieu l'accueille dans sa lumière éternelle et console ceux qui restent dans l'épreuve du deuil.",
    "defunt-anniversaire": "En commémoration du [nombre] anniversaire du décès de [Nom du défunt], pour le repos de son âme et le réconfort de sa famille.",
    "defunt-famille": "Pour les âmes de tous les défunts de la famille [Nom de famille], que Dieu les accueille dans son royaume éternel.",
    "sante-malade": "Pour le rétablissement et la guérison de [Nom du malade], que Dieu lui accorde force, courage et réconfort dans cette épreuve.",
    "sante-operation": "Pour [Nom] qui doit subir une opération chirurgicale, que Dieu guide les mains des médecins et accorde un rétablissement complet.",
    "famille-unite": "Pour la famille [Nom de famille], que Dieu protège, guide et renforce leur unité dans l'amour et la faith mutuelle.",
    "voyage-securite": "Pour la protection et la sécurité de [Nom du voyageur] lors de son voyage à [Destination], qu'il/elle revienne sain et sauf auprès des siens.",
    "grace-guerison": "En action de grâces pour la guérison de [Nom], pour remercier le Seigneur de ses bienfaits et de sa miséricorde.",
    "travail-emploi": "Pour [Nom] en recherche d'emploi, que Dieu lui ouvre les portes du travail nécessaire à subvenir aux besoins de sa famille.",
    "reussite-examen": "Pour la réussite de [Nom] à [examen/concours], que Dieu lui accorde sagesse, concentration et sérénité lors des épreuves.",
    "spiritualite-vocation": "Pour les vocations sacerdotales et religieuses, particulièrement dans notre diocèse/paroisse, que Dieu appelle des travailleurs à sa moisson.",
    "monde-paix": "Pour la paix dans le monde, particulièrement en [région en conflit], que Dieu inspire aux dirigeants des solutions justes et pacifiques."
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
