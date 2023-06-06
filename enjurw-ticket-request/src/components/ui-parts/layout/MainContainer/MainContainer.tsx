/* mui5 */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

/* ui-parts */
import { Copyright } from 'components/ui-parts/Copyright/Copyright';

/* pages */
import { HomePage } from 'pages/HomePage';

export function MainContainer(): JSX.Element {
  return(
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
      </Grid>
      <br />
      <Grid item xs={12} md={4} lg={3}>
      <HomePage />
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  )
};
