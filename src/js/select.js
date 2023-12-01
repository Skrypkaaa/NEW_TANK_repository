
const MenuOption = document.querySelector('.custom-select-ctg');

const MenuSopts = document.querySelector('.custom-select-sort');

document.addEventListener('click', function (event) {
    const isClickInsideMenuOption = MenuOption.contains(event.target);
    const isClickInsideMenuSopts = MenuSopts.contains(event.target);

    if (!isClickInsideMenuOption) {
        MenuOption.classList.remove('active');
    }

    if (!isClickInsideMenuSopts) {
        MenuSopts.classList.remove('active');
    }
    });
    
    document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
        MenuOption.classList.remove('active');
        MenuSopts.classList.remove('active');
    }
    });
    