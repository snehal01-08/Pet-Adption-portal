/* ==========================================================================
   PawMatch Pet Adoption Portal - Application JavaScript (ES6+)
   ========================================================================== */

// Mock Database of Rescued Pets
const PETS_DATA = [
    {
        id: "pet-1",
        name: "Buddy",
        species: "Dog",
        breed: "Golden Retriever",
        age: 2,
        ageCategory: "Young",
        size: "Large",
        gender: "Male",
        image: "assets/images/dog1.png",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: false,
        temperament: ["Playful", "Gentle", "Affectionate", "Energetic"],
        bio: "Buddy is a happy-go-lucky Golden Retriever who loves retrieve games, swimming, and cuddle sessions. He was rescued from a shelter after his previous owner relocated. He is great with children of all ages!",
        shelter: "Compassion Haven Shelter, Sector 4",
        featured: true
    },
    {
        id: "pet-2",
        name: "Milo",
        species: "Cat",
        breed: "Fluffy Orange Tabby",
        age: 1,
        ageCategory: "Puppy/Kitten",
        size: "Small",
        gender: "Male",
        image: "assets/images/cat1.png",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: false,
        temperament: ["Curious", "Cuddly", "Quiet", "Purr-Machine"],
        bio: "Milo is an adorable 1-year-old orange tabby with plush fur and big green eyes. He loves sunbathing by sunny windows and sitting on laps during coffee breaks. Purrs immediately when petted!",
        shelter: "City Cat Rescue Hub, Central",
        featured: true
    },
    {
        id: "pet-3",
        name: "Waffles",
        species: "Dog",
        breed: "French Bulldog",
        age: 1.5,
        ageCategory: "Young",
        size: "Small",
        gender: "Female",
        image: "assets/images/dog2.png",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: false,
        temperament: ["Clownish", "Loyal", "Lap Dog", "Social"],
        bio: "Waffles is a spunky French Bulldog with expressive ears and endless charm. She adapts easily to apartment living and loves making human friends everywhere she goes.",
        shelter: "Pawsitive Horizons Shelter",
        featured: true
    },
    {
        id: "pet-4",
        name: "Cleo",
        species: "Cat",
        breed: "Calico Shorthair",
        age: 4,
        ageCategory: "Adult",
        size: "Medium",
        gender: "Female",
        image: "assets/images/cat2.png",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: false,
        specialNeeds: false,
        temperament: ["Independent", "Loving", "Calm", "Observant"],
        bio: "Cleo is a stunning tri-color Calico with a serene personality. She enjoys cozy napping spots, interactive feather toys, and peaceful environments. Best as an only cat.",
        shelter: "Whisker Friends Rescue",
        featured: false
    },
    {
        id: "pet-5",
        name: "Clover",
        species: "Rabbit",
        breed: "Holland Lop Bunny",
        age: 0.8,
        ageCategory: "Puppy/Kitten",
        size: "Small",
        gender: "Female",
        image: "assets/images/rabbit1.png",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: false,
        temperament: ["Soft", "Curious", "Loves Carrots", "Quiet"],
        bio: "Clover is a sweet Holland Lop rabbit with velvety ears. She is litter-box trained, loves munching fresh timothy hay, and enjoys doing happy bunny hops (binkies) on soft carpets.",
        shelter: "Small Paws & Fur Rescue",
        featured: true
    },
    {
        id: "pet-6",
        name: "Mango",
        species: "Bird",
        breed: "Sun Conure Parrot",
        age: 3,
        ageCategory: "Adult",
        size: "Small",
        gender: "Male",
        image: "assets/images/parrot1.png",
        vaccinated: true,
        neutered: false,
        houseTrained: false,
        goodWithKids: false,
        goodWithPets: false,
        specialNeeds: true,
        temperament: ["Vibrant", "Vocal", "Intelligent", "Playful"],
        bio: "Mango is a brilliant Sun Conure parrot with colorful plumage. He knows how to whistle tunes and say 'Hello!'. Requires an experienced bird owner who can provide plenty of mental stimulation.",
        shelter: "Exotic Feather Sanctuary",
        featured: false
    },
    {
        id: "pet-7",
        name: "Bella",
        species: "Dog",
        breed: "Labrador Retriever Mix",
        age: 5,
        ageCategory: "Adult",
        size: "Large",
        gender: "Female",
        image: "assets/images/dog1.png",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: false,
        temperament: ["Friendly", "Active", "Smart", "Patient"],
        bio: "Bella is a gentle 5-year-old Labrador mix who adores long walks, hiking trails, and playing fetch. She is fully obedience-trained and loves human affection.",
        shelter: "Compassion Haven Shelter, Sector 4",
        featured: false
    },
    {
        id: "pet-8",
        name: "Oliver",
        species: "Cat",
        breed: "Domestic Shorthair",
        age: 8,
        ageCategory: "Senior",
        size: "Medium",
        gender: "Male",
        image: "assets/images/cat1.png",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: true,
        temperament: ["Sweet", "Low Energy", "Lap Cat", "Quiet"],
        bio: "Oliver is a gentle senior cat looking for a quiet home to spend his golden years. He loves chin scratches, warm blankets, and sleeping next to your chair.",
        shelter: "City Cat Rescue Hub, Central",
        featured: false
    },
    {
        id: "pet-9",
        name: "Rocky",
        species: "Dog",
        breed: "Siberian Husky",
        age: 2.5,
        ageCategory: "Young",
        size: "Large",
        gender: "Male",
        image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: false,
        temperament: ["Energetic", "Vocal", "Adventurous", "Loyal"],
        bio: "Rocky is an athletic Siberian Husky with striking blue eyes. He loves outdoor running, snow days, and singing cheerful husky howls. Needs an active owner!",
        shelter: "North Country Rescue Hub",
        featured: true
    },
    {
        id: "pet-10",
        name: "Luna",
        species: "Cat",
        breed: "Siamese Purebred",
        age: 1.2,
        ageCategory: "Young",
        size: "Small",
        gender: "Female",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: false,
        temperament: ["Talkative", "Affectionate", "Smart", "Playful"],
        bio: "Luna is a beautiful Siamese cat with sapphire blue eyes. She loves following her humans around the house and engaging in soft conversations.",
        shelter: "City Cat Rescue Hub, Central",
        featured: true
    },
    {
        id: "pet-11",
        name: "Charlie",
        species: "Dog",
        breed: "Beagle Puppy",
        age: 0.5,
        ageCategory: "Puppy/Kitten",
        size: "Small",
        gender: "Male",
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        neutered: false,
        houseTrained: false,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: false,
        temperament: ["Curious", "Friendly", "Playful", "Scent-Driven"],
        bio: "Charlie is an adorable floppy-eared Beagle puppy full of curiosity. He loves exploring gardens, learning new puppy tricks, and cuddling during naptime.",
        shelter: "Pawsitive Horizons Shelter",
        featured: true
    },
    {
        id: "pet-12",
        name: "Snowball",
        species: "Cat",
        breed: "White Persian",
        age: 3,
        ageCategory: "Adult",
        size: "Medium",
        gender: "Female",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: false,
        specialNeeds: false,
        temperament: ["Gentle", "Regal", "Calm", "Low Energy"],
        bio: "Snowball is a fluffy white Persian cat with a sweet, peaceful disposition. She enjoys gentle brushing sessions and lounging on plush cushions.",
        shelter: "Whisker Friends Rescue",
        featured: false
    },
    {
        id: "pet-13",
        name: "Peanut",
        species: "Rabbit",
        breed: "Netherland Dwarf Bunny",
        age: 0.6,
        ageCategory: "Puppy/Kitten",
        size: "Small",
        gender: "Male",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: false,
        temperament: ["Tiny", "Energetic", "Sweet", "Playful"],
        bio: "Peanut is a pocket-sized Netherland Dwarf bunny. He is super friendly, litter box trained, and loves munching apple sticks and fresh parsley.",
        shelter: "Small Paws & Fur Rescue",
        featured: false
    },
    {
        id: "pet-14",
        name: "Rio",
        species: "Bird",
        breed: "Cockatiel",
        age: 2,
        ageCategory: "Young",
        size: "Small",
        gender: "Male",
        image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        neutered: false,
        houseTrained: false,
        goodWithKids: true,
        goodWithPets: false,
        specialNeeds: false,
        temperament: ["Whistler", "Friendly", "Social", "Curious"],
        bio: "Rio is a charming crest-headed Cockatiel who whistles popular tunes and loves perching on shoulders while you work. Great for bird lovers!",
        shelter: "Exotic Feather Sanctuary",
        featured: false
    },
    {
        id: "pet-15",
        name: "Daisy",
        species: "Dog",
        breed: "Goldendoodle",
        age: 1,
        ageCategory: "Young",
        size: "Medium",
        gender: "Female",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: false,
        temperament: ["Hypoallergenic", "Loving", "Smart", "Cheerful"],
        bio: "Daisy is a fluffy, hypoallergenic Goldendoodle with a big heart. She excels at agility games and is wonderful with young kids and elder family members.",
        shelter: "Compassion Haven Shelter, Sector 4",
        featured: true
    },
    {
        id: "pet-16",
        name: "Shadow",
        species: "Cat",
        breed: "Black Domestic Shorthair",
        age: 6,
        ageCategory: "Adult",
        size: "Medium",
        gender: "Male",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        neutered: true,
        houseTrained: true,
        goodWithKids: true,
        goodWithPets: true,
        specialNeeds: false,
        temperament: ["Sleek", "Affectionate", "Quiet", "Companion"],
        bio: "Shadow is a sleek black cat with mesmerizing amber eyes. Black cats are often overlooked in shelters, but Shadow has endless love and purrs to give!",
        shelter: "City Cat Rescue Hub, Central",
        featured: false
    }
];

