import React,{ useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Translate } from '@material-ui/icons';
import transitions from '@material-ui/core/styles/transitions';
import carSlice, { selectCars } from '../features/car/carSlice';
import { useSelector} from 'react-redux';


function Header() {
  const  [burgerStatus,setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log( cars);
  return (
    <Container>
      <a>
        <img src = "./images/logo.svg" />
      </a>
      <Menu>
        { cars && cars.map((car, index)=>(

          <p><a key = {index} href = "#"> {car} </a></p>          

        ))}
      </Menu>
      <RightMenu>
        <a href = "#"> Shop </a>
        <a href = "#"> Account </a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
        <BurgerMenu show = {burgerStatus}>
          <CloseWrap>
          <CloseMenu  onClick={() => setBurgerStatus(false)}/>
          </CloseWrap>
          { cars && cars.map((car, index)=>(

          <li key = {index} ><a href = "#"> {car} </a></li>     

        ))}
          
          <li><a href = "#">Used Inventory</a></li>
          <li><a href = "#">Trade-In</a></li>
          <li><a href = "#">CyberTruck</a></li>
          <li><a href = "#">Existing Menu</a></li>

        </BurgerMenu>
      </RightMenu>
      
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px){
    display:none; 
}
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerMenu = styled.div`
  position: fixed;
  top:0;
  bottom: 0; 
  right: 0;
  background-color: white;
  width: 300px;
  z-index:16;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;

  transform: ${ props => props.show ? 'translateX(0)' : 'translatex(100%)'};
  transition:transform 0.2s ease-in-out;

  li{
    padding:15px 15px;
    border-bottom:1px solid rgba(0,0,0, .2);
    font-style:sans-serif;

    a{
      font-weight:600;
    }
  }


`

const CloseMenu = styled(CloseIcon)`
  cursor:pointer;
`

const CloseWrap = styled.div`
  display:flex;
  justify-content:flex-end;

`