import React, { memo } from "react"
import Background from "../components/Background"
import Logo from "../components/Logo"
import Header from "../components/Header"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>CDO RAFFLE</Header>

    <Paragraph>
      This is sample cdo raffle scanner app.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("Login")}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("Register")}
    >
      Sign Up
    </Button>
  </Background>
)

export default memo(HomeScreen)
