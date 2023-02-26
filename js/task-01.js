const categoriesList = document.querySelector("ul#categories");
// console.log(categoriesList)
const categoriesItems = categoriesList.querySelectorAll("li.item");
// console.log(categoriesItems)
console.log(`Number of categories: ${categoriesItems.length}`)

categoriesItems.forEach(item => {
    const categoriesName = item.querySelector("h2").textContent;
    const categoriesElements = item.querySelectorAll("li").length;
    console.log(`Category: ${categoriesName}`);
    console.log(`Elements: ${categoriesElements}`)
});

    






