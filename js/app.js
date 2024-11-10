console.log('does this work')

//The cafe’s title is a bit too long. Select the #main-title id element and change the text to “Welcome to the Cozy Cafe”. Let’s also improve our page’s appearance by changing the text-align to center on the title as well.

const titleElement= document.querySelector('#main-title')
titleElement.textContent= 'Welcome to the Cozy Cafe'
titleElement.style.textAlign= 'center'

//Select the body element and change the background color to a soothing pastel shade of your choice. (If you can’t think of a color, bisque, lightsteelblue, and pink are good choices.)

const bodyElement= document.querySelector('body')
bodyElement.style.backgroundColor='bisque'

//Select the <p> element which is meant to hold the quote of the day. Update it’s content so that it displays a quote of your choice (or use this classic: “Life happens, coffee helps.”).

const paragraphElement= document.querySelector('#quote-of-the-day')
paragraphElement.textContent="Joey, let's make some wake-up juice."

//Select all elements with the class highlight-title and change their font-style to italic. Remember, you might need to iterate through a collection of elements.

const highlightElements= document.querySelectorAll('.highlight-title')
highlightElements.forEach((element) => {
    element.style.fontStyle = 'italic';
})

//Let’s add a new item to the Past Menu Items list. Create a new <li> element, set the text to “Rose Cake”, and append it to the list.

const menuElements = document.querySelector('#past-menu-items')
const newElement = document.createElement('li')
newElement.textContent = 'Rose Cake'
menuElements.appendChild(newElement)

//Select the list of Cafe Specialties and add a list item. Be sure to add content to your newly created <li></li> tags (maybe Karak Tea is on offer now?).

const cafeElements= document.querySelector('#cafe-specialties')
const newSpecial= document.createElement('li')
newSpecial.textContent='Karak Tea'
cafeElements.appendChild(newSpecial)

//Create a new blog post for a recent cafe event. You will need to create a new <div> element with the class .blog-post, a new <h3> with a relevant event title (e.g., “Karak Tea Tasting Event”), and a new <p> with some text describing the event. Make sure the new post matches the style and structure of the other blog posts. Think carefully about the order of element creation and appending.

const blogElement = document.createElement('div')
blogElement.classList.add('blog-post')

const h3Element= document.createElement('h3')
h3Element.textContent = 'KaraK tea tasting Event'
blogElement.appendChild(h3Element)

const PElement= document.createElement('p')
PElement.textContent = 'Join us for an authentic Karak Tasting experience where you can savor rich flavors and explore the art behind Bahrainis beloved tea tradition. Perfect for tea lovers and culture enthusiasts alike'
blogElement.appendChild(PElement)

const blogsSection = document.querySelector('#blogs')
blogsSection.appendChild(blogElement)







