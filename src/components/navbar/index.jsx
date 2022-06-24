import { Button, ButtonGroup, Container } from "./styles";

// inserir ou remover os itens aqui
const item = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Roadmap",
    href: "#",
  },
  {
    name: "Team",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <Container>
      <ButtonGroup>
        {item.map((item, i) => (
          <a href={item.href} key={i}>
            <Button>{item.name}</Button>
          </a>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export { Navbar };
