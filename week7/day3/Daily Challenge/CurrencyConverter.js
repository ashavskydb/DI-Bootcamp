const apiKey = '09623e339f89cb719783d39f';
const supportedCurrenciesUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;

const fromCurrencySelect = document.getElementById('from');
const toCurrencySelect = document.getElementById('to');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
const convertBtn = document.getElementById('convert-btn');
const switchBtn = document.getElementById('switch-btn');
const sumDiv = document.getElementById('sum');

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}. Status: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        throw error;
    }
}

async function fetchCurrencies() {
    try {
        const data = await fetchData(supportedCurrenciesUrl);
        data.supported_codes.forEach(currency => {
            fromCurrencySelect.appendChild(createOption(currency));
            toCurrencySelect.appendChild(createOption(currency));
        });
    } catch (error) {
        console.error(error.message);
    }
}

function createOption([key,value]) {
    const option = document.createElement("option");
    option.value = key;
    option.text = key + " " + value;
    return option;
  }

async function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(amountInput.value);

    try {
        const data = await fetchData(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`);
        const convertedAmount = data.result === 'success' ? data.conversion_result.toFixed(2) : 'Error';
        resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        console.error(`Error converting currency: ${error.message}`);
    }
}

async function countAmount() {
    const from = fromCurrencySelect.value;
    const to = toCurrencySelect.value;
    const convert = parseFloat(amountInput.value);

    try {
        const obj = await fetchData(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`,{
            method: 'GET',
            cors: 'no-cors',
            // headers: {
            //     'Access-Control-Allow-Origin':'*'
            // }
        });
        const toConversion = obj.conversion_rates[to];
        sumDiv.innerHTML = `Amount: ${convert * toConversion} ${to}`;
    } catch (error) {
        console.error(`Error counting amount: ${error.message}`);
    }
}

function switchCurrencies() {
    [fromCurrencySelect.value, toCurrencySelect.value] = [toCurrencySelect.value, fromCurrencySelect.value];
    if (resultDiv.textContent) convertCurrency();
    else countAmount();
}

fetchCurrencies();

convertBtn.addEventListener('click', convertCurrency);
switchBtn.addEventListener('click', switchCurrencies);
amountInput.addEventListener('input', countAmount);
toCurrencySelect.addEventListener('change', countAmount);
fromCurrencySelect.addEventListener('change', countAmount);
switchBtn.addEventListener('click', switchCurrencies);


