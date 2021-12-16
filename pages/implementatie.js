import Head from "next/head";
import Link from "next/link";
import { Heading, Box, Flex } from "@chakra-ui/react";
import { FaPencilRuler, FaBrain } from "react-icons/fa";
import { GiHiveMind, GiCalendar, GiTeacher } from "react-icons/gi";
import { CgArrowLongDownL } from "react-icons/cg";
import { GoChecklist } from "react-icons/Go";

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
                <Box>
                  <Box
                    className='animate__animated animate__lightSpeedInLeft'
                    mb='2em'
                  >
                    <Box className='imp'>
                      <Flex justifyContent='space-between' mb='16px'>
                        <Box fontSize='22px'>Stap 1</Box>
                        <Box fontSize='30px'>
                          <GiHiveMind />
                        </Box>
                      </Flex>
                      <Box textAlign='left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quas a illo ducimus magni nemo assumenda
                        quibusdam? Reprehenderit architecto ullam id earum
                        obcaecati, eveniet voluptas? Corporis assumenda ad cum
                        perspiciatis velit, perferendis ipsam? Id corporis quasi
                        sint assumenda aut accusantium, ex, molestiae
                        dignissimos aliquid nisi vitae velit optio voluptate
                        saepe inventore. Reprehenderit voluptate, dignissimos
                        harum facilis quibusdam doloremque laudantium rem
                        inventore, fuga laboriosam quam itaque architecto
                        perferendis praesentium error, libero iusto sequi et vel
                        obcaecati voluptatum veritatis aperiam. Fugit inventore,
                        aliquam porro quo dolores at, maxime sapiente architecto
                        aspernatur dicta totam consectetur odio. Vitae unde
                        nulla ad animi eligendi, iste voluptate!
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className='animate__animated animate__bounce'
                    mb='20px'
                    fontSize='30px'
                  >
                    <CgArrowLongDownL />
                  </Box>
                  <Box
                    className='animate__animated animate__lightSpeedInRight animate__delay-1s'
                    mb='20px'
                  >
                    <Box className='imp'>
                      <Flex justifyContent='space-between' mb='16px'>
                        <Box fontSize='22px'>Stap 2</Box>
                        <Box fontSize='30px'>
                          <GiCalendar />
                        </Box>
                      </Flex>
                      <Box textAlign='left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quas a illo ducimus magni nemo assumenda
                        quibusdam? Reprehenderit architecto ullam id earum
                        obcaecati, eveniet voluptas? Corporis assumenda ad cum
                        perspiciatis velit, perferendis ipsam? Id corporis quasi
                        sint assumenda aut accusantium, ex, molestiae
                        dignissimos aliquid nisi vitae velit optio voluptate
                        saepe inventore. Reprehenderit voluptate, dignissimos
                        harum facilis quibusdam doloremque laudantium rem
                        inventore, fuga laboriosam quam itaque architecto
                        perferendis praesentium error, libero iusto sequi et vel
                        obcaecati voluptatum veritatis aperiam. Fugit inventore,
                        aliquam porro quo dolores at, maxime sapiente architecto
                        aspernatur dicta totam consectetur odio. Vitae unde
                        nulla ad animi eligendi, iste voluptate!
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className='animate__animated animate__bounce animate__delay-1s'
                    mb='20px'
                    fontSize='30px'
                  >
                    <CgArrowLongDownL />
                  </Box>
                  <Box
                    className='animate__animated animate__fadeInTopLeft animate__delay-2s'
                    mb='20px'
                  >
                    <Box className='imp'>
                      <Flex justifyContent='space-between' mb='16px'>
                        <Box fontSize='22px'>Stap 3</Box>
                        <Box fontSize='30px'>
                          <FaPencilRuler />
                        </Box>
                      </Flex>
                      <Box textAlign='left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quas a illo ducimus magni nemo assumenda
                        quibusdam? Reprehenderit architecto ullam id earum
                        obcaecati, eveniet voluptas? Corporis assumenda ad cum
                        perspiciatis velit, perferendis ipsam? Id corporis quasi
                        sint assumenda aut accusantium, ex, molestiae
                        dignissimos aliquid nisi vitae velit optio voluptate
                        saepe inventore. Reprehenderit voluptate, dignissimos
                        harum facilis quibusdam doloremque laudantium rem
                        inventore, fuga laboriosam quam itaque architecto
                        perferendis praesentium error, libero iusto sequi et vel
                        obcaecati voluptatum veritatis aperiam. Fugit inventore,
                        aliquam porro quo dolores at, maxime sapiente architecto
                        aspernatur dicta totam consectetur odio. Vitae unde
                        nulla ad animi eligendi, iste voluptate!
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className='animate__animated animate__bounce animate__delay-2s'
                    mb='20px'
                    fontSize='30px'
                  >
                    <CgArrowLongDownL />
                  </Box>
                  <Box
                    className='animate__animated animate__fadeInTopRight animate__delay-3s'
                    mb='20px'
                  >
                    <Box className='imp'>
                      <Flex justifyContent='space-between' mb='16px'>
                        <Box fontSize='22px'>Stap 4</Box>
                        <Box fontSize='30px'>
                          <FaBrain />
                        </Box>
                      </Flex>
                      <Box textAlign='left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quas a illo ducimus magni nemo assumenda
                        quibusdam? Reprehenderit architecto ullam id earum
                        obcaecati, eveniet voluptas? Corporis assumenda ad cum
                        perspiciatis velit, perferendis ipsam? Id corporis quasi
                        sint assumenda aut accusantium, ex, molestiae
                        dignissimos aliquid nisi vitae velit optio voluptate
                        saepe inventore. Reprehenderit voluptate, dignissimos
                        harum facilis quibusdam doloremque laudantium rem
                        inventore, fuga laboriosam quam itaque architecto
                        perferendis praesentium error, libero iusto sequi et vel
                        obcaecati voluptatum veritatis aperiam. Fugit inventore,
                        aliquam porro quo dolores at, maxime sapiente architecto
                        aspernatur dicta totam consectetur odio. Vitae unde
                        nulla ad animi eligendi, iste voluptate!
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className='animate__animated animate__bounce animate__delay-3s'
                    mb='20px'
                    fontSize='30px'
                  >
                    <CgArrowLongDownL />
                  </Box>
                  <Box
                    className='animate__animated animate__backInLeft animate__delay-4s'
                    mb='20px'
                  >
                    <Box className='imp'>
                      <Flex justifyContent='space-between' mb='16px'>
                        <Box fontSize='22px'>Stap 5</Box>
                        <Box fontSize='30px'>
                          <GiTeacher />
                        </Box>
                      </Flex>
                      <Box textAlign='left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quas a illo ducimus magni nemo assumenda
                        quibusdam? Reprehenderit architecto ullam id earum
                        obcaecati, eveniet voluptas? Corporis assumenda ad cum
                        perspiciatis velit, perferendis ipsam? Id corporis quasi
                        sint assumenda aut accusantium, ex, molestiae
                        dignissimos aliquid nisi vitae velit optio voluptate
                        saepe inventore. Reprehenderit voluptate, dignissimos
                        harum facilis quibusdam doloremque laudantium rem
                        inventore, fuga laboriosam quam itaque architecto
                        perferendis praesentium error, libero iusto sequi et vel
                        obcaecati voluptatum veritatis aperiam. Fugit inventore,
                        aliquam porro quo dolores at, maxime sapiente architecto
                        aspernatur dicta totam consectetur odio. Vitae unde
                        nulla ad animi eligendi, iste voluptate!
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className='animate__animated animate__bounce animate__delay-4s'
                    mb='20px'
                    fontSize='30px'
                  >
                    <CgArrowLongDownL />
                  </Box>
                  <Box
                    className='animate__animated animate__backInRight animate__delay-5s'
                    mb='20px'
                  >
                    <Box className='imp'>
                      <Flex justifyContent='space-between' mb='16px'>
                        <Box fontSize='22px'>Stap 6</Box>
                        <Box fontSize='30px'>
                          <GoChecklist />
                        </Box>
                      </Flex>
                      <Box textAlign='left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quas a illo ducimus magni nemo assumenda
                        quibusdam? Reprehenderit architecto ullam id earum
                        obcaecati, eveniet voluptas? Corporis assumenda ad cum
                        perspiciatis velit, perferendis ipsam? Id corporis quasi
                        sint assumenda aut accusantium, ex, molestiae
                        dignissimos aliquid nisi vitae velit optio voluptate
                        saepe inventore. Reprehenderit voluptate, dignissimos
                        harum facilis quibusdam doloremque laudantium rem
                        inventore, fuga laboriosam quam itaque architecto
                        perferendis praesentium error, libero iusto sequi et vel
                        obcaecati voluptatum veritatis aperiam. Fugit inventore,
                        aliquam porro quo dolores at, maxime sapiente architecto
                        aspernatur dicta totam consectetur odio. Vitae unde
                        nulla ad animi eligendi, iste voluptate!
                      </Box>
                    </Box>
                  </Box>
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
