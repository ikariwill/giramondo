export function ContactLink({ title = 'Entre em contato', message = 'Entrei em contato pela página da Giramondo, e desejo mais informações.' }) {
  const whatsappNumber = '5511991399291';

  return (
    <a 
      target="_blank"
      href={
        `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
      }
      className="btn btn-primary mt-3 mt-lg-10 ">
      {title}
    </a>
  )
}