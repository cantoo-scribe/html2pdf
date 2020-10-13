import RNHTMLtoPDF from 'react-native-html-to-pdf'
import type { PDFOptions } from './types'
export default async function createPDF (html: string, options: PDFOptions) {
  const finalOpt = {
    html,
    fileName: options.filename,
    directory: 'Documents'
  }
  RNHTMLtoPDF.convert(finalOpt).then(file => {
    alert(file.filePath)
  }).catch(err => {
    console.log(err)
  })
}
