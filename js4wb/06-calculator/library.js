/* library.js
=====================================================
Description:
Function for calculating Mortgage.
===================================================== */
'use strict';

function doCalculator() {
    const form = document.querySelector('form#data');
    const formFieldNames = ['principal', 'term', 'frequency', 'rate'];
    form.elements['calculate'].onclick = processForm;

    restorePreviousInputValues();

    function restorePreviousInputValues() {
        if (localStorage.getItem('data')) {
            formFieldNames.forEach(item => {
                form.elements[item].value = localStorage.getItem(item);
            });
        }
    }

    function processForm(event) {
        // Stop the default behavior of button - do not submit and reload the form.
        event.preventDefault();

        const data = initInputDataFromForm();

        // Calculate and Display
        const repaiment = calculateRepayment(data);
        const total = calculateTotalPayments(repaiment, data);
        const formatCurrency = Intl.NumberFormat(
            'ru-RU', 
            {style: 'currency', currency: 'rub'}
        ).format;
        const result = `
            Repaiment: ${formatCurrency(repaiment.toFixed(2))}
            <br>
            Total: ${formatCurrency(total.toFixed(2))}`;
        form.elements['result'].innerHTML = result;

        storeInputValues();

        function initInputDataFromForm() {
            const data = {}
            formFieldNames.forEach(item => {
                data[item] = getFloatAndFixElementValue(item);
            })
            return data;
        }

        function getFloatAndFixElementValue(elementName) {
            const value = form.elements[elementName].value.trim();
            const parsed = parseFloat(value) || 0
            form.elements[elementName].value = parsed;
            return parsed;
        }

        function calculateRepayment(data) {
            const p = data.principal;
            const n = data.term * data.frequency;
            const r = data.rate / data.frequency / 100;
            const tmp = (1 + r)**n
            const repaiment = p * r * tmp / (tmp - 1);
            return repaiment;
        }

        function calculateTotalPayments(repayment, data) {
            return repayment * data.term * data.frequency;
        }

        function storeInputValues() {
            localStorage.setItem('data', true);
            formFieldNames.forEach(item => {
                localStorage.setItem(item, data[item]);
            })
        }
    }
}

