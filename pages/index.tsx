import React from 'react'

import { Heading, Grid, Flex } from '@chakra-ui/core'


export default function Home() {
  return (
    
    <Grid
      as="main" //por pádrão o chakra seta uma div altero para uma tag main.
      height="100vh" //Quero que ocupe a altura inteira
      templateColumns="1fr 480px 480px 1fr" //1 coluna de tamanho flexível / Duas colunas de tamnho 480 / 1 Coluna de tamnaho flexivel
      templateRows="1fr 480px 1fr" //1 linha de tamnhao flexivel / uma linha tamnaho 480 / Outra linha tamnho flexivel
      //templateAreas são os espaços que serão ocupados pelas props templateColumns e templateRows
      templateAreas=" 
        '. . . .'
        '. logo form .'
        '. . . .'
      "
        justifyContent="center"
        alignItems="center"
      >
      
      <Flex //Flex serio o display Grid
       gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/rocketseat.svg" alt="Rocketseat"/>

          <Heading 
            size="2xl" //tamanho font
            lineHeight="shorter" //Fonte um pouco mais proxima com a de cima
            marginTop={16} // 16 significa 4 rem de acordo com a doc do chakra ui
           >
            Faça seu login na plataforma
          </Heading>
      
      </Flex> 

      
      
    </Grid>
  )
}
 