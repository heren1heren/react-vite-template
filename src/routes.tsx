import App, { ErrorPage } from './router-template';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },

  // {
  //   path: 'homePage', // new element
  //   element: <HomePage />,
  // },
];
export default routes;
