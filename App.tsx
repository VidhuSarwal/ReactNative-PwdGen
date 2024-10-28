import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

//form validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,'Should Be minimum of 4 charcaters')
  .max(16,'Should Be maximum of 16 characters')
  .required('Length is Required')
})


export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setlowerCase] = useState(true)
  const [upperCase, setupperCase] = useState(false)
  const [numbers, useNumbers] = useState(false)
  const [symbols, useSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const digitChars = '0123456789'
    const specialChars = '!@#$%^&*():;<>??'

    if (upperCase) {
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += lowerCaseChars
    }
    if(symbols) {
      characterList +=specialChars
    }
    if (numbers) {
      characterList +=digitChars
    }
  }
  const createPassword = (characters: string, passwordLength: number ) => {
    let result = ''
    for (let i=0; i<passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)

    }
    return result
  }

  const resetPassword = () => {

  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})