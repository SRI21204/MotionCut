document.addEventListener('DOMContentLoaded', function () {

const pricingOptions = document.querySelectorAll('.pricing-option');

const summary = document.getElementById('selected-plans');

const pricingInfo = document.getElementById('pricing-info');



pricingOptions.forEach(option => {

    const checkbox = option.querySelector('input');



    checkbox.addEventListener('change', function () {

        updateSummary();

    });

});



function updateSummary() {

    const selectedPlans = [];

    const selectedPrices = [];

    const selectedAdvantages = [];



    pricingOptions.forEach(option => {

        const checkbox = option.querySelector('input');

        if (checkbox.checked) {

            selectedPlans.push(option.getAttribute('data-plan'));

            selectedPrices.push(option.getAttribute('data-price'));



            const advantagesList = option.querySelectorAll('.advantages li');

            advantagesList.forEach(advantage => {

                selectedAdvantages.push(advantage.textContent);

            });

        }

    });



    if (selectedPlans.length > 0) {

        summary.textContent = `Selected Plans: ${selectedPlans.join(', ')}`;

        const totalPrice = selectedPrices.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

        pricingInfo.innerHTML = `<p>Total Price: ₹${totalPrice.toFixed(2)}</p>

                                 <p>Advantages:</p>

                                 <ul>${selectedAdvantages.map(advantage => `<li>${advantage}</li>`).join('')}</ul>`;

    } else {

        summary.textContent = 'No plans selected';

        pricingInfo.innerHTML = '';

    }

}

});
