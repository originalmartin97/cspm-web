import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import mkJulia from '../assets/mkJulia.jpg'
import nkBenedek from '../assets/nkBenedek.jpg'
import Grid from '@mui/material/Grid2'

const Colleagues = () => {
  return (
    <Grid container spacing={3}>    
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx= {{ height: "auto" }}
                component="img"
                src={mkJulia}
            >
            </CardMedia>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    Mészárosné Kocsi Júlia
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ textAlign: 'justify' }}
                >
                    36 éves vagyok. Orvoslaboratóriumi analitikus a végzettségem és 13 éve 
                    dolgozom az egészségügyben.
                    A Metlife csapatát csak pár hónapja erősítem. A biztosítást azért választottam, mert látom a sok
                    állami rendszerben eltöltött évemből és tapasztalatomból, mennyire fontos az öngondoskodás.
                    Bízom benne, hogy a szaktudásommal hozzájárulhatok a sikerünkhöz és minél több
                    ügyfelünknek segíthetünk.
                </Typography>
            </CardContent>
        </Card>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx= {{ height: "auto" }}
                component="img"
                src={nkBenedek}
            >
            </CardMedia>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    Nagy Benedek Károly
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ textAlign: 'justify' }}
                >
                    Nagy Benedek Károly vagyok, jogászhallgató, és a csapat legfiatalabb tagja. A biztosítások
                    területén újnak számítok, azonban kollégáimnak köszönhetően hamar felvettem a fonalat és
                    napról napra azon vagyok, hogy egyre jobban megismerjem ezt a területet. Véleményem szerint
                    manapság minden embernek szüksége van egy biztosításra, amely a nehéz helyzetekben
                    segítséget nyújt. Célom, hogy az ügyféllel közösen egy olyan valós segítséget nyújtó biztosítást
                    állítsunk össze, amely az ügyfél elégedettségét szolgálja és biztonságban tudhassa magát és
                    családtagjait.
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  )
}

export default Colleagues