// App State Management
let state = {
    searchQuery: "",
    species: "all",
    age: "all",
    size: "all",
    gender: "all",
    sort: "featured",
    traits: {
        kids: false,
        pets: false,
        vaccinated: false,
        specialNeeds: false
    },
    favorites: JSON.parse(localStorage.getItem("pawmatch_favs")) || [],
    compareList: [],
    currentDetailPetId: null,
    wizardPetId: null,
    wizardStep: 1,
    quizStep: 0,
    quizAnswers: {}
};

// DOM Elements Initialization
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    setupTheme();
    setupEventListeners();
    updateFavBadge();
    renderPetGrid();
}

/* ==========================================================================
   Theme Switcher Logic
   ========================================================================== */
function setupTheme() {
    const savedTheme = localStorage.getItem("pawmatch_theme");
    const themeIcon = document.getElementById("themeIcon");

    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.body.classList.add("dark-mode");
        if (themeIcon) themeIcon.className = "fa-solid fa-sun";
    }

    const themeToggleBtn = document.getElementById("themeToggleBtn");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("pawmatch_theme", isDark ? "dark" : "light");
            if (themeIcon) {
                themeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
            }
            showToast(isDark ? "Dark theme enabled" : "Light theme enabled", "info");
        });
    }
}

/* ==========================================================================
   Event Listeners Setup
   ========================================================================== */
