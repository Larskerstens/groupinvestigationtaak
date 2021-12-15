import Head from "next/head";
import Link from "next/link";
import {
  Heading,
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function Achtergrond() {
  return (
    <div>
      <Head>
        <title>Achtergrond</title>
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
                  <span className='color'> A</span>
                  chtergrond
                </Heading>
              </Flex>
              <Flex className='nav' justifyContent='center'>
                <Box>
                  <Link href='/' passHref>
                    <span className='navhome'>Terug naar home</span>
                  </Link>
                  /<span className='navactive'>Achtergrond</span>
                </Box>
              </Flex>
              <Box className='content'>
                <Tabs isFitted colorScheme='green'>
                  <TabList mb='1em'>
                    <Tab>Group investigation</Tab>
                    <Tab>Coöperatief leren</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <p>
                        Gorki zingt dat alleen Elvis blijft bestaan, maar Group
                        Investigations blijft dat zeker ook! De werkvorm gaat al
                        mee sinds 1960. In dat jaar ontwierp Thelen een eerste
                        model voor deze werkvorm. Hij vond dat een werkvorm het
                        democratische karakter van de maatschappij en het
                        onderzoeksgerichte karakter van wetenschap moest
                        trachten te combineren. De gefinetunede werkvorm kwam
                        tot stand door Shlomo en Yael Sharan. Zij
                        implementeerden nog enkele ideeën van de filosoof John
                        Dewey, die vond dat leerlingen vooral in interactie met
                        elkaar moeten gaan en vrij moeten zijn om te leren. De
                        leerlingen zouden door in discussie met elkaar te gaan
                        meer sociale vaardigheden verwerven en tot een goede
                        consensus komen. Daarnaast moest de schoolomgeving
                        leerlingen ook motiveren door hen vrijer te laten in wat
                        ze willen onderzoeken.{" "}
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        Group Investigation is een didactische werkvorm die valt
                        onder de bredere noemer van coöperatief leren.
                        Coöperatief leren houdt in dat leerlingen in groepjes
                        aan de slag gaan met de leerstof. Dit zou dan ook hun
                        betrokkenheid stimuleren. Bij coöperatief leren spreken
                        we van 2 doelen: een cognitief en een sociaal doel. Het
                        is namelijk zo dat leerlingen niet alleen leren van de
                        leerkracht, maar ook van elkaar. Dat zou dan ook de
                        sociale vaardigheden bevorderen en zorgen voor een goede
                        klassfeer. Coöperatief leren gaat uit van 4
                        basisprincipes: gelijke deelname, individuele
                        aanspreekbaarheid, positieve wederzijdse afhankelijkheid
                        en simultane interactie. De Amerikaan Kagan vatte die
                        samen in het GIPS-model.
                      </p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
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
