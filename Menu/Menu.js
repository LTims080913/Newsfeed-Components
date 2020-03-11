/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out', 
  'Pokemon'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
function menuMaker(menuItems){

  let menu = document.createElement('div');
  menu.classList.add('menu');
  let list = document.createElement('ul');

  // let item1 = document.createElement('li');
  // let item2 = document.createElement('li');
  // let item3 = document.createElement('li');
  // let item4 = document.createElement('li');
  // let item5 = document.createElement('li');
  // let item6 = document.createElement('li');

  // item1.textContent = menuItems[0];
  // item2.textContent = menuItems[1];
  // item3.textContent = menuItems[2];
  // item4.textContent = menuItems[3];
  // item5.textContent = menuItems[4];
  // item6.textContent = menuItems[5];


  // list.appendChild(item1);
  // list.appendChild(item2);
  // list.appendChild(item3);
  // list.appendChild(item4);
  // list.appendChild(item5);
  // list.appendChild(item6);
  menu.appendChild(list);

 menuItems.forEach(item => {
   let menuItem = document.createElement('li');
   
   menuItem.textContent = item;

   list.appendChild(menuItem)

 });

// for (let i = 0; i < menuItems.length; i++){
//   let menuItem = menuMaker(menuItems[i]);
//   list.appendChild(menuItem);
// }

let menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', (e) => {
  menu.classList.toggle('menu--open');
})


  return menu
}

const header = document.querySelector('.header');
console.log(header);
header.appendChild(menuMaker(menuItems));