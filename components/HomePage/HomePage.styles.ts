import { createStyles } from '@mantine/core';

export default createStyles((theme) => {
    const bgInd = theme.colorScheme === 'dark' ? 9 : 2;
    const fgInd = theme.colorScheme === 'light' ? 0 : 9;
    const textColor = theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[8];
    return ({
        title: {
            color: textColor,
            fontSize: 100,
            fontWeight: 900,
            letterSpacing: -2,

            [theme.fn.smallerThan('md')]: {
                fontSize: 50,
            },
        },
        subtitle: {
            color: textColor,
            fontSize: 50,
            fontWeight: 600,
            letterSpacing: -1,

            [theme.fn.smallerThan('md')]: {
                fontSize: 25,
            },
        },
        lightImg: {
            display: theme.colorScheme === 'dark' ? 'none' : 'contents'
        },
        darkImg: {
            display: theme.colorScheme === 'light' ? 'none' : 'contents'
        },
        altContainer: {
            backgroundColor: theme.colors.blue[bgInd],
            color: textColor,
        },
        cardTitle: {
            fontWeight: 600,
            fontSize: 35,
        },
        card: {
            backgroundColor: "inherit",
            color: "inherit",
            borderWidth: "0px",
            // borderColor: textColor,
            height: "100%",
        },
        code: {
            backgroundColor: "inherit",
            color: "inherit",
            fontSize: 16,
        },
    })
});
