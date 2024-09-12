const { randomNames } = require('./randomNames')
const { domains, words } = require('./randomEmailsData')

const { getRandomInt } = require('./utils')

const generateRandomName = ({ gender } = {}) => {

    const randomGender = gender || (Math.random() > 0.5 ? 'male' : 'female')

    const names = randomNames[randomGender].firstNames
    const lastnames = randomNames.lastNames

    return `${names[getRandomInt(0, names.length - 1)]} ${lastnames[getRandomInt(0, lastnames.length - 1)]}`

}

const generateEmail = ({ name, lastname } = {}) => {

    const firstWord = name || words[getRandomInt(0, words.length - 1)]
    const secondWord = lastname || words[getRandomInt(0, words.length - 1)]

    const thirdWord = Math.random() > 0.5 ? getRandomInt(1, 1000).toString() : ''

    const email = `${firstWord.toLowerCase()}.${secondWord.toLowerCase()}${thirdWord}@${domains[getRandomInt(0, domains.length - 1)]}`

    return email

}

const generatePhone = ({ counntry } = {}) => {

    let phone = ''

    switch (counntry) {
        case 'BY':
            const codesBY = ['33', '29', '25', '44']
            phone = `+375${codesBY[getRandomInt(0, codesBY.length - 1)]}${getRandomInt(1000000, 9999999)}`

            break

        case 'RU':
            const codesRU = ['495', '499', '496', '498']
            phone = `+7${codesRU[getRandomInt(0, codesRU.length - 1)]}${getRandomInt(1000000, 9999999)}`

            break

        case 'US':
            phone = `+1${getRandomInt(200, 999)}${getRandomInt(1000000, 9999999)}`

            break
        default:
            phone = `+${getRandomInt(100000000, 999999999)}`
            break
    }

    return phone

}

const generateDate = ({ from, to }) => {
    const fromDate = new Date(from).getTime()
    const toDate = new Date(to).getTime()

    const randomTime = fromDate + Math.random() * (toDate - fromDate)

    const randomDate = new Date(randomTime)

    return randomDate.toISOString().split('T')[0]
}

module.exports = { generateRandomName, generateEmail, generateDate, generatePhone, getRandomInt }