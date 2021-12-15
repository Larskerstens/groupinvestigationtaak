import Head from "next/head";
import Link from "next/link";
import {
  Heading,
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  background,
} from "@chakra-ui/react";

export default function Randvoorwaarden() {
  return (
    <div>
      <Head>
        <title>Randvoorwaarden</title>
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
                  <span className='color'> R</span>
                  andvoorwaarden
                </Heading>
              </Flex>
              <Flex className='nav' justifyContent='center'>
                <Box>
                  <Link href='/' passHref>
                    <span className='navhome'>Terug naar home</span>
                  </Link>
                  /<span className='navactive'>Randvoorwaarden</span>
                </Box>
              </Flex>
              <Box className='content'>
                <Accordion allowToggle w='1000px'>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _focus={{
                          outline: 0,
                          color: "#03a65a",
                          background: "rgba(0,0,0,0.5)",
                        }}
                      >
                        <Box flex='1' textAlign='left'>
                          Onderwerp
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign='left'>
                      - Het onderwerp moet voldoende onderzoeksmogelijkheden
                      hebben, zodat de leerlingen interesse opwekken om verder
                      op onderzoek te gaan. <br />- Probeer zoveel mogelijk aan
                      te sluiten bij de leefwereld van de leerlingen.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _focus={{
                          outline: 0,
                          color: "#03a65a",
                          background: "rgba(0,0,0,0.5)",
                        }}
                      >
                        <Box flex='1' textAlign='left'>
                          Groepsvorming
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign='left'>
                      - Voorkom groepjes met enkel vrienden, door de subtopics
                      te beperken in aantal. De groep bij een subtopic kan
                      vervolgens verder opgedeeld worden door de leraar zelf.
                      <br />- Beperk de groepsgrootte tot maximum zes en minimum
                      twee leerlingen.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _focus={{
                          outline: 0,
                          color: "#03a65a",
                          background: "rgba(0,0,0,0.5)",
                        }}
                      >
                        <Box flex='1' textAlign='left'>
                          Evaluatie
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign='left'>
                      - Werk met een groepscijfer. <br />- Werk eventueel ook
                      met een persoonlijk cijfer, om de individuele
                      verantwoordelijkheid te vergroten.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
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