function setupEventListeners() {
    // Hero Search
    const heroSearchBtn = document.getElementById("heroSearchBtn");
    const heroSearchInput = document.getElementById("heroSearchInput");
    if (heroSearchBtn && heroSearchInput) {
        const handleHeroSearch = () => {
            const query = heroSearchInput.value.trim();
            state.searchQuery = query;
            const catalogInput = document.getElementById("catalogSearchInput");
            if (catalogInput) catalogInput.value = query;
            document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
            renderPetGrid();
        };
        heroSearchBtn.addEventListener("click", handleHeroSearch);
        heroSearchInput.addEventListener("keyup", (e) => {
            if (e.key === "Enter") handleHeroSearch();
        });
    }

    // Species Quick Pill Selectors
    const speciesPills = document.querySelectorAll(".species-pill");
    speciesPills.forEach(pill => {
        pill.addEventListener("click", () => {
            speciesPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            const speciesVal = pill.getAttribute("data-species");
            state.species = speciesVal;

            const speciesSelect = document.getElementById("speciesFilter");
            if (speciesSelect) speciesSelect.value = speciesVal;

            renderPetGrid();
        });
    });

    // Catalog Filter Controls
    const catalogSearchInput = document.getElementById("catalogSearchInput");
    if (catalogSearchInput) {
        catalogSearchInput.addEventListener("input", (e) => {
            state.searchQuery = e.target.value.trim();
            renderPetGrid();
        });
    }

    const speciesFilter = document.getElementById("speciesFilter");
    if (speciesFilter) {
        speciesFilter.addEventListener("change", (e) => {
            state.species = e.target.value;
            // sync pills
            speciesPills.forEach(p => {
                p.classList.toggle("active", p.getAttribute("data-species") === e.target.value);
            });
            renderPetGrid();
        });
    }

    const ageFilter = document.getElementById("ageFilter");
    if (ageFilter) {
        ageFilter.addEventListener("change", (e) => {
            state.age = e.target.value;
            renderPetGrid();
        });
    }

    const sizeFilter = document.getElementById("sizeFilter");
    if (sizeFilter) {
        sizeFilter.addEventListener("change", (e) => {
            state.size = e.target.value;
            renderPetGrid();
        });
    }

    const genderFilter = document.getElementById("genderFilter");
    if (genderFilter) {
        genderFilter.addEventListener("change", (e) => {
            state.gender = e.target.value;
            renderPetGrid();
        });
    }

    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            state.sort = e.target.value;
            renderPetGrid();
        });
    }

    // Trait Checkboxes
    const traitKids = document.getElementById("traitKids");
    if (traitKids) traitKids.addEventListener("change", (e) => { state.traits.kids = e.target.checked; renderPetGrid(); });

    const traitPets = document.getElementById("traitPets");
    if (traitPets) traitPets.addEventListener("change", (e) => { state.traits.pets = e.target.checked; renderPetGrid(); });

    const traitVaccinated = document.getElementById("traitVaccinated");
    if (traitVaccinated) traitVaccinated.addEventListener("change", (e) => { state.traits.vaccinated = e.target.checked; renderPetGrid(); });

    const traitSpecialNeeds = document.getElementById("traitSpecialNeeds");
    if (traitSpecialNeeds) traitSpecialNeeds.addEventListener("change", (e) => { state.traits.specialNeeds = e.target.checked; renderPetGrid(); });

    // Reset Filters
    const resetFiltersBtn = document.getElementById("resetFiltersBtn");
    const emptyResetBtn = document.getElementById("emptyResetBtn");
    const resetAll = () => {
        state.searchQuery = "";
        state.species = "all";
        state.age = "all";
        state.size = "all";
        state.gender = "all";
        state.sort = "featured";
        state.traits = { kids: false, pets: false, vaccinated: false, specialNeeds: false };

        if (catalogSearchInput) catalogSearchInput.value = "";
        if (heroSearchInput) heroSearchInput.value = "";
        if (speciesFilter) speciesFilter.value = "all";
        if (ageFilter) ageFilter.value = "all";
        if (sizeFilter) sizeFilter.value = "all";
        if (genderFilter) genderFilter.value = "all";
        if (sortSelect) sortSelect.value = "featured";

        if (traitKids) traitKids.checked = false;
        if (traitPets) traitPets.checked = false;
        if (traitVaccinated) traitVaccinated.checked = false;
        if (traitSpecialNeeds) traitSpecialNeeds.checked = false;

        speciesPills.forEach(p => p.classList.toggle("active", p.getAttribute("data-species") === "all"));

        renderPetGrid();
        showToast("Filters reset to default", "info");
    };

    if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", resetAll);
    if (emptyResetBtn) emptyResetBtn.addEventListener("click", resetAll);

    // Favorites Drawer Controls
    const openFavsBtn = document.getElementById("openFavsBtn");
    const closeFavsDrawer = document.getElementById("closeFavsDrawer");
    const favsDrawerOverlay = document.getElementById("favsDrawerOverlay");
    const clearFavsBtn = document.getElementById("clearFavsBtn");

    if (openFavsBtn) {
        openFavsBtn.addEventListener("click", () => {
            renderFavDrawer();
            favsDrawerOverlay?.classList.remove("hidden");
        });
    }

    if (closeFavsDrawer) {
        closeFavsDrawer.addEventListener("click", () => {
            favsDrawerOverlay?.classList.add("hidden");
        });
    }

    if (favsDrawerOverlay) {
        favsDrawerOverlay.addEventListener("click", (e) => {
            if (e.target === favsDrawerOverlay) favsDrawerOverlay.classList.add("hidden");
        });
    }

    if (clearFavsBtn) {
        clearFavsBtn.addEventListener("click", () => {
            state.favorites = [];
            saveFavorites();
            renderFavDrawer();
            renderPetGrid();
            showToast("Favorites cleared", "info");
        });
    }

    // Detail Modal Close
    const closeDetailModal = document.getElementById("closeDetailModal");
    const petDetailModal = document.getElementById("petDetailModal");
    if (closeDetailModal) {
        closeDetailModal.addEventListener("click", () => petDetailModal?.classList.add("hidden"));
    }
    if (petDetailModal) {
        petDetailModal.addEventListener("click", (e) => {
            if (e.target === petDetailModal) petDetailModal.classList.add("hidden");
        });
    }

    // Adoption Wizard Triggers & Form Logic
    const detailAdoptBtn = document.getElementById("detailAdoptBtn");
    if (detailAdoptBtn) {
        detailAdoptBtn.addEventListener("click", () => {
            petDetailModal?.classList.add("hidden");
            openAdoptionWizard(state.currentDetailPetId);
        });
    }

    setupAdoptionWizardLogic();

    // Quiz Triggers
    const heroQuizBtn = document.getElementById("heroQuizBtn");
    const quizNavLink = document.getElementById("quizNavLink");
    const startMatchQuizBtn = document.getElementById("startMatchQuizBtn");
    if (heroQuizBtn) heroQuizBtn.addEventListener("click", startPetQuiz);
    if (quizNavLink) quizNavLink.addEventListener("click", startPetQuiz);
    if (startMatchQuizBtn) startMatchQuizBtn.addEventListener("click", startPetQuiz);

    setupQuizLogic();

    // Pet Compare Triggers
    const openCompareBtn = document.getElementById("openCompareBtn");
    const closeCompareModal = document.getElementById("closeCompareModal");
    const compareModal = document.getElementById("compareModal");
    if (openCompareBtn) openCompareBtn.addEventListener("click", openCompareModal);
    if (closeCompareModal) closeCompareModal.addEventListener("click", () => compareModal?.classList.add("hidden"));

    // Footer Info Links (Modal Dialogs)
    setupInfoModal();
}

