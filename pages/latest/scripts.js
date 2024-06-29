document.addEventListener('DOMContentLoaded', () => {
    const wallpapersPerPage = 16;
    const totalWallpapers = 48; 
    const totalPages = Math.ceil(totalWallpapers / wallpapersPerPage);

    let currentPage = 1;

    // Generate the list of wallpaper image paths from the local folder
    const wallpapers = Array.from({ length: totalWallpapers }, (_, i) => ({
        id: i + 1,
        thumbUrl: `wallpapers/latest_${i + 1}.jpg`, 
        fullUrl: `wallpapers/latest_${i + 1}.jpg` 
    }));

    const wallpaperContainer = document.getElementById('wallpaper-container');
    const paginationContainer = document.getElementById('pagination');

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-content');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementById('close-modal');

    function renderWallpapers(page) {
        wallpaperContainer.innerHTML = '';
        const start = (page - 1) * wallpapersPerPage;
        const end = start + wallpapersPerPage;
        const wallpapersToShow = wallpapers.slice(start, end);

        wallpapersToShow.forEach(wallpaper => {
            const wallpaperElement = document.createElement('div');
            wallpaperElement.classList.add('wallpaper');
            wallpaperElement.style.backgroundImage = `url(${wallpaper.thumbUrl})`;

            wallpaperElement.addEventListener('click', () => {
                modal.style.display = 'block';
                modalImg.src = wallpaper.fullUrl;
                captionText.textContent = `Wallpaper ${wallpaper.id}`;
            });

            const overlay = document.createElement('div');
            overlay.classList.add('wallpaper-overlay');
            overlay.textContent = `Click to Enlarge`;

            wallpaperElement.appendChild(overlay);
            wallpaperContainer.appendChild(wallpaperElement);
        });
    }

    function renderPagination() {
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.classList.add('pagination-button');
            button.textContent = i;
            button.addEventListener('click', () => {
                currentPage = i;
                renderWallpapers(currentPage);
                updatePaginationButtons();
            });
            paginationContainer.appendChild(button);
        }
    }

    function updatePaginationButtons() {
        const buttons = paginationContainer.querySelectorAll('.pagination-button');
        buttons.forEach((button, index) => {
            if (index + 1 === currentPage) {
                button.style.backgroundColor = '#333';
                button.style.color = '#fff';
            } else {
                button.style.backgroundColor = '#fff';
                button.style.color = '#333';
            }
        });
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    renderWallpapers(currentPage);
    renderPagination();
    updatePaginationButtons();
});