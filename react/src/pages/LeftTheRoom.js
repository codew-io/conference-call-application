import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';
import { ConferenceContext } from 'pages/AntMedia';


function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || 'xs'
    );
}
function LeftTheRoom(props) {
    const conference = React.useContext(ConferenceContext);

    const width = useWidth();
    const { t } = useTranslation();
    const layouts = { xl: 32, lg: 24, md: 24, sm: 16, xs: 12 }

    React.useEffect(() => {
        conference.handleLeaveFromRoom();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Grid container justifyContent={"center"} sx={{ mt: layouts[width] }}>
                <Box >
                    <Typography variant="h5" align="center">
                        {t('You have left the meeting')}
                    </Typography>
                </Box>
                <Grid container justifyContent={"center"} spacing={2} sx={{ mt: 2 }} alignItems="center">
                    <Grid item lg={1} md={3} sm={2} xs={3}>
                        Has salido de la sala
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default LeftTheRoom;
