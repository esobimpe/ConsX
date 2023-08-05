import { Button, styled } from '@mui/material';

export const Button_Contained = styled(Button)({
    height: '40px',
    textTransform: 'none',
    padding: '8px 16px 8px 15px',
    borderRadius: '6px',
    backgroundColor: "#01EFFD",
    fontFamily: "Source Sans Pro, sans-serif",
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '20px',
    fontStyle: 'normal',
    textAlign: 'center',
    color: "#000000",
    '&:hover': {
        backgroundColor: "none",
        border: "2px solid #01EFFD",
        color: "#ffffff",
    },
    '&:focus': {
        outline: 'none',
    },
});

export const Button_Outlined = styled(Button)({
    minWidth: '130px',
    height: '40px',
    textTransform: 'none',
    padding: '8px 16px 8px 15px',
    borderRadius: '6px',
    backgroundColor: "#fff",
    fontFamily: "Source Sans Pro, sans-serif",
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '20px',
    fontStyle: 'normal',
    textAlign: 'center',
    color: "#000000",
    '&:hover': {
        backgroundColor: "none",
        border: "2px solid #fff",
        color: "#ffffff",
    },
    '&:focus': {
        outline: 'none',
    },
});

export const SubscribeButton = styled(Button)({
    minWidth: '100px',
    height:'40px',
    textTransform: 'none',
    padding: '6px 15.38px 6px 16px',
    borderRadius: '8px',
    backgroundColor: "#736DBA",
    fontFamily: "Source Sans Pro, sans-serif",
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    fontStyle: 'normal',
    textAlign: 'center',
    color: "#ffffff",
    '&:hover': {
        backgroundColor: "none",
        border: "2px solid #736DBA",
        color: "#ffffff",
    },
    '&:focus': {
        outline: 'none',
    },
});

export const LoginButton = styled(Button)({
    height:'40px',
    backgroundColor: "none",
    fontFamily: "Source Sans Pro",
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '20px',
    fontStyle: 'normal',
    textAlign: 'center',
    textTransform: 'none',
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.37)',
    color: "#01EFFD",
    '&:hover': {
        backgroundColor: "none",
        color: "#ffffff",
    },
    '&:focus': {
        outline: 'none',
    },
});