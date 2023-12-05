import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Hidden,
} from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import useAuthStore from '../store/auth';

const sidebarItems = [
  {
    name: 'Blogs',
    path: '/admin/blogs',
  },
  {
    name: 'Add Blog',
    path: '/admin/blog/new',
  },
  {
    name: 'Users',
    path: '/admin/users',
  },
  {
    name: 'Add User',
    path: '/admin/user/new',
  },
  {
    name: 'Profile',
    path: '/admin/Profile',
  },
];

const Sidebar = () => {
  const { handleLogout } = useAuthStore();
  const history = useHistory();

  const logout = () => {
    handleLogout();
    history.push('/');
  }

  return (
    <>
      <Box display="flex" justifyContent="center" my={1}>
        <Typography
          sx={{
            color: '#fff',
            textShadow: '0px 2px 4px rgba(0, 0, 0, 0.37)',
            fontFamily: 'Inter',
            fontSize: '36px',
            fontStyle: 'italic',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          Cons
        </Typography>
        <Typography
          sx={{
            color: '#01EFFD',
            fontFamily: 'Inter',
            fontSize: '36px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          X
        </Typography>
      </Box>
      <List>
        {sidebarItems.map((item) => (
          <Link to={item.path} key={item.name} style={{ textDecoration: 'none', color: '#fff' }}>
            <ListItem button>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}

        <ListItem button onClick={logout}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </>
  );
};

const DrawerComponent = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        padding="10px"
        onClick={handleDrawerToggle}
        sx={{ display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: '70vw',
              backgroundColor: '#021422',
            },
          }}
        >
          <Sidebar />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Sidebar />
      </Hidden>
    </>
  );
};

const Dashboard = ({ children }) => {
  const history = useHistory();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user && !user.role === 'admin') {
      history.push('/');
    } else if (!user) {
      console.log('no user');
      history.push('/');
    }

  }, [user, history]);

  if(!user) return null;

  return (
    <Box backgroundColor="#021422">
      <Grid container spacing={0}>
        <Grid item xs={12} md={3}>
          <DrawerComponent />
        </Grid>
        <Grid item xs={12} md={9}>
          <Box borderLeft={["none", "none", "1px solid white"]} style={{ height: '100vh', padding: 20 }}>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
