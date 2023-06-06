/* @mui/material */
import Typography from '@mui/material/Typography';

export function Copyright(props: any): JSX.Element {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        ENJURW
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