/* ==========================================================================
   Filtering & Rendering Pipeline
   ========================================================================== */
function filterPets() {
    return PETS_DATA.filter(pet => {
        // Search Query
        if (state.searchQuery) {
            const q = state.searchQuery.toLowerCase();
            const matchName = pet.name.toLowerCase().includes(q);
            const matchBreed = pet.breed.toLowerCase().includes(q);
            const matchSpecies = pet.species.toLowerCase().includes(q);
            const matchTraits = pet.temperament.some(t => t.toLowerCase().includes(q));
            if (!matchName && !matchBreed && !matchSpecies && !matchTraits) return false;
        }

        // Species
        if (state.species !== "all" && pet.species !== state.species) return false;

        // Age Group
        if (state.age !== "all" && pet.ageCategory !== state.age) return false;

        // Size
        if (state.size !== "all" && pet.size !== state.size) return false;

        // Gender
        if (state.gender !== "all" && pet.gender !== state.gender) return false;

        // Checkbox Traits
        if (state.traits.kids && !pet.goodWithKids) return false;
        if (state.traits.pets && !pet.goodWithPets) return false;
        if (state.traits.vaccinated && !pet.vaccinated) return false;
        if (state.traits.specialNeeds && !pet.specialNeeds) return false;

        return true;
    }).sort((a, b) => {
        if (state.sort === "age-asc") return a.age - b.age;
        if (state.sort === "age-desc") return b.age - a.age;
        if (state.sort === "name-asc") return a.name.localeCompare(b.name);
        // Featured
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
}

function renderPetGrid() {
    const petGrid = document.getElementById("petGrid");
    const emptyState = document.getElementById("emptyState");
    const visiblePetCount = document.getElementById("visiblePetCount");
    const filtered = filterPets();

    if (visiblePetCount) visiblePetCount.textContent = filtered.length;

    if (!petGrid) return;

    if (filtered.length === 0) {
        petGrid.innerHTML = "";
        emptyState?.classList.remove("hidden");
        return;
    }

    emptyState?.classList.add("hidden");
    petGrid.innerHTML = filtered.map(pet => createPetCardHTML(pet)).join("");

    // Attach card event listeners
    filtered.forEach(pet => {
        const cardEl = document.getElementById(`pet-card-${pet.id}`);
        const favBtn = cardEl?.querySelector(".pet-fav-btn");
        const meetBtn = cardEl?.querySelector(".meet-pet-btn");

        if (favBtn) {
            favBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                toggleFavorite(pet.id);
            });
        }

        if (meetBtn) {
            meetBtn.addEventListener("click", () => openPetDetailModal(pet.id));
        }

        if (cardEl) {
            cardEl.addEventListener("click", (e) => {
                if (!e.target.closest(".pet-fav-btn") && !e.target.closest(".meet-pet-btn")) {
                    openPetDetailModal(pet.id);
                }
            });
        }
    });

    updateCompareButtonState();
}

