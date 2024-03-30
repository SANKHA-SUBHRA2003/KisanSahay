let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expnese-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if(date === '') {
        alert('Please select a date');
        return;
    }
    expenses.push({ category, amount, date });

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        const index = Array.from(newRow.parentNode.children).indexOf(newRow);
        const expense = expenses[index];

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expenses.splice(index, 1);
        expensesTableBody.removeChild(newRow);
        
        updateChart(); // Update chart after deleting expense
    });

    categoryCell.textContent = category;
    amountCell.textContent = amount;
    dateCell.textContent = date;
    deleteCell.appendChild(deleteBtn);

    updateChart(); // Call updateChart function after adding expense
});

// Function to create and update the expenses chart
function updateChart() {
    const categories = {};
    for (const expense of expenses) {
        if (categories[expense.category]) {
            categories[expense.category] += expense.amount;
        } else {
            categories[expense.category] = expense.amount;
        }
    }

    const chartLabels = Object.keys(categories);
    const chartData = Object.values(categories);

    // If chart is not initialized yet, create a new chart
    if (!window.myChart) {
        const ctx = document.getElementById('expenses-chart').getContext('2d');
        window.myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: chartLabels,
                datasets: [{
                    label: 'Expenses',
                    data: chartData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                }
            }
        });
    } else {
        // Update existing chart data
        window.myChart.data.labels = chartLabels;
        window.myChart.data.datasets[0].data = chartData;
        window.myChart.update();
    }
}

// Initial chart creation
updateChart();
