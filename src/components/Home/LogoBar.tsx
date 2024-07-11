import logo from '../../assets/logo.png';

export default function LogoBar() {
  return (
    <header>
      <img alt="logo" className="mx-auto" height={50} src={logo} width={100} />
    </header>
  );
}
