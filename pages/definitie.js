import Head from "next/head";
import Link from "next/link";
import { Heading, Box, Flex, Grid } from "@chakra-ui/react";
import { FaBrain, FaHeart, FaUsers, FaSearch } from "react-icons/fa";

export default function Definitie() {
  return (
    <div>
      <Head>
        <title>Definitie</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Box className='hero-img'>
          <Box className='inside-container'>
            <Box className='hero-content'>
              <Flex justifyContent='center'>
                <Heading className='h1'>
                  <span className='line'></span>{" "}
                  <span className='color'> D</span>
                  efinitie
                </Heading>
              </Flex>
              <Flex className='nav' justifyContent='center'>
                <Box>
                  <Link href='/' passHref>
                    <span className='navhome'>Terug naar home</span>
                  </Link>
                  /<span className='navactive'>Definitie</span>
                </Box>
              </Flex>
              <Box className='content'>
                <Box>
                  <Box fontWeight='700' display='inline'>
                    Group Investigation (GI)
                  </Box>{" "}
                  is een coöperatieve werkvorm waarbij leerlingen samenwerken in
                  groepjes naargelang hun interesses, om zo een specifiek topic
                  te onderzoeken. Nadat ze zich verdiepen in hun onderwerp,
                  presenteren de groepjes hun bevindingen aan de klas met als
                  volgt een korte evaluatie door de peers en leerkracht. Hoe dit
                  proces exact in zijn werk gaat, vind je terug onder
                  implementatie.
                </Box>
                <Box m='25px 0px'>
                  De belangrijkste kenmerken van deze werkvorm worden samengevat
                  door{" "}
                  <Box fontWeight='700' display='inline'>
                    de 4 I’s:
                  </Box>
                </Box>
                <Grid
                  templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
                  gap={2}
                >
                  <Box className='def-icon-left'>
                    <FaSearch />
                  </Box>
                  <Box className='def-title'>Investigation</Box>
                  <Box className='def-title'>Interaction</Box>
                  <Box className='def-icon-right'>
                    <FaUsers />
                  </Box>
                  <Box className='hidden'></Box>
                  <Box className='def-tekst-top'>
                    Het zoekproces over een topic dat aansluit bij de intresses
                    van de groep.
                  </Box>
                  <Box className='def-tekst-top'>
                    De groepsleden moeten met elkaar in interactie gaan om de
                    opdracht tot een goed einde te brengen.
                  </Box>
                  <Box className='hidden'></Box>
                  <Box className='hidden'></Box>
                  <Box className='def-tekst-bottom'>
                    De motivatie die vanuit de leerling zelf komt om aan de
                    opdracht te werken.
                  </Box>
                  <Box className='def-tekst-bottom'>
                    Wijst op het samenvatten van de bevindingen van elk
                    groepslid om zo meer te weten te komen over het onderwerp.
                  </Box>
                  <Box className='hidden'></Box>
                  <Box className='def-icon-left'>
                    <FaHeart />
                  </Box>
                  <Box className='def-title'>Intrinsic motivation</Box>
                  <Box className='def-title'>Interpretation</Box>
                  <Box className='def-icon-right'>
                    <FaBrain />
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>

      <footer>
        <p>Gemaakt door Jonas De Vulder, Pauline Hesters en Imke Loos</p>
      </footer>
    </div>
  );
}
