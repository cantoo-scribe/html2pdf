import html2pdf from 'html2pdf.js'
export default function createPDF (html: string, filename: string) {
  const opt = {
    filename: filename + '.pdf'
  }
  return html2pdf().from(html).set(opt).save()
}
