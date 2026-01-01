export const products = [
    // BURGERS (6 items)
    {
        id: 1,
        image: "../assets/img/br_5.png",
        title: "Classic Cheeseburger",
        description: "Juicy beef patty with melted cheddar cheese, fresh lettuce, tomato, and special sauce in a soft brioche bun",
        price: 129,
        category: "Burger",
        rating: 4.8,
        isNew: false
    },
    {
        id: 2,
        image: "../assets/img/br_2.png",
        title: "Crispy Chicken Burger",
        description: "Crispy fried chicken fillet with mayo, pickles, and shredded lettuce in a sesame seed bun",
        price: 149,
        category: "Burger",
        rating: 4.6,
        isNew: false
    },
    {
        id: 3,
        image: "../assets/img/br_3.png",
        title: "Double Beef Deluxe",
        description: "Two beef patties with double cheese, bacon, onion rings, and BBQ sauce",
        price: 199,
        category: "Burger",
        rating: 4.9,
        isNew: false
    },
    {
        id: 4,
        image: "../assets/img/br_4.png",
        title: "Spicy Jalapeño Burger",
        description: "Beef patty with pepper jack cheese, fresh jalapeños, and chipotle mayo",
        price: 139,
        category: "Burger",
        rating: 4.5,
        isNew: false
    },
    {
        id: 5,
        image: "../assets/img/br_5.png",
        title: "Mushroom Swiss Burger",
        description: "Beef patty topped with sautéed mushrooms and melted Swiss cheese",
        price: 159,
        category: "Burger",
        rating: 4.7,
        isNew: false
    },
    {
        id: 6,
        image: "../assets/img/br_1.png",
        title: "Veggie Supreme Burger",
        description: "Grilled vegetable patty with avocado, sprouts, and garlic aioli",
        price: 119,
        category: "Burger",
        rating: 4.4,
        isNew: false
    },

    // SHAWARMAS (6 items)
    {
        id: 7,
        image: "../assets/img/shrma_1.png",
        title: "Classic Chicken Shawarma",
        description: "Marinated chicken strips with garlic sauce, pickles, and fries wrapped in Arabic bread",
        price: 189,
        category: "Shawarma",
        rating: 4.7,
        isNew: false
    },
    {
        id: 8,
        image: "../assets/img/shrma_2.png",
        title: "Beef Shawarma Platter",
        description: "Tender beef strips served with hummus, tahini, Arabic bread, and salad",
        price: 249,
        category: "Shawarma",
        rating: 4.8,
        isNew: false
    },
    {
        id: 9,
        image: "../assets/img/shrma_3.png",
        title: "Mix Shawarma Roll",
        description: "Chicken and beef combo with garlic mayo, vegetables, and special spices",
        price: 219,
        category: "Shawarma",
        rating: 4.9,
        isNew: false
    },
    {
        id: 10,
        image: "../assets/img/shrma_4.png",
        title: "Spicy Shawarma Wrap",
        description: "Extra spicy chicken shawarma with hot sauce, jalapeños, and fries",
        price: 199,
        category: "Shawarma",
        rating: 4.6,
        isNew: false
    },
    {
        id: 11,
        image: "../assets/img/shrma_5.png",
        title: "Falafel Shawarma",
        description: "Crispy falafel balls with tahini sauce, fresh vegetables, and pickled turnips",
        price: 169,
        category: "Shawarma",
        rating: 4.5,
        isNew: false
    },
    {
        id: 12,
        image: "../assets/img/shrma_6.png",
        title: "Cheese Shawarma",
        description: "Chicken shawarma loaded with mozzarella cheese, garlic sauce, and olives",
        price: 229,
        category: "Shawarma",
        rating: 4.7,
        isNew: false
    },

    // NEW DEALS (6 items)
    {
        id: 13,
        image: "../assets/img/new_deal_1.png",
        title: "Truffle Mushroom Burger",
        description: "Premium beef with truffle mushrooms, arugula, and truffle aioli sauce",
        price: 299,
        category: "New Deal",
        rating: 4.9,
        isNew: true
    },
    {
        id: 14,
        image: "../assets/img/new_deal_2.png",
        title: "Korean BBQ Shawarma",
        description: "Korean-style bulgogi beef with kimchi, gochujang sauce, and sesame",
        price: 279,
        category: "New Deal",
        rating: 4.8,
        isNew: true
    },
    {
        id: 15,
        image: "../assets/img/new_deal_3.png",
        title: "Loaded Bacon Cheese Fries",
        description: "Crispy fries topped with melted cheese, bacon bits, and green onions",
        price: 179,
        category: "New Deal",
        rating: 4.7,
        isNew: true
    },
    {
        id: 16,
        image: "../assets/img/new_deal_4.png",
        title: "Margherita Pizza",
        description: "Wood-fired pizza with fresh mozzarella, basil, and San Marzano tomatoes",
        price: 329,
        category: "New Deal",
        rating: 4.8,
        isNew: true
    },
    {
        id: 17,
        image: "../assets/img/new_deal_5.png",
        title: "Chicken Tikka Shawarma",
        description: "Indian-inspired chicken tikka with mint chutney and onion rings",
        price: 239,
        category: "New Deal",
        rating: 4.6,
        isNew: true
    },
    {
        id: 18,
        image: "../assets/img/new_deal_6.png",
        title: "Ultimate Monster Burger",
        description: "Triple patty burger with all toppings, served with loaded fries",
        price: 399,
        category: "New Deal",
        rating: 5.0,
        isNew: true
    }
];

const findRange = () => {
    let min = products[0].price;
    let max = 0;

    products.forEach((product) => {
        if (product.price < min) min = product.price;
        if (product.price > max) max = product.price;
    });

    return { min, max };
};

export const priceRange = findRange();