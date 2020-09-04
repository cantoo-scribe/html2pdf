import * as React from 'react'
import { AppRegistry, Platform, View, Button } from 'react-native'
import { name as appName } from './app.json'
import html2pdf from './src'

const App = () => {
  const html = `<h1>this is a title</h1>
    <p>This is a paragraph</p>
  `
  const getPdf = () => {
    html2pdf(html, 'filename').then(() => {
      console.log('success')
    }).catch(err => {
      console.log('err: ', err)
    })
  }
  return (
    <View>
      <Button
        onPress={ getPdf }
        title="Dwnload pdf"/>
    </View>
  )
}

AppRegistry.registerComponent(appName, () => App)

if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementsByTagName('body')[0]
  })
}
