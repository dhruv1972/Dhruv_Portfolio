export async function GET() {
  // In a real implementation, you would serve a real PDF file
  // This is just a placeholder for the portfolio demo
  return new Response('Resume would be downloaded here in production', {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="DhruvChavda_Resume.pdf"'
    }
  })
} 