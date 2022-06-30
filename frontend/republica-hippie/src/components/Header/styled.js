import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-top: 55px;
`

export const LogoArea = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 50px;
    align-items: center;
`

export const SearchContainer = styled.div`
    display: flex;
    border: 1px solid #5AB9F0;
    border-radius: 20px;
    width: 60%;
    align-items: center;
    padding-right: 12px;
`

export const Search = styled.input`
    border: none;
    outline: none;
    border-radius: 20px;
    height: 60px;
    width: 100%;
    padding: 8px 12px;
    &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
        height: 15px;
        width: 15px;
        cursor: pointer;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='123.05' height='123.051' viewBox='0 0 123.05 123.051'%3E%3Cpath id='Path_1' data-name='Path 1' d='M121.325,10.925l-8.5-8.4a6.1,6.1,0,0,0-8.5,0l-42.4,42.4-43.2-43.2a6.1,6.1,0,0,0-8.5,0l-8.5,8.5a6.1,6.1,0,0,0,0,8.5l43.1,43.1-42.3,42.5a6.1,6.1,0,0,0,0,8.5l8.5,8.5a6.1,6.1,0,0,0,8.5,0l42.4-42.4,42.4,42.4a6.1,6.1,0,0,0,8.5,0l8.5-8.5a6.1,6.1,0,0,0,0-8.5l-42.5-42.4,42.4-42.4A6.13,6.13,0,0,0,121.325,10.925Z' transform='translate(0 0)' fill='%23c57e5f'/%3E%3C/svg%3E");
        background-size: 15px 15px;
    }
`

export const NavArea = styled.div`
    display: flex;
    margin: 0 auto;
`

export const Nav = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20%;
    list-style: none;
    margin: 40px auto 65px auto;
`

export const NavLink = styled(Link)`
    text-decoration: none;
`

export const NavItem = styled.li`
    color:#D8A691;
    font-size: 20px;
    transition: .3s;
    &:hover {
        color: #C57E5F;
    }
`

export const ContainerExpositores = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding-left: 20%;
    border-left: 3px solid #D8A691;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 55px;
`

export const Icon = styled.img`
    height: 66px;
    width: 66px;
    padding: 20px;
    background-color: #FEDC96;
    border-radius: 50%;
    transition: .3s;
    &:hover {
        background-color: #F8CE78;
        transition: .3s;
    }
`

export const IconLink = styled(Link)`
    height: 66px;
    width: 66px;
    border-radius: 50%;
`