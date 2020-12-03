'use strict';

let calculate = document.querySelector('#start'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    checkbox = document.querySelector('#deposit-check'),
    inputAdditionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    showBudgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    showBudgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    showExpensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    showAdditionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    showAdditionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    showIncomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    showTargetMonthValue = document.getElementsByClassName('target_month-value')[0],
    inputSalaryAmount = document.querySelector('.salary-amount'),
    inputIncomeTitle = document.querySelectorAll('input.income-title'),
    inputExpensesTitle = document.querySelectorAll('input.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    inputAdditionalExpensesItem = document.querySelector('.additional_expenses-item'),
    inputTargetAmount = document.querySelector('.target-amount'),
    inputPeriodRange = document.querySelector('.period-select'),
    inputPeriodRangeCounter = document.querySelector('.period-amount'),
    inputIncomeItem = document.querySelectorAll('.income-items'),
    inputIncomeAmount = document.querySelectorAll('.income-amount'),
    inputExpensesAmount = document.querySelectorAll('.expenses-amount');

let regExp = /^[а-яА-Я., ]/;
let numberRegExp = /^[0-9]/;

inputIncomeTitle[0].addEventListener('input', () => {
    if (inputIncomeTitle[0].value !== '') {
        if (inputIncomeTitle[0].value[inputIncomeTitle[0].value.length - 1].match(regExp)) {
            inputIncomeTitle[0].value = inputIncomeTitle[0].value;
        } else {
            inputIncomeTitle[0].value = inputIncomeTitle[0].value.substr(0, inputIncomeTitle[0].value.length - 1);
        }
    }
});

inputAdditionalIncomeItem[0].addEventListener('input', () => {
    if (inputAdditionalIncomeItem[0].value !== '') {
        if (inputAdditionalIncomeItem[0].value[inputAdditionalIncomeItem[0].value.length - 1].match(regExp)) {
            inputAdditionalIncomeItem[0].value = inputAdditionalIncomeItem[0].value;
        } else {
            inputAdditionalIncomeItem[0].value = inputAdditionalIncomeItem[0].value.substr(0, inputAdditionalIncomeItem[0].value.length - 1);
        }
    }
});

inputAdditionalIncomeItem[1].addEventListener('input', () => {
    if (inputAdditionalIncomeItem[1].value !== '') {
        if (inputAdditionalIncomeItem[1].value[inputAdditionalIncomeItem[1].value.length - 1].match(regExp)) {
            inputAdditionalIncomeItem[1].value = inputAdditionalIncomeItem[1].value;
        } else {
            inputAdditionalIncomeItem[1].value = inputAdditionalIncomeItem[1].value.substr(0, inputAdditionalIncomeItem[1].value.length - 1);
        }
    }
});

inputExpensesTitle[0].addEventListener('input', () => {
    if (inputExpensesTitle[0].value !== '') {
        if (inputExpensesTitle[0].value[inputExpensesTitle[0].value.length - 1].match(regExp)) {
            inputExpensesTitle[0].value = inputExpensesTitle[0].value;
        } else {
            inputExpensesTitle[0].value = inputExpensesTitle[0].value.substr(0, inputExpensesTitle[0].value.length - 1);
        }
    }
});

inputIncomeAmount[0].addEventListener('input', () => {
    if (inputIncomeAmount[0].value) {
        if (inputIncomeAmount[0].value[inputIncomeAmount[0].value.length - 1].match(numberRegExp)) {
            inputIncomeAmount[0].value = inputIncomeAmount[0].value;
        } else {
            inputIncomeAmount[0].value = inputIncomeAmount[0].value.substr(0, inputIncomeAmount[0].value.length - 1);
        }
    }
});

inputExpensesAmount[0].addEventListener('input', () => {
    if (inputExpensesAmount[0].value !== '') {
        if (inputExpensesAmount[0].value[inputExpensesAmount[0].value.length - 1].match(numberRegExp)) {
            inputExpensesAmount[0].value = inputExpensesAmount[0].value;
        } else {
            inputExpensesAmount[0].value = inputExpensesAmount[0].value.substr(0, inputExpensesAmount[0].value.length - 1);
        }
    }
});

inputTargetAmount.addEventListener('input', () => {
    if (inputTargetAmount.value !== '') {
        if (inputTargetAmount.value[inputTargetAmount.value.length - 1].match(numberRegExp)) {
            inputTargetAmount.value = inputTargetAmount.value;
        } else {
            inputTargetAmount.value = inputTargetAmount.value.substr(0, inputTargetAmount.value.length - 1);
        }
    }
});



let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

inputSalaryAmount.addEventListener('input', () => {
    if (inputSalaryAmount !== '' && isNumber(inputSalaryAmount.value)) {
        calculate.removeAttribute('disabled', "true");
    }
});

if (inputSalaryAmount.value === '') {
    calculate.setAttribute('disabled', "true");
}

inputSalaryAmount.addEventListener('input', () => {
    if (inputSalaryAmount.value === '') {
        calculate.setAttribute('disabled', "true");
    }
});

let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    percentDeposit: 0,
    moneyDeposit: 0,


    start: function () {
        appData.budget = +inputSalaryAmount.value;
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();

    },
    showResult: function () {

        showBudgetDayValue.value = appData.budgetDay;
        showBudgetMonthValue.value = appData.budgetMonth;
        showExpensesMonthValue.value = appData.expensesMonth;
        showAdditionalExpensesValue.value = appData.addExpenses.join(', ');
        showAdditionalIncomeValue.value = appData.addIncome.join(', ');
        showTargetMonthValue.value = Math.ceil(appData.getTargetMonth());
        showIncomePeriodValue.value = appData.calcSavedMoney();
    },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        cloneExpensesItem.firstElementChild.value = '';
        cloneExpensesItem.lastElementChild.value = '';


        cloneExpensesItem.firstElementChild.addEventListener('input', () => {
            if (cloneExpensesItem.firstElementChild.value !== '') {
                if (cloneExpensesItem.firstElementChild.value[cloneExpensesItem.firstElementChild.value.length - 1].match(regExp)) {
                    cloneExpensesItem.firstElementChild.value = cloneExpensesItem.firstElementChild.value;
                } else {
                    cloneExpensesItem.firstElementChild.value = cloneExpensesItem.firstElementChild.value.substr(0, cloneExpensesItem.firstElementChild.value.length - 1);
                }
            }
        });

        cloneExpensesItem.lastElementChild.addEventListener('input', () => {
            if (cloneExpensesItem.lastElementChild.value !== '') {
                if (cloneExpensesItem.lastElementChild.value[cloneExpensesItem.lastElementChild.value.length - 1].match(numberRegExp)) {
                    cloneExpensesItem.lastElementChild.value = cloneExpensesItem.lastElementChild.value;
                } else {
                    cloneExpensesItem.lastElementChild.value = cloneExpensesItem.lastElementChild.value.substr(0, cloneExpensesItem.lastElementChild.value.length - 1);
                }
            }
        });

        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = inputIncomeItem[0].cloneNode(true);
        cloneIncomeItem.firstElementChild.value = '';
        cloneIncomeItem.lastElementChild.value = '';

        cloneIncomeItem.firstElementChild.addEventListener('input', () => {
            if (cloneIncomeItem.firstElementChild.value !== '') {
                if (cloneIncomeItem.firstElementChild.value[cloneIncomeItem.firstElementChild.value.length - 1].match(regExp)) {
                    cloneIncomeItem.firstElementChild.value = cloneIncomeItem.firstElementChild.value;
                } else {
                    cloneIncomeItem.firstElementChild.value = cloneIncomeItem.firstElementChild.value.substr(0, cloneIncomeItem.firstElementChild.value.length - 1);
                }
            }
        });

        cloneIncomeItem.lastElementChild.addEventListener('input', () => {
            if (cloneIncomeItem.lastElementChild.value !== '') {
                if (cloneIncomeItem.lastElementChild.value[cloneIncomeItem.lastElementChild.value.length - 1].match(numberRegExp)) {
                    cloneIncomeItem.lastElementChild.value = cloneIncomeItem.lastElementChild.value;
                } else {
                    cloneIncomeItem.lastElementChild.value = cloneIncomeItem.lastElementChild.value.substr(0, cloneIncomeItem.lastElementChild.value.length - 1);
                }
            }
        });

        inputIncomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        inputIncomeItem = document.querySelectorAll('.income-items');
        if (inputIncomeItem.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getAddExpenses: function () {
        let addExpenses = inputAdditionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getIncome: function () {
        inputIncomeItem.forEach(function (item) {

            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
          
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }

    },
    getAddIncome: function () {
        inputAdditionalIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += parseFloat(appData.expenses[key]);
        }
        return appData.expensesMonth;
    },
    getBudget: function () {
        appData.budgetDay = Math.round(appData.budget / 30);
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        return appData.budgetMonth;
    },
    getTargetMonth: function () {
        return inputTargetAmount.value / appData.getBudget();
    },
    getRangeLevel: function () {
        inputPeriodRangeCounter.textContent = inputPeriodRange.value;
    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 1200) {
            return 'У вас высокий уровень дохода';
        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
            return 'У вас средний уровень дохода';
        } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
            return 'К сожалению у вас уровень дохода ниже среднего';
        } else if (appData.budgetDay === 0) {
            return 'У вас нет дохода';
        } else if (appData.budgetDay < 0) {
            return 'Что-то пошло не так';
        }
    },
    summaryList: function () {
        console.log('Наша программа включает в себя данные:');
        for (let key in appData) {
            if (typeof appData[key] === 'number' || typeof appData[key] === 'string' && appData[key] !== '') {
                console.log(`${key} - ${appData[key]}`);
            } else if (key === 'expenses') {
                for (let key2 in appData[key]) {
                    console.log(`Обязательные расходы: ${key2}`);
                }
            }
        }
    },
    getInfoDeposit: function () {
        if (appData.deposit) {
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            while (!isNumber(appData.percentDeposit)) {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            }

            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            while (!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
        }
    },
    calcSavedMoney: function () {
        return appData.budgetMonth * inputPeriodRange.value;
    }

};

calculate.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
inputPeriodRange.addEventListener('change', appData.getRangeLevel);
inputPeriodRange.addEventListener('change', () => {
    showIncomePeriodValue.value = appData.calcSavedMoney();
});



// if (appData.getTargetMonth() > 0) {
//     console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяц/а');
// } else {
//     console.log('Цель не будет достигнута');
// }

//console.log(appData.getStatusIncome());
//appData.summaryList();


//console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