function createPetCardHTML(pet) {
    const isFav = state.favorites.includes(pet.id);
    const speciesIcon = getSpeciesIcon(pet.species);

    return `
        <div class="pet-card" id="pet-card-${pet.id}">
            <div class="pet-card-image-wrap">
                <img src="${pet.image}" alt="${pet.name}" loading="lazy">
                <button class="pet-fav-btn ${isFav ? 'active' : ''}" title="${isFav ? 'Remove from Saved' : 'Save Pet'}">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <span class="pet-species-badge"><i class="${speciesIcon}"></i> ${pet.species}</span>
            </div>
            <div class="pet-card-content">
                <div class="pet-card-header">
                    <div>
                        <h3>${pet.name}</h3>
                        <span class="pet-breed-name">${pet.breed}</span>
                    </div>
                </div>
                <div class="pet-quick-pills">
                    <span class="quick-pill"><i class="fa-solid fa-calendar-days"></i> ${pet.age} yrs</span>
                    <span class="quick-pill"><i class="fa-solid fa-venus-mars"></i> ${pet.gender}</span>
                    <span class="quick-pill"><i class="fa-solid fa-ruler"></i> ${pet.size}</span>
                </div>
                <div class="pet-card-footer">
                    <span class="shelter-location"><i class="fa-solid fa-location-dot"></i> ${pet.shelter.split(',')[0]}</span>
                    <button class="btn btn-outline meet-pet-btn"><i class="fa-solid fa-eye"></i> Meet ${pet.name}</button>
                </div>
            </div>
        </div>
    `;
}

function getSpeciesIcon(species) {
    switch (species.toLowerCase()) {
        case "dog": return "fa-solid fa-dog";
        case "cat": return "fa-solid fa-cat";
        case "rabbit": return "fa-solid fa-carrot";
        case "bird": return "fa-solid fa-crow";
        default: return "fa-solid fa-paw";
    }
}

/* ==========================================================================
   Favorites & Persistent State
   ========================================================================== */
function toggleFavorite(petId) {
    const index = state.favorites.indexOf(petId);
    const pet = PETS_DATA.find(p => p.id === petId);

    if (index > -1) {
        state.favorites.splice(index, 1);
        showToast(`Removed ${pet ? pet.name : 'pet'} from favorites`, "warning");
    } else {
        state.favorites.push(petId);
        showToast(`Saved ${pet ? pet.name : 'pet'} to favorites!`, "success");
    }

    saveFavorites();
    updateFavBadge();
    renderPetGrid();

    if (state.currentDetailPetId === petId) {
        updateDetailFavButton();
    }
}

function saveFavorites() {
    localStorage.setItem("pawmatch_favs", JSON.stringify(state.favorites));
}

function updateFavBadge() {
    const favBadge = document.getElementById("favBadge");
    const favDrawerCount = document.getElementById("favDrawerCount");
    if (favBadge) favBadge.textContent = state.favorites.length;
    if (favDrawerCount) favDrawerCount.textContent = state.favorites.length;
}

function renderFavDrawer() {
    const favsList = document.getElementById("favsList");
    if (!favsList) return;

    if (state.favorites.length === 0) {
        favsList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon"><i class="fa-regular fa-heart"></i></div>
                <p>No saved pets yet. Click the heart icon on any pet card to save your favorites!</p>
            </div>
        `;
        return;
    }

    const savedPets = PETS_DATA.filter(p => state.favorites.includes(p.id));
    favsList.innerHTML = savedPets.map(pet => `
        <div class="fav-item-card">
            <img src="${pet.image}" alt="${pet.name}" class="fav-item-img">
            <div class="fav-item-info">
                <h4>${pet.name}</h4>
                <p>${pet.breed} &bull; ${pet.age} Yrs</p>
            </div>
            <button class="fav-remove-btn" data-id="${pet.id}" title="Remove"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `).join("");

    favsList.querySelectorAll(".fav-remove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            toggleFavorite(id);
            renderFavDrawer();
        });
    });
}

/* ==========================================================================
   Pet Detail Modal
   ========================================================================== */
function openPetDetailModal(petId) {
    const pet = PETS_DATA.find(p => p.id === petId);
    if (!pet) return;

    state.currentDetailPetId = petId;

    const modal = document.getElementById("petDetailModal");
    const img = document.getElementById("detailPetImg");
    const speciesBadge = document.getElementById("detailSpeciesBadge");
    const name = document.getElementById("detailPetName");
    const breed = document.getElementById("detailPetBreed");
    const age = document.getElementById("detailAge");
    const gender = document.getElementById("detailGender");
    const size = document.getElementById("detailSize");
    const shelter = document.getElementById("detailShelter");
    const bio = document.getElementById("detailBio");
    const tagsContainer = document.getElementById("detailTemperamentTags");

    if (img) img.src = pet.image;
    if (speciesBadge) speciesBadge.innerHTML = `<i class="${getSpeciesIcon(pet.species)}"></i> ${pet.species}`;
    if (name) name.textContent = pet.name;
    if (breed) breed.textContent = pet.breed;
    if (age) age.textContent = `${pet.age} Years`;
    if (gender) gender.textContent = pet.gender;
    if (size) size.textContent = pet.size;
    if (shelter) shelter.textContent = pet.shelter;
    if (bio) bio.textContent = pet.bio;

    if (tagsContainer) {
        tagsContainer.innerHTML = pet.temperament.map(t => `<span class="trait-pill">${t}</span>`).join("");
    }

    updateDetailFavButton();

    const compareBtn = document.getElementById("detailCompareBtn");
    if (compareBtn) {
        compareBtn.onclick = () => {
            toggleCompare(pet.id);
        };
    }

    modal?.classList.remove("hidden");
}

function updateDetailFavButton() {
    const favBtn = document.getElementById("detailFavBtn");
    if (!favBtn) return;
    const isFav = state.favorites.includes(state.currentDetailPetId);

    favBtn.className = `fav-icon-btn ${isFav ? 'active' : ''}`;
    favBtn.innerHTML = `<i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
    favBtn.onclick = () => {
        toggleFavorite(state.currentDetailPetId);
        updateDetailFavButton();
    };
}

/* ==========================================================================
   Multi-Step Adoption Application Wizard Logic
   ========================================================================== */
function openAdoptionWizard(petId) {
    const pet = PETS_DATA.find(p => p.id === petId);
    state.wizardPetId = petId || (PETS_DATA[0] ? PETS_DATA[0].id : null);
    state.wizardStep = 1;

    const modal = document.getElementById("adoptionWizardModal");
    const wizardPetName = document.getElementById("wizardPetName");
    const activePet = PETS_DATA.find(p => p.id === state.wizardPetId);
    if (wizardPetName) wizardPetName.textContent = activePet ? activePet.name : "Pet";

    clearInputErrors();
    updateWizardStepUI();
    modal?.classList.remove("hidden");
}

function clearInputErrors() {
    document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));
}

