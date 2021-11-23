export function ContactLink ({ title, message }) {
  const whatsappNumber = '5511981065807';

  return (
    <a
      target="_blank"
      href={
        `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
      }
      className="btn btn-primary mt-3 mt-lg-10">
      {title}
    </a>
  )
}