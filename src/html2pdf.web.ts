import html2pdf from 'html2pdf.js'
import type { PDFOptions } from './types'
export default function createPDF (html: string, options: PDFOptions) {
  const finalOpt = { ...options }
  finalOpt.filename = `${finalOpt.filename}.pdf`
  const worker = html2pdf().from(html).set(finalOpt)
  if (finalOpt.open) {
    return worker.outputPdf('blob').then(function (pdfBlob) {
      const url = URL.createObjectURL(pdfBlob)
      window.open(url)
    })
  }
  return worker.save()
}
