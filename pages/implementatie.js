import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Heading, Box, Divider, Center } from "@chakra-ui/react";
import {
  FaQuestionCircle,
  FaSistrix,
  FaCloudDownloadAlt,
  FaRegThumbsUp,
  FaClipboardList,
  FaChild,
} from "react-icons/fa";

export default function Implementatie() {
  return (
    <div>
      <Head>
        <title>Implementatie</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Box className='bg'>
          <Box className='bg-tekst'>
            <Box>
              <Heading className='h1'>
                <span className='line'></span> <span className='title'> I</span>
                mplementatie
              </Heading>
            </Box>
            <Box className='nav'>
              <Box>
                <Link href='/' passHref>
                  <span className='navhome'>Terug naar home</span>
                </Link>
                /<span className='navactive'>Implementatie</span>
              </Box>
            </Box>
            <Box>Foto</Box>
          </Box>
        </Box>
      </main>

      <footer>
        <p>Gemaakt door Jonas De Vulder, Pauline Hesters en Imke Loos</p>
      </footer>
    </div>
  );
}
