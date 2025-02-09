(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
})(jQuery);
const menus = [
    {
        category: "Vorspeißen",
        items: [
            { name: "Weinblätter", price: "5.00€", description: "Petersilie, Bulgur, Tomaten, Zwiebeln, Zitronensaft und Olivenöl", imgSrc: "img/menu-1.jpg" },
            { name: "Muhammara", price: "5.00€", description: "Paprikapuree, mit Bulgur, Walnuss, Sesamsauce und Olivenöl", imgSrc: "img/menu-2.jpg" },
            { name: "Hummus Beiruti", price: "5.00€", description: "Kichererbsen Püree mit Sesamsauce und Olivenöl", imgSrc: "img/menu-3.jpg" },
            { name: "Hummus", price: "5.00€", description: "Kichererbsen Püree mit Sesamsauce", imgSrc: "img/menu-4.png" },
            { name: "Käse Sambusek", price: "6.00€", description: "Frittierte Teig gefüllt mit Käse und Petersilie", imgSrc: "img/menu-5.jpg" },
            { name: "Fleisch Sambusek", price: "6.00€", description: "Frittierte Teig gefüllt mit Fleisch", imgSrc: "img/menu-6.jpg" },
            { name: "Kebbeh", price: "8.00€", description: "Gefüllte Weizenschrot Bällchen, Hackfleisch, Mandeln und Zwiebeln", imgSrc: "img/menu-7.jpg" },
            { name: "Pommes", price: "4.00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Hummus + Shawarma", price: "6.00€", description: "Kichererbsen Püree mit Hähnchenfleisch und Sesamsauce", imgSrc: "img/menu-9.jpg" },
            { name: "Mutabbal", price: "5.00€", description: "Auberginenpüree mit Sesamsauce, Olivenöl und Fleisch", imgSrc: "img/menu-8.jpg" },
            { name: "Linsensuppe", price: "3.00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Reisteller", price: "3.00€", description: "", imgSrc: "img/menu-8.jpg" },
        ],
    },
    {
        category: "Arabische Spezialitäten",
        items: [
            { name: "Fatte + Butter", price: "7.00€", description: "Gekochte Kichererbsen mit gerösteten Brotstücken, Sesamsauce, Zitronensaft und Mandeln", imgSrc: "img/menu-8.jpg" },
            { name: "Fatte + Fleisch", price: "8.00€", description: "Gekochte Kichererbsen mit gerösteten Brotstücken, Sesamsauce, Zitronensaft", imgSrc: "img/menu-8.jpg" },
            { name: "Foul mit Sesamsoße", price: "7.00€", description: "Dicke Bohnen gekocht mit Joghurt-Sesamsoße, Knoblauch dazu Brot", imgSrc: "img/menu-8.jpg" },
            { name: "Foul mit Olivenöl", price: "7.00€", description: "Dicke Bohnen gekocht mit Olivenöl, Knoblauch dazu Brot", imgSrc: "img/menu-8.jpg" },
        ],
    },
    {
        category: "Drehspieß Hähnchenfleisch",
        items: [
            { name: "Kebab im Fladenbrot", price: "7.00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Dürüm mit Hähnchenfleisch", price: "7.00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Kebab Box – Pommes", price: "7.00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Kebab Box - Salat", price: "7.00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Käse kostet", price: "0.50€", description: "", imgSrc: "img/menu-8.jpg" },
        ],
    },
    {
        category: "Falafel",
        items: [
            { name: "Falafel Sandwich", price: "6.00€", description: "Kichererbsen Buletten in arabisches Fladenbrot mit Rüben, Tomaten, Petersilie und Sesam Sauce", imgSrc: "img/menu-8.jpg" },
            { name: "6 Falafel Teller (6 Stück) mit Salat und Sauce", price: "6.00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Falafel Teller (12 Stück) mit Salat und Sauce", price: "12.00€", description: "", imgSrc: "img/menu-8.jpg" },
        ],
    },
    {
        category: "Gerill",
        items: [
            { name: "Kafta Libanese", price: "15.00€ (1KG-50,00€)", description: "Hackfleischgrillspieß, Petersilie mit gegrillten Tomaten, Zwiebeln und Brot", imgSrc: "img/menu-8.jpg" },
            { name: "Kabab Halabi", price: "15.00€ (1KG-50,00€)", description: "Hackfleischgrillspieß mit gegrillten Tomaten, Zwiebeln und Brot", imgSrc: "img/menu-8.jpg" },
            { name: "Hänschen Kabab", price: "15,00€", description: "Hähnchenfleischgrillspieß mit Salat, Knoblauchsoße und Brot", imgSrc: "img/menu-8.jpg" },
            { name: "Kabab Shikaf", price: "18,00€ (1KG-60,00€)", description: "Lammspieß mit gegrillten Tomaten, Zwiebeln, Birwas und Brot", imgSrc: "img/menu-8.jpg" },
            { name: "Mix – Grill", price: "18,00€ (1KG-60,00€)", description: "Shish-Tawook, 2 Lammspieße mit gegrillten Tomaten, Zwiebeln und Brot", imgSrc: "img/menu-8.jpg" },
            { name: "Lammleber", price: "15,00€", description: "Lammleber mit gegrillten Tomaten, Zwiebeln, Birwas und Brot", imgSrc: "img/menu-8.jpg" },
            { name: "Shish Tawook", price: "15,00€", description: "Hähnchenbrustspieß mit Knoblauchsoße und Brot", imgSrc: "img/menu-8.jpg" },
            { name: "Chicken Wings", price: "13,00€ (1KG-45,00€)", description: "Hähnchenflügel mit Knoblauchsoße und Brotscharf", imgSrc: "img/menu-8.jpg" },
            { name: "Halbe Hähnchen gegrillt", price: "13,00€", description: "Mit Knoblauchsoße und Brot", imgSrc: "img/menu-8.jpg" },
            { name: "Ganzes Hähnchen gegrillt", price: "25,00€", description: "Mit Knoblauchsoße und Brot", imgSrc: "img/menu-8.jpg" },
            { name: "Arayes-Maria", price: "10,00€", description: "Hackfleisch im Brot mit Zitrone, Hummus und Birwas", imgSrc: "img/menu-8.jpg" },
            { name: "Dorade Fisch", price: "15,00€", description: "Gegrillte Dorade Fisch mit eingelegten Gurken, Rüben, Salat, Soße und Brot", imgSrc: "img/menu-8.jpg" },
            { name: "Lammspieß Sandwich", price: "8,00€", description: "Lammspieß mit Biwas, Hummus, eingelegte Gurken, Tomaten", imgSrc: "img/menu-8.jpg" },
            { name: "Kebab Sandwich", price: "8,50€", description: "Hackfleischgrillspieß mit Biwas, Hummus, eingelegte Gurken, Tomaten", imgSrc: "img/menu-8.jpg" },
            { name: "Lammleber Sandwich", price: "8,00€", description: "Lammleberspieß mit Biwas, Tomaten, eingelegte Gurken und Knoblauchsoße", imgSrc: "img/menu-8.jpg" },
            { name: "Shish Tawook Sandwich", price: "8,00€", description: "Hähnchenbrustspieß mit Knoblauchsoße, eingelegte Gurken und Pommes", imgSrc: "img/menu-8.jpg" },
        ],
    },
    {
        category: "Manakish",
        items: [
            { name: "Mohamara", price: "3,00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Thymian", price: "3,00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Weißkäse", price: "3,00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Hackfleisch", price: "3,00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Salami Käse", price: "3,00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Salami & Paprika", price: "3,00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Thymian & Käse", price: "3,00€", description: "", imgSrc: "img/menu-8.jpg" },
        ],
    },
    {
        category: "Menüs",
        items: [
            { name: "Broasted Halbes Hähnchen Menü", price: "10,00€", description: "Frittiertes Hähnchen mit Pommes, eingelegten Gurken & Coleslaw", imgSrc: "img/menu-8.jpg" },
            { name: "Crispy Menü Hähnchen", price: "10,00€", description: "Knuspriges Hähnchen mit Pommes, eingelegten Gurken und Coleslaw", imgSrc: "img/menu-8.jpg" },
            { name: "Chicken Nuggets Menü", price: "10,00€", description: "Gebratene Hühnerfleisch mit Knoblauchsauce, eingelegten Gurken, Pommes und Coleslaw", imgSrc: "img/menu-8.jpg" },
            { name: "Zenger Menü Hähnchen", price: "10,00€", description: "Scharfes knuspriges Hähnchen mit Pommes, eingelegten Gurken und Coleslaw", imgSrc: "img/menu-8.jpg" },
        ],
    },
    {
        category: "Pizzen Alle Pizzen mit Tomaten, Käse & Oregano ( 29cm )",
        items: [
            { name: "Pizza Margherita", price: "7.50€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza Funghi mit Champignons", price: "8.50€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza mit Mais", price: "8.50€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza mit Peperoni", price: "8.50€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza mit Paprika", price: "8.50€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza mit Rindersalami", price: "8.50€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza Schinken mit Putenschinken", price: "8.50€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza mit Oliven", price: "8.50€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza mit Artischocken", price: "9.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza mit Mozzarella", price: "9.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza mit Spinat", price: "9.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza Tonno mit Thunfisch und Zwiebeln", price: "9.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza Kebab mit Spießfleisch nach Döner", price: "9.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza Hawaii mit Putenschinken, Ananas", price: "9.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza Sucuk mit Knoblauchwurst", price: "9.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza mit Gorgonzola", price: "9.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza mit Sardellen und Oliven", price: "9.50€", imgSrc: "img/menu-8.jpg" },
            { name: "4 Jahrzeiten Pizza mit Putenschinken Rindersalami, Champignons, Artischocken", price: "10.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza Vegi mit Champignons, Artischocken, Spinat, Zwiebeln und Tomaten", price: "10.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza gemischt mit Putenschinken, Rindersalami Peperoni, Champignons, Artischocken", price: "10.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza Quatro Form Aggi mit Gorgonzola, Edamer Käse, Mozzarella, Weichkäse", price: "10.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Pizza Calzone mit Putenschinken, Rindersalami und Champignons", price: "9.00€", imgSrc: "img/menu-8.jpg" },
            { name: "Calzone Kebab mit Drehspieß oder Hackfleisch und Zwiebeln", price: "9.00€", imgSrc: "img/menu-8.jpg" },
        ],
    },
    {
        category: "Salate",
        items: [
            { name: "Tabouleh Salat", price: "6,00€", description: "Petersilie, Bulgur, Tomaten, Zwiebeln, Zitronensaft und Olivenöl", imgSrc: "img/menu-8.jpg" },
            { name: "Mozzarella Salat", price: "7,00€", description: "Gemischter Salat mit Mozzarella", imgSrc: "img/menu-8.jpg" },
            { name: "Thunfisch Salat", price: "7,00€", description: "Gemischter Salat mit Thunfisch", imgSrc: "img/menu-8.jpg" },
            { name: "Drehspieß Salat", price: "8,00€", description: "Mit Eisbergsalat, Drehspieß und Soße", imgSrc: "img/menu-8.jpg" },
            { name: "Fatoush", price: "6,00€", description: "Gurken, Tomaten, Minze, geröstetes Brot, Paprika, Radieschen, Zitronensaft und Olivenöl", imgSrc: "img/menu-8.jpg" },
        ],
    },
    {
        category: "Snack Sandwich",
        items: [
            { name: "Crispy Sandwich", price: "6,00€", description: "Hähnchenfilet, Truthahn Stücke, Cheddar Käse, Knoblauch Dip. Pommes, Salat", imgSrc: "img/menu-8.jpg" },
            { name: "Zenger Sandwich", price: "6,00€", description: "Hähnchenfilet, Truthahn Stücke, scharf, Cheddar Käse, Knoblauch Dip. Pommes, Salat", imgSrc: "img/menu-8.jpg" },
            { name: "Hamburger (Kalb) mit Pommes", price: "8,00€", description: "", imgSrc: "img/menu-8.jpg" },
            { name: "Chicken Burger (Hähnchen) Pommes, Salat & Tomaten", price: "8,00€", description: "", imgSrc: "img/menu-8.jpg" },
        ],
    },
];

