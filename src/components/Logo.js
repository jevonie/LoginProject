import React, { memo } from "react"
import { Image, StyleSheet } from "react-native"

const Logo = () => (
  <Image source={require("../assets/cdo-seal.png")} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 138,
    marginBottom: 12
  }
})

export default memo(Logo)
