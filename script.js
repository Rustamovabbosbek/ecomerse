document.addEventListener('DOMContentLoaded', function () {
    const viewAllBtn = document.getElementById('viewAllBtn');
    const productsGrid = document.getElementById('productsGrid');
    const btnIcon = document.querySelector('.btn-icon');

    if (viewAllBtn) {
        let isExpanded = false;

        viewAllBtn.addEventListener('click', function () {
            isExpanded = !isExpanded;

            if (isExpanded) {
                productsGrid.classList.add('expanded');
                viewAllBtn.innerHTML = 'Hide All';
                btnIcon.name = 'chevron-up-outline';

                setTimeout(() => {
                    viewAllBtn.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 300);
            } else {
                productsGrid.classList.remove('expanded');

                viewAllBtn.innerHTML = 'View All';
                btnIcon.name = 'chevron-down-outline';
            }

            btnIcon.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', function (e) {
            if (!e.target.closest('.view-all-btn')) {
                console.log('Product clicked:', this.querySelector('.product-title').textContent);
            }
        });
    });
});

const num = document.getElementById("num")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")

let count = 0



plus.addEventListener("click", () => {
    if (count < 20) {
        count++
        num.textContent = count

    }

})

minus.addEventListener("click", () => {
    if (count > 0) {
        count--
        num.textContent = count
    }
})