function setupAdoptionWizardLogic() {
    const closeWizardModal = document.getElementById("closeWizardModal");
    const wizardModal = document.getElementById("adoptionWizardModal");
    const wizardPrevBtn = document.getElementById("wizardPrevBtn");
    const wizardNextBtn = document.getElementById("wizardNextBtn");
    const wizardSubmitBtn = document.getElementById("wizardSubmitBtn");
    const adoptionForm = document.getElementById("adoptionForm");

    // Success Modal elements
    const applicationSuccessModal = document.getElementById("applicationSuccessModal");
    const closeSuccessModal = document.getElementById("closeSuccessModal");
    const finishSuccessBtn = document.getElementById("finishSuccessBtn");

    if (closeWizardModal) closeWizardModal.addEventListener("click", () => wizardModal?.classList.add("hidden"));
    if (closeSuccessModal) closeSuccessModal.addEventListener("click", () => applicationSuccessModal?.classList.add("hidden"));
    if (finishSuccessBtn) finishSuccessBtn.addEventListener("click", () => {
        applicationSuccessModal?.classList.add("hidden");
        document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
    });

    if (wizardNextBtn) {
        wizardNextBtn.addEventListener("click", () => {
            if (validateWizardStep(state.wizardStep)) {
                state.wizardStep++;
                updateWizardStepUI();
            }
        });
    }

    if (wizardPrevBtn) {
        wizardPrevBtn.addEventListener("click", () => {
            if (state.wizardStep > 1) {
                state.wizardStep--;
                updateWizardStepUI();
            }
        });
    }

    const processFormSubmission = () => {
        // Validate all 3 steps before submitting
        if (!validateWizardStep(1)) {
            state.wizardStep = 1;
            updateWizardStepUI();
            return;
        }
        if (!validateWizardStep(2)) {
            state.wizardStep = 2;
            updateWizardStepUI();
            return;
        }
        if (!validateWizardStep(3)) {
            state.wizardStep = 3;
            updateWizardStepUI();
            return;
        }

        const pet = PETS_DATA.find(p => p.id === state.wizardPetId);
        wizardModal?.classList.add("hidden");

        // Generate application reference code
        const refCode = `#PAW-${Math.floor(10000 + Math.random() * 90000)}`;
        const successRefCode = document.getElementById("successRefCode");
        const successPetName = document.getElementById("successPetName");

        if (successRefCode) successRefCode.textContent = refCode;
        if (successPetName) successPetName.textContent = pet ? pet.name : "your chosen pet";

        applicationSuccessModal?.classList.remove("hidden");
        showToast(` 🎉 Application Submitted Successfully! Ref: ${refCode}`, "success");
        if (adoptionForm) adoptionForm.reset();
    };

    if (adoptionForm) {
        adoptionForm.addEventListener("submit", (e) => {
            e.preventDefault();
            processFormSubmission();
        });
    }

    if (wizardSubmitBtn) {
        wizardSubmitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            processFormSubmission();
        });
    }

    // Input listeners to clear errors on typing
    const allFormInputs = adoptionForm?.querySelectorAll("input, select, textarea");
    allFormInputs?.forEach(input => {
        input.addEventListener("input", () => input.classList.remove("input-error"));
        input.addEventListener("change", () => input.classList.remove("input-error"));
    });
}

function validateWizardStep(step) {
    clearInputErrors();

    if (step === 1) {
        const nameEl = document.getElementById("applicantName");
        const emailEl = document.getElementById("applicantEmail");
        const phoneEl = document.getElementById("applicantPhone");

        const name = nameEl?.value.trim();
        const email = emailEl?.value.trim();
        const phone = phoneEl?.value.trim();

        let valid = true;
        if (!name) { nameEl?.classList.add("input-error"); valid = false; }
        if (!email || !email.includes("@")) { emailEl?.classList.add("input-error"); valid = false; }
        if (!phone) { phoneEl?.classList.add("input-error"); valid = false; }

        if (!valid) {
            showToast("Please fill in valid contact information highlighted in red.", "warning");
            return false;
        }
    } else if (step === 2) {
        const expEl = document.getElementById("petExperience");
        const exp = expEl?.value.trim();

        if (!exp) {
            expEl?.classList.add("input-error");
            showToast("Please describe your pet experience briefly.", "warning");
            return false;
        }
    } else if (step === 3) {
        const termsEl = document.getElementById("termsAgree");
        if (!termsEl?.checked) {
            termsEl?.parentElement?.classList.add("input-error");
            showToast("Please accept the terms checkbox to submit your application.", "warning");
            return false;
        }
    }

    return true;
}

