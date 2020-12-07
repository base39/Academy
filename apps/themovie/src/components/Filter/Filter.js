import React from 'react'
import { 
    FilterWrapper,
    NameWrapper,
    NameTitle,
    SelectWrapper,
    SelectTitle,
    SelectList,
    SelectItem,
    SelectItemLink
} from './style'

function Filter() {
    const links = document.querySelectorAll(SelectItemLink)
    
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault()

            link.classList.toggle("active")
        })
    })

    return(
        <FilterWrapper border={1} borderRadius="borderRadius" borderColor="grey.300" boxSizing="border-box" display="flex" flexDirection="column">
            <NameWrapper>
                <NameTitle>Filtros</NameTitle>
            </NameWrapper>
            <SelectWrapper>
                <SelectTitle>Gêneros</SelectTitle>
                <SelectList>
                    <SelectItem><SelectItemLink href="/"> Gênero 1</SelectItemLink></SelectItem>
                    <SelectItem><SelectItemLink href="/"> Gênero 2</SelectItemLink></SelectItem>
                    <SelectItem><SelectItemLink href="/"> Gênero 3</SelectItemLink></SelectItem>
                    <SelectItem><SelectItemLink href="/"> Gênero 4</SelectItemLink></SelectItem>
                    <SelectItem><SelectItemLink href="/"> Gênero 5</SelectItemLink></SelectItem>
                </SelectList>
            </SelectWrapper>
        </FilterWrapper>
        
    )
}

export default Filter