/*  O ChakraUI tem seus proprios padrões de estilos 
    porém posso customizar informando ao Emotion que
    posso ter opções além das padrões */

import styled, { CreateStyled  } from '@emotion/styled';

import theme from '../styles/theme' /* o theme possui os padrões de estilo do chakra */

export default styled as CreateStyled<typeof theme> /* crio meus estilos a partir do theme */