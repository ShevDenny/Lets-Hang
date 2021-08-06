import styled from "styled-components"

const FootStyle = styled.div`
    font-family: 'Satisfy', cursive;
    padding-top: 2px;
    font-size: 20px;
    height: 50px;
    width: 100%;
    background-color: #1A1B54;
    color: white;
    text-align: center;
`
function Footer() {
    return (
        <FootStyle>
            <p>Phase 4 Project by Shevon & Adrienne</p>
        </FootStyle>
    )
}

export default Footer