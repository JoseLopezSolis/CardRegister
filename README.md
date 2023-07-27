# Card User Registration UI/UX & Frontend Validations

This project is a web application built using React and Vite, designed to enable users to register credit/debit cards and securely store their information. With this application, users can conveniently manage their card details and have them readily accessible for future use. The goal is to provide a user-friendly interface for card registration while ensuring the security and privacy of the user's sensitive data.

<img src='./src/assets/design/desktop-design.jpg'>
<img src='./src/assets/design/active-states.jpg'>
<img src='./src/assets/design/complete-state-desktop.jpg'>

<img src='./src/assets/design/mobile-design.jpg'>
<img src='./src/assets/design/complete-state-mobile.jpg'>

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the project, follow the instructions below.

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js (https://nodejs.org) - LTS version recommended
- npm (comes with Node.js) or yarn (https://yarnpkg.com) - package manager

### Installation

1. Clone this repository to your local machine using:

2. Navigate to the project directory:

3. Install project dependencies:

If you are using npm:

### Development Server

To run the project locally for development, use the following commands:

If you are using npm:

```bash
npm run dev
```

The development server should start, and the project will be accessible at `http://localhost:5173` in your web browser.

## Usage

The purpose of this project is to provide a user-friendly form for filling out credit/debit card information and adding it to the page. Here's how to use the project and an overview of its functionalities:

1. **Card Form:**

   - The application presents a card form that allows the user to enter essential card details such as cardholder name, card number, expiration date, and CVV/CVC.
   - The form may also include additional fields like the card type (Visa, MasterCard, etc.) or a postal code for enhanced security.

2. **Card Registration:**

   - Once the user fills out the card form with the necessary information, they can submit the form to register their card.
   - The application will validate the input data to ensure that all required fields are filled correctly.

3. **Error Handling:**

   - If there are any errors in the form submission (e.g., invalid card number, expired card, incomplete fields), the application will display appropriate error messages to guide the user.

4. **UI/UX:**

   - Highlight any user interface features that enhance the user experience, such as input validation in real-time, clear instructions, and intuitive design.

5. **Integration:**

   - If relevant, explain how this card form can be integrated into other parts of the application or used as a standalone component.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to submit a pull request. Please make sure to follow the [contributing guidelines](CONTRIBUTING.md).

## License

This project currently does not have a specific license. All rights are reserved.

---

Thank you for using our project! If you encounter any problems or have questions, please feel free to reach out to us or open an issue on GitHub. Happy coding!
