import styled from "styled-components";
import bgimg3 from "../../assets/background/bg-img-3.png"
import bgimg4 from "../../assets/background/bg-img-4.png"

export const Container = styled.div`
body{
    font-family: sans-serif;
    padding: 5%;
    background-image: url(${bgimg3}}), url(${bgimg4});
    background-position: right bottom, left;
    background-repeat: no-repeat;
    background-size: auto;
    min-height: 100vh;
} 
    color: #018762;
`
export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height:100vh;
    display: flex;
    flex-direction: column;
`
export const Steps = styled.div`
    flex: 1;
`
export const Sidebar = styled.div`
    widht: 250px;
    border-right: 1px solid #018762;
`
export const Page = styled.div`
    flex: 1;
    padding: 40px 40px;
`