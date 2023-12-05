import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import useAuthStore from './store/auth';

import Home from './pages/home';
import WhyConsX from './pages/whyconsx';
import Terms from './pages/terms';
import Privacy from './pages/privacy';

import ScrollToTop from './component/ScrollTop';
import Blogs from './pages/blogs';
import Blog from './pages/blog';

import AddBlogPage from './pages/AddBlog';

import AdminBlogs from './pages/AdminBlogs';
import AdminUsers from './pages/AdminUsers';
import AddUser from './pages/AdminAddUser';
import AdminAddBlog from './pages/AdminAddBlog';
import AdminEditBlog from './pages/AdminEditBlog';

import User from './pages/user';
import EditBlogPage from './pages/EditBlog';
import AdminProfile from './pages/AdminProfile';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const handleLogin = useAuthStore((state) => state.handleLogin);

  useEffect(() => {
    handleLogin();
  }, [handleLogin]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />} />

          <Route exact path='/home' render={(props) => <Home {...props} />} />
          <Route path='/why-consx' render={(props) => <WhyConsX {...props} />} />
          <Route path='/terms' render={(props) => <Terms {...props} />} />
          <Route path='/privacy' render={(props) => <Privacy {...props} />} />

          <Route path='/blogs' render={(props) => <Blogs {...props} />} />
          <Route path='/blog/new' render={(props) => <AddBlogPage {...props} />} />
          <Route path='/blog/edit/:id' render={(props) => <EditBlogPage {...props} />} />
          <Route path='/blog/:id' render={(props) => <Blog {...props} />} />

          <Route path='/admin/blogs' render={(props) => <AdminBlogs {...props} />} />
          <Route path='/admin/blog/new' render={(props) => <AdminAddBlog {...props} />} />
          <Route path='/admin/blog/edit/:id' render={(props) => <AdminEditBlog {...props} />} />

          <Route path='/admin/users' render={(props) => <AdminUsers {...props} />} />
          <Route path='/admin/user/new' render={(props) => <AddUser {...props} />} />
          <Route path='/admin/profile' render={(props) => <AdminProfile {...props} />} />

          <Route path='/user' render={(props) => <User {...props} />} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
