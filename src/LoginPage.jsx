import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <>
      <Typography display={'flex'} justifyContent={'center'} variant="h2" color="initial">
        Form Login
      </Typography>
      <Box display={'flex'} justifyContent={'center'}>
        <Card
          variant={'outlined'}
          sx={{
            padding: '0.5rem',
            marginTop: '0.5rem',
          }}
        >
          <CardContent sx={{ maxWidth: '400px' }}>
            <Typography variant="h3" color="initial" align="center">
              Tugas Pertemuan ke 3
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} sx={{ marginTop: '1rem' }}>
                <TextField variant="outlined" label={'Username'} fullWidth placeholder="Input Username" />
              </Grid>
              <Grid item xs={12} sm={12} sx={{ marginTop: '1rem' }}>
                <TextField variant="outlined" label={'Password'} fullWidth placeholder="Input Password" />
              </Grid>
              <Grid item xs={12} sx={{ marginTop: '1rem' }}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ marginTop: '1rem' }} display={'flex'} justifyContent={'center'}>
                <FormControlLabel value={'is_remember'} labelPlacement="end" control={<Checkbox />} label={'Remember Password'} />
              </Grid>
              <Grid item xs={12} sx={{ marginTop: '1rem' }} display={'flex'} justifyContent={'center'}>
                <Button variant="outlined">Cancel</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
