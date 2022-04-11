async function getCategories() {
    let response = await fetch('https://jservice.io/api/categories?count=4&offset=30');
    let data = await response.json();
    return data;
}

function getCategoryHml(category) {
    return  `
        <div class="my-category-title">${category.title}</div>
        <div class="my-category-clue" style="grid-row-start:2">$100</div>
        <div class="my-category-clue" style="grid-row-start:3">$200</div>
        <div class="my-category-clue" style="grid-row-start:4">$300</div>
        <div class="my-category-clue" style="grid-row-start:5">$400</div>
    `
}

getCategories().then(categories => {
    console.log(categories);
    document.body.innerHTML = `
        <div class="board">
            ${categories.map(getCategoryHml).join('')}
        </div>
    `
});