function updateWizardStepUI() {
    const step1 = document.getElementById("wizardStep1");
    const step2 = document.getElementById("wizardStep2");
    const step3 = document.getElementById("wizardStep3");

    const ind1 = document.getElementById("stepIndicator1");
    const ind2 = document.getElementById("stepIndicator2");
    const ind3 = document.getElementById("stepIndicator3");

    const prevBtn = document.getElementById("wizardPrevBtn");
    const nextBtn = document.getElementById("wizardNextBtn");
    const submitBtn = document.getElementById("wizardSubmitBtn");

    step1?.classList.toggle("hidden", state.wizardStep !== 1);
    step2?.classList.toggle("hidden", state.wizardStep !== 2);
    step3?.classList.toggle("hidden", state.wizardStep !== 3);

    ind1?.classList.toggle("active", state.wizardStep >= 1);
    ind2?.classList.toggle("active", state.wizardStep >= 2);
    ind3?.classList.toggle("active", state.wizardStep >= 3);

    if (prevBtn) prevBtn.classList.toggle("hidden", state.wizardStep === 1);
    if (nextBtn) nextBtn.classList.toggle("hidden", state.wizardStep === 3);
    if (submitBtn) submitBtn.classList.toggle("hidden", state.wizardStep !== 3);

    if (state.wizardStep === 3) {
        fillApplicationSummary();
    }
}

function fillApplicationSummary() {
    const summaryBox = document.getElementById("appSummaryBox");
    const pet = PETS_DATA.find(p => p.id === state.wizardPetId);
    const name = document.getElementById("applicantName")?.value || "Not provided";
    const email = document.getElementById("applicantEmail")?.value || "Not provided";
    const housing = document.getElementById("housingType")?.value || "Standard";

    if (summaryBox) {
        summaryBox.innerHTML = `
            <p><i class="fa-solid fa-paw"></i> <strong>Applying For:</strong> ${pet ? pet.name : 'Selected Pet'} (${pet ? pet.breed : ''})</p>
            <p><i class="fa-solid fa-user"></i> <strong>Applicant Name:</strong> ${name}</p>
            <p><i class="fa-solid fa-envelope"></i> <strong>Email:</strong> ${email}</p>
            <p><i class="fa-solid fa-house"></i> <strong>Living Space:</strong> ${housing}</p>
        `;
    }
}

/* ==========================================================================
   Pet Match Quiz Logic
   ========================================================================== */
const QUIZ_QUESTIONS = [
    {
        title: "What type of living space do you have?",
        options: [
            { text: "Apartment or Condo", icon: "fa-solid fa-building", speciesPref: ["Cat", "Rabbit", "Dog"] },
            { text: "House with a Yard", icon: "fa-solid fa-house-chimney", speciesPref: ["Dog", "Cat"] },
            { text: "Cozy Room / Shared Flat", icon: "fa-solid fa-bed", speciesPref: ["Bird", "Rabbit", "Cat"] }
        ]
    },
    {
        title: "How much time can you dedicate daily for exercise & activities?",
        options: [
            { text: "1-2+ Hours (High energy, outdoor walks)", icon: "fa-solid fa-person-running", energy: "High" },
            { text: "30-60 Minutes (Moderate play & strolls)", icon: "fa-solid fa-person-walking", energy: "Moderate" },
            { text: "Under 30 Mins (Relaxed cuddles)", icon: "fa-solid fa-couch", energy: "Low" }
        ]
    },
    {
        title: "Are there children or other pets in your home?",
        options: [
            { text: "Yes, kids and/or other pets", icon: "fa-solid fa-people-roof", kidFriendly: true },
            { text: "Just adults / quiet home", icon: "fa-solid fa-user-check", kidFriendly: false }
        ]
    }
];

function startPetQuiz() {
    state.quizStep = 0;
    state.quizAnswers = {};

    const modal = document.getElementById("quizModal");
    const resultsContainer = document.getElementById("quizResultsContainer");
    const optionsContainer = document.getElementById("quizOptionsContainer");

    resultsContainer?.classList.add("hidden");
    optionsContainer?.classList.remove("hidden");

    renderQuizQuestion();
    modal?.classList.remove("hidden");
}

function setupQuizLogic() {
    const closeQuizModal = document.getElementById("closeQuizModal");
    const quizModal = document.getElementById("quizModal");
    const closeQuizResultsBtn = document.getElementById("closeQuizResultsBtn");

    if (closeQuizModal) closeQuizModal.addEventListener("click", () => quizModal?.classList.add("hidden"));
    if (closeQuizResultsBtn) {
        closeQuizResultsBtn.addEventListener("click", () => {
            quizModal?.classList.add("hidden");
            document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
        });
    }
}

function renderQuizQuestion() {
    const qData = QUIZ_QUESTIONS[state.quizStep];
    const qTitle = document.getElementById("quizQuestionTitle");
    const qCurrent = document.getElementById("quizCurrentQ");
    const optionsContainer = document.getElementById("quizOptionsContainer");

    if (qTitle) qTitle.textContent = qData.title;
    if (qCurrent) qCurrent.textContent = state.quizStep + 1;

    if (optionsContainer) {
        optionsContainer.innerHTML = qData.options.map((opt, i) => `
            <button class="quiz-option-btn" data-index="${i}">
                <i class="${opt.icon} quiz-option-icon"></i>
                <div>
                    <div class="quiz-option-title">${opt.text}</div>
                </div>
            </button>
        `).join("");

        optionsContainer.querySelectorAll(".quiz-option-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                state.quizAnswers[`q${state.quizStep}`] = qData.options[idx];

                if (state.quizStep < QUIZ_QUESTIONS.length - 1) {
                    state.quizStep++;
                    renderQuizQuestion();
                } else {
                    showQuizResults();
                }
            });
        });
    }
}

