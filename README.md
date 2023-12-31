
# Video Search App

This is a simple React application that allows users to search for videos on YouTube using the YouTube Data API. Users can enter search terms, and the app will display a list of videos from a specified YouTube channel that match the search criteria.

## Features

- Search for videos by name.
- Display video thumbnails and titles.
- Navigate through search results using pagination.

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

### Prerequisites

You will need Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository

   ```bash
   git clone [repository_url]

   2 .Navigate to the project directory
   cd video-search

  3.Install the dependencies:
   npm install
  4. Obtain a YouTube Data API key:

-Go to the Google Cloud Console.
-Create a new project or use an existing one.
-Enable the YouTube Data API v3 for your project.
-Create credentials and generate an API key.
-Replace the API_KEY and CHANNEL_ID values in the VideoSearch.jsx file with your API key and channel ID.

## Usage

1. Start the development server:
npm start

2. Open your web browser and navigate to <http://localhost:3000> to use the Video Search app.

## Dependencies

This project uses the following dependencies:

axios for making HTTP requests.
react and react-dom for building the user interface.
react-router-dom for routing within the app.
@testing-library/react and related packages for testing.

## Scripts

npm start: Starts the development server.
npm build: Builds the production version of the app.
npm test: Runs tests using Jest.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Contributions are welcome!License
This project is licensed under the MIT License.

## License

This project is licensed under the MIT License.
Please replace `[repository_url]` with the actual URL of your repository.

Remember to provide more details if needed, and ensure that all the information is accurate and up-to-date before adding the `README.md` to your project repository.
