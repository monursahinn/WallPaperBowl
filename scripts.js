const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

document.body.addEventListener('click', (event) => {
  const targetElement = event.target;
  if (!menu.contains(targetElement) && targetElement !== menuBtn) {
	menu.classList.remove('show-menu');
  }
});

document.addEventListener('DOMContentLoaded', () => {
    // Define your categories with their images and links
    const categories = [
        { name: 'Abstract', imgUrl: 'img/abstract.jpg', link: 'pages/abstract/abstract.html' },
		{ name: 'Animals', imgUrl: 'img/animals.jpg', link: 'pages/animals/animals.html' },
        { name: 'Apple', imgUrl: 'img/apple.jpg', link: 'pages/apple/apple.html' },
		{ name: 'Cartoons', imgUrl: 'img/cartoons.jpg', link: 'pages/cartoons/cartoons.html' },
		{ name: 'Game', imgUrl: 'img/game.jpg', link: 'pages/game/game.html' },
		{ name: 'Music', imgUrl: 'img/music.jpg', link: 'pages/music/music.html' },
		{ name: 'Nature', imgUrl: 'img/nature.jpg', link: 'pages/nature/nature.html' },
        { name: 'Various', imgUrl: 'img/various.jpg', link: 'pages/various/various.html' },
    ];

    const categoryContainer = document.getElementById('category-container');

    categories.forEach(category => {
        // Create category element
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');

        // Set background image
        const imgElement = document.createElement('img');
        imgElement.src = category.imgUrl;
        imgElement.alt = category.name;

        // Overlay element for title and hover effect
        const overlay = document.createElement('div');
        overlay.classList.add('category-overlay');
        
        // Title text
        const title = document.createElement('div');
        title.classList.add('category-title');
        title.textContent = category.name;
        
        // Append elements
        overlay.appendChild(title);
        categoryElement.appendChild(imgElement);
        categoryElement.appendChild(overlay);
        
        // Add click event to navigate to the category page
        categoryElement.addEventListener('click', () => {
            window.location.href = category.link;
        });

        categoryContainer.appendChild(categoryElement);
    });
});