function showQuizResults() {
    const optionsContainer = document.getElementById("quizOptionsContainer");
    const resultsContainer = document.getElementById("quizResultsContainer");
    const matchedGrid = document.getElementById("matchedPetsGrid");

    optionsContainer?.classList.add("hidden");
    resultsContainer?.classList.remove("hidden");

    const preferredSpecies = state.quizAnswers.q0?.speciesPref || ["Dog", "Cat"];
    const kidCheck = state.quizAnswers.q2?.kidFriendly;

    let matches = PETS_DATA.filter(p => preferredSpecies.includes(p.species));
    if (kidCheck) {
        matches = matches.filter(p => p.goodWithKids);
    }
    if (matches.length === 0) matches = PETS_DATA.slice(0, 2);

    if (matchedGrid) {
        matchedGrid.innerHTML = matches.slice(0, 2).map(pet => `
            <div class="fav-item-card">
                <img src="${pet.image}" alt="${pet.name}" class="fav-item-img">
                <div class="fav-item-info">
                    <h4>${pet.name}</h4>
                    <p>${pet.breed} &bull; ${pet.species}</p>
                </div>
                <button class="btn btn-primary btn-sm meet-matched-btn" data-id="${pet.id}">Meet</button>
            </div>
        `).join("");

        matchedGrid.querySelectorAll(".meet-matched-btn").forEach(b => {
            b.addEventListener("click", () => {
                const id = b.getAttribute("data-id");
                document.getElementById("quizModal")?.classList.add("hidden");
                openPetDetailModal(id);
            });
        });
    }
}

/* ==========================================================================
   Pet Comparison Side-by-Side
   ========================================================================== */
function toggleCompare(petId) {
    const idx = state.compareList.indexOf(petId);
    if (idx > -1) {
        state.compareList.splice(idx, 1);
        showToast("Removed pet from comparison", "info");
    } else {
        if (state.compareList.length >= 2) {
            showToast("You can compare up to 2 pets side-by-side", "warning");
            return;
        }
        state.compareList.push(petId);
        showToast("Added pet to comparison", "success");
    }

    updateCompareButtonState();
}

function updateCompareButtonState() {
    const openCompareBtn = document.getElementById("openCompareBtn");
    const compareCount = document.getElementById("compareCount");

    if (compareCount) compareCount.textContent = state.compareList.length;
    if (openCompareBtn) openCompareBtn.disabled = state.compareList.length === 0;
}

function openCompareModal() {
    if (state.compareList.length === 0) return;
    const modal = document.getElementById("compareModal");
    const container = document.getElementById("compareTableContainer");
    const pets = state.compareList.map(id => PETS_DATA.find(p => p.id === id)).filter(Boolean);

    if (container) {
        container.innerHTML = `
            <table class="compare-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        ${pets.map(p => `<th>${p.name}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Species &amp; Breed</strong></td>
                        ${pets.map(p => `<td>${p.species} (${p.breed})</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Age</strong></td>
                        ${pets.map(p => `<td>${p.age} Years</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Size</strong></td>
                        ${pets.map(p => `<td>${p.size}</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Vaccinated</strong></td>
                        ${pets.map(p => `<td>${p.vaccinated ? ' Yes' : ' No'}</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Good with Kids</strong></td>
                        ${pets.map(p => `<td>${p.goodWithKids ? ' Yes' : ' No'}</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>Temperament</strong></td>
                        ${pets.map(p => `<td>${p.temperament.join(', ')}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        `;
    }

    modal?.classList.remove("hidden");
}

/* ==========================================================================
   Info Modal & Utility Toasts
   ========================================================================== */
function setupInfoModal() {
    const infoModal = document.getElementById("infoModal");
    const closeInfoModal = document.getElementById("closeInfoModal");
    const infoContent = document.getElementById("infoModalContent");

    if (closeInfoModal) closeInfoModal.addEventListener("click", () => infoModal?.classList.add("hidden"));

    const links = [
        { id: "processInfoLink", title: "Adoption Requirements", body: "Our adoption process includes completing a brief application, a phone or in-person consultation with shelter staff, and a meet-and-greet with the pet. Standard ID and proof of residence are required." },
        { id: "feeInfoLink", title: "Adoption Fees & Care Kits", body: "Adoption fees range from $50 to $150 depending on species and age. This includes full vaccination, microchipping, spay/neuter surgery, and a free starter kit containing food and toys!" },
        { id: "vetInfoLink", title: "Medical Verification", body: "All pets listed on PawMatch undergo mandatory veterinary health screening, deworming, and vaccinations prior to placement in their forever homes." },
        { id: "faqLink", title: "Frequently Asked Questions", body: "Q: Can I foster before adopting?<br>A: Yes! We encourage foster-to-adopt trials.<br><br>Q: What if I have existing pets?<br>A: Our shelter coordinates controlled meet-and-greets to ensure smooth transitions." },
        { id: "volunteerModalBtn", title: "Become a Foster / Volunteer", body: "Thank you for wanting to make a difference! As a volunteer, you can assist with dog walking, cat socializing, or fostering pets until they find permanent homes. Fill out your details at the shelter reception!" },
        { id: "donateModalBtn", title: "Donate Pet Care Kits", body: "Your generous donations provide food, blankets, and essential veterinary care for rescued animals. Contact our shelter office to contribute care kits today!" }
    ];

    links.forEach(l => {
        const el = document.getElementById(l.id);
        if (el) {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                if (infoContent) {
                    infoContent.innerHTML = `<h3>${l.title}</h3><p style="margin-top: 1rem; color: var(--text-secondary); line-height: 1.6;">${l.body}</p>`;
                }
                infoModal?.classList.remove("hidden");
            });
        }
    });
}

function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    let iconClass = "fa-solid fa-circle-info";

    if (type === "success") iconClass = "fa-solid fa-circle-check";
    if (type === "warning") iconClass = "fa-solid fa-triangle-exclamation";

    toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
