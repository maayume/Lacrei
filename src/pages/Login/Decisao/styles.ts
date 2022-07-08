import styled from "styled-components";
import bgimg10 from "../../../assets/background/bg-img-10.png";
import bgimg9 from "../../../assets/background/bg-img-9.png";
import bgperson1 from "../../../assets/background/bg-person-1.png";

export const Container = styled.div`
#body{
    font-family: "Nunito", sans-serif;
    background-image: url(${bgimg9}), url(${bgimg10}), url(${bgperson1});
    background-position: 0 0, 100% 100%, 0 100%;
    background-repeat: no-repeat;
} 
#body img {
    margin: 50px 50px 0;
}
#content {
    display: flex;
    height: 100%;
    padding: 3%;
}
#title {
    color: #fff;
    font-weight: 700;
    font-size: 40px;
    margin: 2%;
    width: 600px;
    
}
#title p {
    margin: 0;
}
#content-text {
    margin: 100px 80px auto 100px;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    
}
#content-text p {
    margin: 30px auto;
}
#content-text div {
    text-align: center;
    padding-left: 10px;
    margin-bottom: 50px;
    
}

.button_start2, .button_end2 {
    justify-content: center;
    text-align: center;
    align-items: center;

}
.button_end2 {
    color: #fff;

}
#lista-espera {
    padding: 10px 32px;
    height: 48px;
    background-color: #fff;
    color: #018762;
    font-weight: 700;
    font-size: 18px;
    border: 1px solid #018762;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 black;
    margin-bottom: 50px;
}
.btnespera{
    
    background: white;
    color: #018762;
    border: 1px solid #018762; 
  
}
@media only screen and (max-width: 1024px) {
    #body{
    font-family: sans-serif;
    background-image: url(${bgimg9}), url(${bgimg10});
    background-position: 0 0, 100% 100%;
    background-size: 60% 50%;
    background-repeat: no-repeat;
} 
    #content-text {
        margin: 100px 80px;
        font-weight: 400;
        font-size: 24px;
        text-align: center;
        
    }
}
@media only screen and (max-width: 425px) {
    #body{
    font-family: sans-serif;
    background-image: none;
    } 
    #body img {
    margin: 0 auto;
    }
    #title p{
    max-width: 425px;
        
    }
    #content {
        display: block;
        height: 100%;
        padding: 3%;
    }
    #content-text {
        margin: 0 auto;
        font-weight: 400;
        font-size: 24px;
        text-align: left;
        
    }    
    #title {
    color: #018762;
    font-weight: 700;
    font-size: 40px;
    margin: 2%;
    width: 600px;
    
}
button {
    width: 100%;
    
}
}
`;