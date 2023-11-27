import styled from 'styled-components'

const textoOpcoes = ['categorias', 'favoritos', 'minha estante' ]

const Opcao = styled.li `
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    text-transform: uppercase;
`

const OpcoesContainer = styled.ul`
    display: flex;
`

function OpcoesHeader () {
    return (
        <OpcoesContainer>
            { textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </OpcoesContainer>
    )
}

export default OpcoesHeader