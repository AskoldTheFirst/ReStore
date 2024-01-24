import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    isDark: boolean;
    setDarkMode: (isDark: boolean) => void;
}

export default function Header({ isDark, setDarkMode }: Props)
{
    const switchHandler = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setDarkMode(event.target.checked == true);
    };

    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    RE-STORE
                </Typography>
                <Switch checked={isDark} onChange={switchHandler}></Switch>
            </Toolbar>
        </AppBar>
    )
}