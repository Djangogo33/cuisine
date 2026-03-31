const recipes = [
  { id: "bbq-chicken", name: "🔥 Poulet Barbecue", items: ["8 Cuisses de poulet", "120ml Ketchup", "3 c.s. Miel", "4 Épis de maïs"] },
  { id: "pasta-carbonara", name: "🍝 Pasta Carbonara", items: ["400g Spaghetti", "150g Guanciale", "4 Jaunes d'œufs", "100g Pecorino Romano"] },
  { id: "beef-stew", name: "🍲 Ragoût de Bœuf", items: ["800g Bœuf à mijoter", "4 Carottes", "2 Oignons", "500ml Vin rouge"] },
  { id: "fish-tacos", name: "🌮 Tacos au Poisson", items: ["12 Tortillas", "500g Cabillaud", "1 Chou rouge", "Crème acidulée"] },
  { id: "mushroom-risotto", name: "🍄 Risotto Champignons", items: ["300g Riz Arborio", "500g Champignons", "1L Bouillon", "80g Parmesan"] },
  { id: "veggie-curry", name: "🍛 Curry de Légumes", items: ["2 Pois chiches (boîtes)", "400ml Lait de coco", "2 c.s. Curry", "Épinards"] },
  { id: "caesar-salad", name: "🥗 Salade César", items: ["2 Filets de poulet", "Laitue Romaine", "Croûtons", "Sauce César", "Parmesan"] },
  { id: "pancakes", name: "🥞 Pancakes", items: ["250g Farine", "2 Œufs", "50g Beurre", "300ml Lait", "Sirop d'érable"] },
  { id: "salmon-teriyaki", name: "🐟 Saumon Teriyaki", items: ["4 Pavés de saumon", "Sauce Teriyaki", "300g Riz", "Brocolis"] },
  { id: "homemade-burger", name: "🍔 Burger Maison", items: ["4 Pains burger", "4 Steaks", "Cheddar", "Oignons", "Frites"] },
  { id: "ratatouille", name: "🥘 Ratatouille", items: ["2 Aubergines", "3 Courgettes", "4 Tomates", "2 Poivrons", "Herbes de Provence"] },
  { id: "quiche-lorraine", name: "🥧 Quiche Lorraine", items: ["Pâte brisée", "200g Lardons", "3 Œufs", "20cl Crème fraîche"] },
  // AJOUTS DEMANDÉS
  { id: "paella", name: "🥘 Paella Royale", items: ["400g Riz Bomba", "8 Crevettes", "500g Moules", "100g Chorizo", "Safran"] },
  { id: "lasagna", name: "🍝 Lasagnes Bolognaise", items: ["12 Plaques de lasagnes", "600g Bœuf haché", "800g Sauce tomate", "500ml Béchamel"] },
  { id: "salade-nicoise", name: "🥗 Salade Niçoise", items: ["Thon", "2 Œufs durs", "Haricots verts", "Tomates", "Olives noires", "Anchois"] }
];

function renderRecipes() {
    const grid = document.getElementById('recipes-grid');
    grid.innerHTML = recipes.map(r => `
        <div class="recipe-card text-center" onclick="selectRecipe('${r.id}')">
            <h3 class="text-2xl text-[#f5e6d3] font-heading">${r.name}</h3>
            <p class="text-[#a08872] text-sm mt-2">Cliquer pour voir les ingrédients</p>
        </div>
    `).join('');
}

function selectRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    document.getElementById('recipe-title').textContent = recipe.name;
    document.getElementById('ingredients-container').innerHTML = recipe.items.map(item => `
        <div class="ing-card flex justify-between items-center">
            <span>${item}</span>
            <i data-lucide="circle" class="w-4 h-4 opacity-30"></i>
        </div>
    `).join('');
    document.getElementById('selector-view').classList.add('hidden');
    document.getElementById('list-view').classList.remove('hidden');
    lucide.createIcons();
}

function backToRecipes() {
    document.getElementById('selector-view').classList.remove('hidden');
    document.getElementById('list-view').classList.add('hidden');
}

window.onload = () => {
    renderRecipes();
    lucide.createIcons();
};