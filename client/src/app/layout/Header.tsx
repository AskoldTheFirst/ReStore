import { List, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, Container, IconButton, ListItem, ListItemText, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

interface Props {
    isDark: boolean;
    setDarkMode: (isDark: boolean) => void;
}

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header({ isDark, setDarkMode }: Props) {
    const switchHandler = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setDarkMode(event.target.checked == true);
    };

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            {/* <Container maxWidth='xl'> */}
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box display='flex' alignItems='center'>
                        <Typography variant="h6" noWrap component={NavLink}
                            to='/'
                            sx={navStyles}>
                            RE-STORE
                        </Typography>
                        <Switch checked={isDark} onChange={switchHandler} />
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}>

                        {midLinks.map(({ title, path }) => (
                            <ListItem
                                key={path}
                                component={NavLink}
                                to={path}
                                sx={navStyles}
                                style={{marginLeft: 80}}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}

                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}>
                        <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }} style={{width: 18, margin: 0}}>
                            <Badge badgeContent='4' color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                key={path}
                                component={NavLink}
                                to={path}
                                sx={navStyles}
                                style={{width: 75}}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </Box>

                </Toolbar>
            {/* </Container> */}
        </AppBar>
    )
}