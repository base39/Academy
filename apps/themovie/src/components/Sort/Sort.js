import React from 'react'
import { 
    SortWrapper,
    NameWrapper,
    NameTitle,
    OrderWrapper,
    OrderTitle
} from './style'
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

function Sort() {
    return(
        <SortWrapper border={1} borderRadius="borderRadius" borderColor="grey.300" boxSizing="border-box" display="flex" flexDirection="column">
            <NameWrapper>
                <NameTitle>Ordenar</NameTitle>
            </NameWrapper>
            <OrderWrapper>
                <OrderTitle>Ordenar Resultados Por</OrderTitle>
                <Select>
                    <MenuItem value={"api_value 1"}>Popularidade (maior)</MenuItem>
                    <MenuItem value={"api_value 2"}>Popularidade (menor)</MenuItem>
                    <MenuItem value={"api_value 3"}>Avaliação (melhor)</MenuItem>
                    <MenuItem value={"api_value 4"}>Avaliação (pior)</MenuItem>
                    <MenuItem value={"api_value 5"}>Lançamento (novo)</MenuItem>
                    <MenuItem value={"api_value 6"}>Lançamento (antigo)</MenuItem>
                    <MenuItem value={"api_value 7"}>Título (A-Z)</MenuItem>
                    <MenuItem value={"api_value 8"}>Título (Z-A)</MenuItem>
                </Select>
            </OrderWrapper>
        </SortWrapper>
        
    )
}

export default Sort