const menuContainer = document.getElementById('accordionMenu');

menus.forEach((menu,index) => {
    console.log(index);
    console.log(menu);
    const section = document.createElement('div');
    section.className = "accordion-item";
  
    const titleDiv = document.createElement('div');
    titleDiv.className = "d-flex justify-content-center mb-5";
    const button = document.createElement('button');
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", `#collapse${index}`);
    if(index == 0){
        button.setAttribute("aria-expanded", "true");
    }
    else{
        button.setAttribute("aria-expanded", "false");
    }
    button.setAttribute("aria-controls", `collapse${index}`);
    const title = document.createElement('h5');
    title.className = "section-title ff-secondary text-center text-primary fw-normal";
    title.textContent = menu.category;
    titleDiv.appendChild(button);
    button.appendChild(title);
    section.appendChild(button);
    const row = document.createElement('div');
    row.className = "row g-4";

    menu.items.forEach(item => {
        const col = document.createElement('div');
        col.className = "col-lg-6";

        const itemDiv = document.createElement('div');
        itemDiv.className = "d-flex align-items-center";

        const img = document.createElement('img');
        img.className = "flex-shrink-0 img-fluid img-menu";
        img.src = item.imgSrc;
        img.alt = item.name;

        const textDiv = document.createElement('div');
        textDiv.className = "w-100 d-flex flex-column text-start ps-4";

        const itemName = document.createElement('h5');
        itemName.className = "d-flex justify-content-between border-bottom pb-2";
        itemName.innerHTML = `<span>${item.name}</span><span class="text-primary">${item.price}</span>`;

        const description = document.createElement('small');
        description.className = "fst-italic";
        description.textContent = item.description;

        textDiv.appendChild(itemName);
        textDiv.appendChild(description);
        itemDiv.appendChild(img);
        itemDiv.appendChild(textDiv);
        col.appendChild(itemDiv);
        row.appendChild(col);
    });
    const bodyMenu = document.createElement('div');
    if(index == 0){
        bodyMenu.className = "accordion-collapse collapse show";
    }
    else{
        bodyMenu.className = "accordion-collapse collapse";
    }
    bodyMenu.setAttribute("id", `collapse${index}`);
    bodyMenu.setAttribute("data-bs-parent", `#accordionMenu`);
    const bodyAccordion = document.createElement('div');
    bodyAccordion.className = "accordion-body";

    bodyMenu.appendChild(bodyAccordion);
    bodyAccordion.appendChild(row);
    section.appendChild(bodyMenu);
    menuContainer.appendChild(section);
});

