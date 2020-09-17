import React from 'react'

import { Heading, Grid, Flex, Link, Button, Text } from '@chakra-ui/core'
import Divider from '../component/Divider'
import Input from '../component/Input'


export default function Home() {
  return (
    
    <Grid
      as="main" //por pádrão o chakra seta uma div, enão altero para uma tag main.
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
      
      <Flex //Flex seria o display Grid
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

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input 
          placeholder="E-mail"
        />
        
        <Input
          marginTop={2} 
          placeholder="Senha"
        />
        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{color: "purple.500"}}
        >
          Esqueci minha senha          
        </Link>
        <Button
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{backgroundColor: "purple.600"}}  
        >
          ENTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          marginTop={6}
          color="gray.300"
        >
          Não tem uma conta? {" "}

          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: "purple.500" }}
          >
          registre-se
          </Link>
        </Text>

        <Divider />
      
        <Flex alignItems="center">
          <Text fontSize="sm"> Ou entre com</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            borderRadius="sm"
            marginLeft={6}
            _hover={{ backgroundColor: 'purple.500'}}
          >
          GITHUB
          </Button>
        </Flex>
      </Flex>

      
    </Grid>
  )
}
 