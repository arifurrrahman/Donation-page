document.getElementById('home-btn').addEventListener('click', function () {
    window.location.href = 'blog.html'
})

function calculate(donatedMoney, areaTotal, subTotal, mainBalanceId, areaId) {
    subTotal -= donatedMoney
    document.getElementById(mainBalanceId).innerText = subTotal
    areaTotal += donatedMoney
    document.getElementById(areaId).innerText = areaTotal
}

function getInputValue(amountId) {
    const value=document.getElementById(amountId).value
    if(isNaN(value)){
        document.getElementById(amountId).value = ''
        return NaN
    }
    document.getElementById(amountId).value = ''
    let a = parseFloat(value)
    return a;
}

function getInputValueByInnertext(amountId) {
    let b = parseFloat(document.getElementById(amountId).innerText)
    return b;
}

function createDynamicDiv(areaId, moneyAmount){
    const text = document.getElementById(areaId).innerText
        const recordedItem = document.createElement('div')
        recordedItem.className = "rounded-lg border-2 p-2 space-y-3"

        recordedItem.innerHTML = `
    <p class="text-xl text-black p-1">${moneyAmount} Taka is Donated for ${text}</p>
    <p class="text-base text-black p-1 bg-gray-100">Date: ${new Date()}</p>
    `;
        const recordContainer = document.getElementById('history-list')
        recordContainer.insertBefore(recordedItem, recordContainer.firstChild)
    }

document.getElementById('donate-1')
    .addEventListener('click', function () {
        let donationAmount = getInputValue('amountDonated1')
        let mainBalance = getInputValueByInnertext('balance')
        let areaBalance = getInputValueByInnertext('noakhali-amount')
        if (isNaN(donationAmount) || donationAmount < 0 || donationAmount === '' || donationAmount > mainBalance || donationAmount === null ) {
            alert('Invalid Input')
            return;
        }
        calculate(donationAmount, areaBalance, mainBalance, 'balance', 'noakhali-amount')
        modal3.showModal()
        createDynamicDiv('noakhali-heading', donationAmount)
    })

document.getElementById('donate-2')
    .addEventListener('click', function () {
        let donationAmount = getInputValue('amountDonated2')
        let mainBalance = getInputValueByInnertext('balance')
        let areaBalance = getInputValueByInnertext('feni-amount')
        if (isNaN(donationAmount) || donationAmount < 0 || donationAmount === '' || donationAmount > mainBalance || donationAmount === null) {
            alert('Invalid Input')
            return;
        }
        calculate(donationAmount, areaBalance, mainBalance, 'balance', 'feni-amount')
        modal2.showModal()
        createDynamicDiv('feni-heading', donationAmount)
    })

document.getElementById('donate-3')
    .addEventListener('click', function () {
        let donationAmount = getInputValue('amountDonated3')
        let mainBalance = getInputValueByInnertext('balance')
        let areaBalance = getInputValueByInnertext('quota-amount')
        if (isNaN(donationAmount) || donationAmount < 0 || donationAmount === '' || donationAmount > mainBalance || donationAmount === null) {
            alert('Invalid Input')
            return;
        }
        calculate(donationAmount, areaBalance, mainBalance, 'balance', 'quota-amount')
        modal3.showModal()
        createDynamicDiv('quota-heading', donationAmount)
    })

document.getElementById('history-tab')
    .addEventListener('click', function () {
        document.getElementById('donation-section').classList.add('hidden')
        document.getElementById('history-list').classList.remove('hidden')
        document.getElementById('history-tab').classList.add('bg-[#B4F461]', 'hover:bg-[#B4F461]')
        document.getElementById('donation-tab').classList.remove('hover:bg-[#B4F461]', 'bg-[#B4F461]')
        document.getElementById('last-part').classList.add('hidden')
    })

document.getElementById('donation-tab')
    .addEventListener('click', function () {
        document.getElementById('donation-section').classList.remove('hidden')
        document.getElementById('history-list').classList.add('hidden')
        document.getElementById('history-tab').classList.remove('bg-[#B4F461]', 'hover:bg-[#B4F461]')
        document.getElementById('donation-tab').classList.add('bg-[#B4F461]', 'hover:bg-[#B4F461]')
        document.getElementById('last-part').classList.remove('hidden')
    })
