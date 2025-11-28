# Your Movie Pal v1

This is a web application created with React and Vite that allows users to discover movies. It uses the [The Movie Database (TMDb)](https://www.themoviedb.org/) API to fetch movie data.

## Features

- Discover popular, top-rated, and upcoming movies.
- Search for movies.
- View movie details, including trailers and cast.
- Browse movies by category.

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) for routing.
- [TanStack Query](https://tanstack.com/query/v5) for data fetching and caching.
- [Axios](https://axios-http.com/) for making HTTP requests.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Swiper](https://swiperjs.com/) for carousels.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/your-movie-pal-v1.git
   ```
2. Navigate to the project directory:
    ```bash
    cd your-movie-pal-v1
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

This project requires API credentials from The Movie Database (TMDb).

1. Create a `.env` file in the root of the project.
2. Add the following environment variables to the `.env` file:

    ```
    VITE_TMBD_API_KEY=your_tmdb_api_key
    VITE_TMBD_ACCESS_TOKEN=your_tmdb_access_token
    ```

    You can get your API key and access token by creating an account on the [TMDb website](https://www.themoviedb.org/signup).

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Serves the production build locally.

## Project Structure

The project structure is as follows:

```
/src
|-- /assets
|-- /components
|-- /config
|-- /hooks
|-- /layouts
|-- /lib
|-- /pages
|-- /routes
|-- /services
|-- /styles
|-- App.jsx
|-- main.jsx
```

- **`src/`**: Contains the main source code of the application.
- **`src/components/`**: Contains reusable UI components.
- **`src/pages/`**: Contains the main pages of the application.
- **`src/services/`**: Contains the services for fetching data from the API.
- **`src/styles/`**: Contains the global styles.

## Deployment

The project can be deployed to any static site hosting service, such as Netlify, Vercel, or GitHub Pages. The `npm run build` command will generate a `dist` directory with the production-ready files.
