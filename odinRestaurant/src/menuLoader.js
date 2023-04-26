import './style.css';

export function menuLoad(parent) {
    const latteCard = new menuItem('Latte', '$4');
    const cappucinnoCard = new menuItem('Cappuccino', '$3.50');
    const dripCard = new menuItem('Drip Coffee', '$1.50');

    const menu = document.createElement('div');
    menu.classList.add('menu');
    parent.appendChild(menu);

    const menuSign = document.createElement('p');
    menuSign.textContent = 'Menu';
    menu.appendChild(menuSign);

    latteCard.renderItem(menu);
    cappucinnoCard.renderItem(menu);
    dripCard.renderItem(menu);
}

const menuItem = function(name, price) {
    this.name = name;
    this.price = price;

    this.renderItem = function(parent) {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');
        parent.appendChild(menuCard);
        
        const itemName = document.createElement('p');
        itemName.textContent = name;
        itemName.classList.add('p-txt');
        menuCard.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.textContent = price;
        itemPrice.classList.add('p-txt');
        menuCard.appendChild(itemPrice);
    }
}