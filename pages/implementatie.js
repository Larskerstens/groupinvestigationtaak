import Head from "next/head";
import Link from "next/link";
import { Heading, Box, Flex } from "@chakra-ui/react";

export default function Implementatie() {
  return (
    <div>
      <Head>
        <title>Implementatie</title>
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
                  <span className='color'> I</span>
                  mplementatie
                </Heading>
              </Flex>
              <Flex className='nav' justifyContent='center'>
                <Box>
                  <Link href='/' passHref>
                    <span className='navhome'>Terug naar home</span>
                  </Link>
                  /<span className='navactive'>Implementatie</span>
                </Box>
              </Flex>
              <Box className='content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat recusandae in reiciendis quisquam quas perferendis
                suscipit commodi explicabo autem esse.
                <Box>
                  <h1 class='animate__animated animate__lightSpeedInLeft'>
                    An animated element
                  </h1>
                  <h1 class='animate__animated animate__lightSpeedInRight animate__delay-1s'>
                    An animated element
                  </h1>
                  <h1 class='animate__animated animate__lightSpeedInLeft animate__delay-2s'>
                    An animated element
                  </h1>
                  <h1 class='animate__animated animate__lightSpeedInRight animate__delay-3s'>
                    An animated element
                  </h1>
                  <h1 class='animate__animated animate__lightSpeedInLeft animate__delay-4s'>
                    An animated element
                  </h1>
                </Box>
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
