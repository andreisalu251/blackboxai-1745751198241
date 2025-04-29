
Built by Andrei S, John P, Justin G
ver 2.1 TIP MANILA 2025
---

```markdown
# BYD Cars Philippines Website

## Project Overview

The BYD Cars Philippines website is designed to showcase a range of electric vehicles and hybrid options offered by BYD. It provides users with essential information regarding different vehicle models, a savings calculator, blog entries, frequently asked questions, and more. The website is built with responsive design principles, ensuring an optimal experience on both desktop and mobile devices.

## Installation

To run this project locally, you can simply clone the repository and open the `index.html` file in your web browser:

```bash
git clone [repository-url]
cd [project-directory]
open index.html  # For macOS
start index.html  # For Windows
```

Alternatively, you can host this static website using a local server or deploy it to a hosting service.

## Usage

You can explore the different sections of the website, including:

- Vehicle Listings
- Savings Calculator
- Blog Posts
- FAQs
- Quick Links to important resources like dealerships and charging stations

To navigate between different sections, click on the links provided in the header and footer.

## Features

- **Responsive Design**: Adaptable layout for both desktop and mobile views.
- **Cookie Consent Banner**: A notification for cookie usage compliance.
- **Vehicle Information Cards**: Detailed display of BYD vehicles with images, descriptions, and pricing.
- **Savings Calculator**: An interactive tool for users to compute potential savings with BYD vehicles.
- **Accordion FAQ**: Conveniently organized frequently asked questions with toggle functionality for better user experience.
- **Blog Section**: Updates on the latest news and promotions from BYD.

## Dependencies

The project uses the following dependencies as specified in the `index.html` file:

- **Tailwind CSS**: A utility-first CSS framework for creating custom designs.
  
```html
<script src="https://cdn.tailwindcss.com"></script>
```

- **Font Awesome**: For scalable vector icons.
  
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
```

- **Google Fonts**: For utilizing custom web fonts.
  
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## Project Structure

The project consists of the following files:

```
/project-directory
│
├── index.html             # Main HTML file for the website
└── main.js                # JavaScript file containing functionality for cookie consent, FAQ accordion, and form validation
```

### Code Files

- **index.html**: Contains the structure of the website, including headers, sections, and footers.
- **main.js**: Holds JavaScript functionalities for cookie consent management, FAQ accordion toggling, form validation, and image error handling.

Feel free to explore the project and contribute to its development!

```