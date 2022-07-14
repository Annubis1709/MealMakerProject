const randomTodaySpecial = Math.floor(Math.random() * 6);
const menu = {
    _meal: '',
    _price: 0,
    _description: '',
    set meal(mealToCheck) {
        if(typeof mealToCheck == 'string') {
            return this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if(typeof priceToCheck == 'number') {
            return this._price = priceToCheck;
        }
    },
    set description(descriptionToCheck) {
        if(typeof descriptionToCheck == 'string') {
            return this._description = descriptionToCheck;
        }
    },
    get mainMenu() {
        if(this._meal && this._price && this.description) {
            return 'Today’s Special is Spaghetti for $5!'
        } else {
            return 'Meal, price or description was not set correctly!';
        }
    },
    _lunchSpecials: [
        {
            meal: 'Louisiana Gumbo & Po-Boy',
            price: 13.95,
            description: 'Choice of half fried catfish or shrimp po-boy & a cup of gumbo or crawfish bisque.'
        },
        {
            meal: 'Tilapia Ledeaux',
            price: 13.95,
            description: 'Blackened tilapia with sautéed shrimp, crawfish butter, spinach & butternut squash.'
        },
        {
            meal: 'Ginger Glazed Salmon',
            price: 12.95,
            description: 'Seared salmon with shrimp, sweet ginger glaze, green beans, toasted almonds & white rice.'
        },
        {
            meal: 'Moroccan Salmon',
            price: 12.95,
            description: 'Grilled salmon, shrimp, smoky tomato harissa, lemon butter, broccolini & white rice.'
        },
        {
            meal: 'Catfish with Red Beans & Rice',
            price: 11.50,
            description: 'Choice of fried or blackened catfish'
        },
        {
            meal: 'Pan-Grilled Tilapia',
            price: 13.95,
            description: 'Toasted hazelnuts & butter, with spaghetti squash.'
        }
    ],
    get todaySpecial() {
        const randomSpecialMenu = this._lunchSpecials[randomTodaySpecial];
        if (randomSpecialMenu.meal && randomSpecialMenu.price && randomSpecialMenu.description) {
            console.log('Today’s Special is:');
            for (const [key, value] of Object.entries(this._lunchSpecials[randomTodaySpecial])) {
                console.log(`${key}: ${value}`);
            }
        } else {
            console.log('Meal, price or description was not set correctly!');
        }
    },
    set mealLunchSpecial(mealToCheck) {
        if(typeof mealToCheck == 'string') {
            return this._lunchSpecials[itemMenu].meal = mealToCheck;
        }
    },
    set priceLunchSpecial(priceToCheck) {
        if(typeof priceToCheck == 'number' && typeof itemMenu == 'number') {
            return this._lunchSpecials[itemMenu].price = priceToCheck;
        }
    },
    set descripLunchSpecial(descriptionToCheck) {
        if(typeof descriptionToCheck == 'string' && typeof itemMenu == 'number') {
            return this._lunchSpecials[itemMenu].description = descriptionToCheck;
        }
    }
};

menu.meal = 'Shrimp & Grits';
menu.price = 17.75;
menu.description = 'Cheese grits, jumbo blackened shrimp, spinach, andouille sausage, cajun butter sauce and crispy onion.'
menu.todaySpecial;
//menu.mainMenu;
//console.log(menu.lunchSpecials[randomTodaySpecial]);