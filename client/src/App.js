import { productsData } from './api/Api';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Blog from './pages/Blog';
import Home from './pages/Home';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Header />
      {/* <ScrollRestoration /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData
      },
      {
        path: "/blog",
        element: <Blog />,
      }
    ]
  }
])


export default function App() {
  return (
    <div className=' font-bodyFont'>
      {/* <BrowserRouter> */}
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Footer /> */}
      {/* <Layout /> */}
      {/* <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </div>
  )
}