export const menuItems = [
  { name: "/servicos/loja-giramondo", label: "LOJA" },
  {
    name: '#',
    label: 'PRODUTOS',
    items: [
      { name: "/#bikes", label: "BIKES" },
      { name: "/#vestuarios", label: "VESTUÁRIOS" },
      { name: "/#componentes", label: "COMPONENTES" },
      { name: "/#acessorios", label: "ACESSÓRIOS" },
    ],
  },  
  { name: "/servicos/oficina-giramondo", label: "OFICINA" },
  {
    name: 'https://www.google.com/maps/dir//giramondo+bikes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94ce5b3170349d41:0xfdda1d9d5fd0053b?sa=X&ved=2ahUKEwjNga-zla_0AhViyDgGHW-1BLUQ9Rd6BAhbEAQ',
    label: 'VENHA NOS VISITAR',
    isExternal: true
  },
];
