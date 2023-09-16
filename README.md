# SEO-detector

SEO-detector is a web application built with React that allows users to analyze the health of a website by providing its URL. It leverages the DataForSEO API to gather essential SEO metrics and provides users with valuable insights into the website's performance.
## Features

- **Website Health Analysis**: Input a website URL, and SEO-detector will retrieve important SEO metrics.
- **Key Metrics**: View key SEO metrics, including domain authority, backlinks, organic search traffic, and more.
- **User-Friendly Interface**: The user interface is intuitive and easy to use, making it accessible for both beginners and SEO experts.
- **Real-Time Data**: DataForSEO API calls are made in real-time to ensure up-to-date information.

## Getting Started

Follow these steps to set up and run the SEO-detector project on your local machine.

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [Yarn](https://yarnpkg.com/) (v1 or higher)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/urvashitech/SEO-detector.git

## Configuration

To use the DataForSEO API, you need to set up your API credentials.

1. Sign up for a DataForSEO API account: [DataForSEO API Signup](https://dataforseo.com/)

2. Once you have your API credentials (API key and secret key), create a `.env` file in the project root directory:

   ```plaintext
   REACT_APP_DATAFORSEO_API_KEY=your_api_key
   REACT_APP_DATAFORSEO_SECRET_KEY=your_secret_key

## Usage

Start the development server:

```bash
npm start
# or
yarn start

- Open your web browser and navigate to http://localhost:3000.

- Enter a website URL in the input field and click the "Get a free SEO Audit Report" button.

- SEO-detector will make an API call to DataForSEO and display the SEO metrics for the provided URL.

