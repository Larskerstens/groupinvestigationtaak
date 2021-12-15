import Head from "next/head";
import Link from "next/link";
import { Heading, Box, Flex } from "@chakra-ui/react";

export default function Voorennadelen() {
  return (
    <div>
      <Head>
        <title>Voor- en nadelen</title>
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
                  <span className='color'> V</span>
                  oor- en nadelen
                </Heading>
              </Flex>
              <Flex className='nav' justifyContent='center'>
                <Box>
                  <Link href='/' passHref>
                    <span className='navhome'>Terug naar home</span>
                  </Link>
                  /<span className='navactive'>Voor- en nadelen</span>
                </Box>
              </Flex>
              <Box className='content'>
                <Box textAlign='left' w='100%'>
                  Voordelen <br />
                  + Leerlingen leren samen te werken met andere leerlingen.
                  <br />+ Leerlingen hebben veel controle over hun eigen
                  leerproces. <br />+ Leerlingen zijn extra gemotiveerd omdat ze
                  werken rond hun eigen interesses.
                  <br />+ Leerlingen leren rekening te houden met hun
                  groepsgenoten.
                  <br />+ Leerlingen vertonen een grotere onafhankelijkheid en
                  een hogere verantwoordelijkheid.
                  <br />+ Leerlingen hebben meer het gevoel dat ze geaccepteerd
                  worden en voelen zich hier zelfzekerder door.
                  <br />+ Leerlingen leren elkaar te helpen (sterke VS zwakke
                  leerlingen).
                  <br />+ Leerlingen leren omgaan in heterogene klasgroepen.
                  <br />+ Leerlingen hebben minder vooroordelen naar anderen toe
                  (bijv. etnische afkomst).
                </Box>
                <Flex mt='25px' textAlign='right' w='100%'>
                  Nadelen
                  <br /> - Leerkrachten worden te weinig opgeleid om Group
                  Investigation te implementeren in hun klas.
                  <br />- Group Investigation is een heel tijdrovende werkvorm.
                  Het vraagt een goede voorbereiding van de leerkracht.
                  <br />- Group Investigation verwacht een goed gekozen
                  overkoepelend onderwerp, anders wordt het moeilijk.
                  <br />- Leerkrachten durven niet altijd de
                  verantwoordelijkheid bij de leerlingen te leggen. Dit moeten
                  ze wel doen om het proces van GI te doen slagen.
                  <br />- Niet alle studenten zijn al eerder blootgesteld aan de
                  manier van werken van Group Investigation, wat een enorme
                  aanpassing vraagt.
                  <br />- Leerlingen vinden het moeilijk om hun meningen te
                  delen met elkaar.
                  <br />- Het is heel moeilijk om met studenten, die om een of
                  andere reden niet gemotiveerd zijn, samen te werken in een
                  groepje.
                </Flex>
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
