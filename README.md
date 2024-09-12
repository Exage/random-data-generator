# Random Data Generator

This project is a simple random data generator designed to generate random names, emails, phone numbers, and dates for various testing purposes. The project contains four main functions: `generateRandomName`, `generateEmail`, `generatePhone`, and `generateDate`.

## Usage

To use the random data generator in your project, import the functions from the module:

### Generate Random Name

The `generateRandomName` function generates a random first and last name based on gender. If the gender is not specified, it randomly picks between male and female names.

```js
const randomName = generateRandomName({ gender: 'male' })
console.log(randomName) // Example output: "John Smith"
```

- **gender** (optional): 'male' or 'female'. Defaults to random if not specified.

### Generate Email

The `generateEmail` function generates an email address from the name and last name. If they are not provided, it picks random words to form the email.

```js
const email = generateEmail({ name: 'john', lastname: 'doe' })
console.log(email) // Example output: "john.doe123@gmail.com"
```

- **name** (optional): First part of the email (defaults to random word).
- **lastname** (optional): Second part of the email (defaults to random word).

### Generate Phone

The `generatePhone` function generates a random phone number based on the country code provided. It supports Belarus (BY), Russia (RU), and the United States (US). If no country is specified, a random international number is generated.

```js
const phone = generatePhone({ country: 'US' })
console.log(phone) // Example output: "+17771234567"
```

- **country** (optional): 'BY', 'RU', 'US'. Defaults to a random international number if not specified.

### Generate Date

The `generateDate` function generates a random date between two specified dates.

```js
const randomDate = generateDate({ from: '1990-01-01', to: '2023-12-31' })
console.log(randomDate) // Example output: "2005-07-15"
```

- **from** (required): Start date in 'YYYY-MM-DD' format.
- **to** (required): End date in 'YYYY-MM-DD' format.

## Functions

- `generateRandomName({ gender })`: Returns a random name.
- `generateEmail({ name, lastname })`: Returns a random email.
- `generatePhone({ country })`: Returns a random phone number.
- `generateDate({ from, to })`: Returns a random date.
- `getRandomInt(min, max)`: A utility function to generate a random integer between `min` and `max`.

## License

This project is licensed under the MIT License.
