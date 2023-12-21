var potIcon = document.querySelector('.stockPot')
var selectHdr = document.querySelector('.selectHeader')
var selectTxt = document.querySelector('.selectText')
var radioButtons = document.getElementsByName('userSelect')
var reset = document.querySelector('.reset')
var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies']
var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza']
var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
]

reset.addEventListener('click',resetSelection)
for(var i=0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click',radioSelect)
}

function radioSelect(event) {
    potIcon.classList.add('hidden')
    selectHdr.classList.remove('hidden')
    selectTxt.classList.remove('hidden')
}

function randomIntGen(max) {
    console.log(Math.floor(Math.random() * max))
}

function resetSelection() {
    potIcon.classList.remove('hidden')
    selectHdr.classList.add('hidden')
    selectTxt.classList.add('hidden')
}