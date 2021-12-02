const shoppingList = [
    {
        id: 1,
        name: "lentils",
        price: 3
    },
    {
        id: 2,
        name: "granola bars",
        price: 3.5
    },
    {
        id: 3,
        name: "oat milk",
        price: 4
    },
    {
        id: 4,
        name: "cheerios",
        price: 4.5
    },
    {
        id: 5,
        name: "oranges",
        price: 5
    }
]

const addToShoppingList = (newItem) => {
    const newId = shoppingList.length + 1
    newItem.id = newId
    newItem.dateCreated = Date()
    shoppingList.push(newItem)
}

const greekYogurt = {
    name: "greek yogurt",
    price: 7.50
}

const paperTowels = {
    name: "paper towels",
    price: 12
}

const scentedCandle = {
    name: "candle",
    price: 10
}

const freshSalmon = {
    name: "salmon",
    price: 16
}

const bagOfChips = {
    name: "pringles",
    price: 5
}
addToShoppingList(greekYogurt)
addToShoppingList(paperTowels)
addToShoppingList(scentedCandle)
addToShoppingList(freshSalmon)
addToShoppingList(bagOfChips)

const expensiveItems = () => {
    let expensiveList = []
    for (const item of shoppingList) {

        if (item.price > 8) {
            expensiveList.push(item)
        }
    }
    return expensiveList
}

console.log(expensiveItems())