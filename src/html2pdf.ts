import { PermissionsAndroid } from 'react-native'
import RNHTMLtoPDF from 'react-native-html-to-pdf'

export default async function createPDF (html: string, filename: string) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Cantoo App Storage Permission',
        message:
          'Cantoo App needs access to your storage ' +
          'so you can can save your files.',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const options = {
        html,
        fileName: filename,
        directory: 'Documents'
      }
      RNHTMLtoPDF.convert(options).then(file => {
        alert(file.filePath)
      }).catch(err => {
        console.log(err)
      })
    } else {
      console.log('File storage permission denied')
    }
  } catch (err) {
    console.warn(err)
  }
}
