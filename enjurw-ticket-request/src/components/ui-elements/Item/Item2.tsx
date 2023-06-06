/* mui5 */
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1f2021' : '#fff',
  ...theme.typography.body2,
  margin: 2,
  padding: theme.spacing(1.4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: 14
}));
