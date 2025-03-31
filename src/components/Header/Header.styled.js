import styled from "styled-components";

export const SHeader = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;`

export const SHeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`

export const SHeaderNav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SHeaderButton = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565EEF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;

    a {
        color: #FFFFFF;
    }

    //hover_01

    &:hover {
        background-color: #33399b;
    }

    //@media screen and (max-width: 495px)
    //     z-index: 3;
    //     position: fixed;
    //     left: 16px;
    //     bottom: 30px;
    //     top: auto;
    //     width: calc(100vw - 32px);
    //     height: 40px;
    //     border-radius: 4px;
    //     margin-right: 0;
`

 //

export const SHeaderPopUserSet = styled.div`
    display: none;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: #FFF;
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;

    :target
`

export const SPopUserSet = styled.p`
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
`