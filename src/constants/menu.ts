export interface MenuItem {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    badges?: string[];
    quantity?: number;
}

export interface MenuCategory {
    id: number;
    name: string;
    items: MenuItem[];
}

export const menuData: MenuCategory[] = [
    {
        id: 1,
        name: "Combos",
        items: [
            {
                id: 101,
                name: "Family Feast",
                price: 29.99,
                description: "2 burgers, 2 donars, fries, and 4 drinks",
                image: "https://placekitten.com/400/300",
                badges: ["BESTSELLER", "NEW"],
                quantity: 1
            },
            {
                id: 102,
                name: "Duo Deal",
                price: 19.99,
                description: "2 burgers, 2 medium fries, 2 drinks",
                image: "https://placekitten.com/401/300",
            },
            {
                id: 103,
                name: "Student Special",
                price: 12.99,
                description: "1 burger, 1 small fries, 1 drink",
                image: "https://placekitten.com/402/300",
                badges: ["NEW"]
            },
            {
                id: 104,
                name: "Mega Box",
                price: 24.99,
                description: "1 large donar, 2 burgers, large fries, 2 drinks",
                image: "https://placekitten.com/403/300",
            },
            {
                id: 105,
                name: "Kids Combo",
                price: 9.99,
                description: "1 small burger, small fries, juice box, toy",
                image: "https://placekitten.com/404/300",
            },
            {
                id: 106,
                name: "Party Pack",
                price: 39.99,
                description: "4 burgers, 2 large donars, 2 large fries, 6 drinks",
                image: "https://placekitten.com/405/300",
                badges: ["BESTSELLER"]
            },
            {
                id: 107,
                name: "Breakfast Combo",
                price: 11.99,
                description: "1 breakfast burger, hash browns, coffee",
                image: "https://placekitten.com/406/300",
                badges: ["NEW"]
            },
            {
                id: 108,
                name: "Veggie Combo",
                price: 14.99,
                description: "1 veggie burger, 1 falafel wrap, fries, drink",
                image: "https://placekitten.com/407/300",
            }
        ]
    },
    {
        id: 2,
        name: "Burgers",
        items: [
            {
                id: 201,
                name: "Classic Cheese",
                price: 8.99,
                description: "Beef patty, cheese, lettuce, tomato, sauce",
                image: "https://placekitten.com/410/300",
                badges: ["BESTSELLER"]
            },
            {
                id: 202,
                name: "Double Trouble",
                price: 12.99,
                description: "Double beef patty, double cheese, bacon",
                image: "https://placekitten.com/411/300",
            },
            {
                id: 203,
                name: "Spicy Mexican",
                price: 10.99,
                description: "Beef patty, jalapeños, spicy sauce, cheese",
                image: "https://placekitten.com/412/300",
                badges: ["HOT"]
            },
            {
                id: 204,
                name: "Mushroom Swiss",
                price: 11.99,
                description: "Beef patty, sautéed mushrooms, swiss cheese",
                image: "https://placekitten.com/413/300",
            },
            {
                id: 205,
                name: "BBQ Bacon",
                price: 11.99,
                description: "Beef patty, bacon, BBQ sauce, onion rings",
                image: "https://placekitten.com/414/300",
                badges: ["BESTSELLER"]
            },
            {
                id: 206,
                name: "Veggie Supreme",
                price: 9.99,
                description: "Plant-based patty, fresh veggies, vegan cheese",
                image: "https://placekitten.com/415/300",
            },
            {
                id: 207,
                name: "Hawaiian",
                price: 10.99,
                description: "Beef patty, grilled pineapple, teriyaki sauce",
                image: "https://placekitten.com/416/300",
                badges: ["NEW"]
            },
            {
                id: 208,
                name: "Monster Burger",
                price: 15.99,
                description: "Triple beef patty, triple cheese, all toppings",
                image: "https://placekitten.com/417/300",
                badges: ["XIT"]
            }
        ]
    },
    {
        id: 3,
        name: "Donars",
        items: [
            {
                id: 301,
                name: "Classic Chicken Donar",
                price: 8.99,
                description: "Grilled chicken, fresh veggies, garlic sauce",
                image: "https://placekitten.com/418/300",
                badges: ["BESTSELLER"]
            },
            {
                id: 302,
                name: "Beef Donar",
                price: 9.99,
                description: "Seasoned beef, mixed salad, special sauce",
                image: "https://placekitten.com/419/300",
            },
            {
                id: 303,
                name: "Mixed Meat Donar",
                price: 11.99,
                description: "Chicken and beef mix, all toppings",
                image: "https://placekitten.com/420/300",
                badges: ["XIT"]
            },
            {
                id: 304,
                name: "Falafel Donar",
                price: 8.99,
                description: "Crispy falafel, hummus, tahini sauce",
                image: "https://placekitten.com/421/300",
            },
            {
                id: 305,
                name: "Spicy Chicken Donar",
                price: 9.99,
                description: "Spicy grilled chicken, chili sauce",
                image: "https://placekitten.com/422/300",
                badges: ["HOT"]
            },
            {
                id: 306,
                name: "Jumbo Donar",
                price: 13.99,
                description: "Extra large portion, choice of meat, all toppings",
                image: "https://placekitten.com/423/300",
            },
            {
                id: 307,
                name: "Cheese Donar",
                price: 10.99,
                description: "Choice of meat, melted cheese, special sauce",
                image: "https://placekitten.com/424/300",
                badges: ["NEW"]
            },
            {
                id: 308,
                name: "Veggie Donar",
                price: 8.99,
                description: "Grilled vegetables, hummus, fresh herbs",
                image: "https://placekitten.com/425/300",
            },
            {
                id: 309,
                name: "Custom Donar",
                price: 8.99,
                description: "Customize your own donar",
                image: "https://placekitten.com/425/300",
            }
        ]
    },
    {
        id: 4,
        name: "Drinks",
        items: [
            {
                id: 401,
                name: "Classic Cola",
                price: 2.99,
                description: "Refreshing cola with ice",
                image: "https://placekitten.com/426/300",
            },
            {
                id: 402,
                name: "Fresh Lemonade",
                price: 3.99,
                description: "Homemade lemonade with mint",
                image: "https://placekitten.com/427/300",
                badges: ["BESTSELLER"]
            },
            {
                id: 403,
                name: "Mango Lassi",
                price: 4.99,
                description: "Traditional yogurt drink with mango",
                image: "https://placekitten.com/428/300",
                badges: ["NEW"]
            },
            {
                id: 404,
                name: "Ayran",
                price: 2.99,
                description: "Traditional yogurt drink",
                image: "https://placekitten.com/429/300",
            },
            {
                id: 405,
                name: "Orange Juice",
                price: 3.99,
                description: "Freshly squeezed orange juice",
                image: "https://placekitten.com/430/300",
            },
            {
                id: 406,
                name: "Mineral Water",
                price: 1.99,
                description: "Still or sparkling water",
                image: "https://placekitten.com/431/300",
            },
            {
                id: 407,
                name: "Milkshake",
                price: 4.99,
                description: "Choice of vanilla, chocolate, or strawberry",
                image: "https://placekitten.com/432/300",
                badges: ["BESTSELLER"]
            },
            {
                id: 408,
                name: "Ice Tea",
                price: 2.99,
                description: "Peach or lemon flavored ice tea",
                image: "https://placekitten.com/433/300",
            }
        ]
    }
];
