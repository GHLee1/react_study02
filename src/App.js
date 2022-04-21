import './App.css';
import {info} from "./info";
// 문제1)컴포넌트 info.js파일 생성하고 자신의 간단한 정보를 출력하는 페이지를
//화면에 출력하세요
//ps1)src폴더 아래에 info.js생성
//ps2)이름,성별,나이,이메일,주소를 출력
//ps3)Ui구성은 원하는 방식대로 사용

//문제 2)친구의 정보를 출력하는 컴포넌트 address.js파일을 
//생성하고 친구의 간단한 정보를 화면에 출력하세요
//ps1) src폴더 아래에 컴포넌트 생성, address.js
//ps2)친구의 이름,성별,이메일
//ps3)UI구성은 원하는 방식대로 사용
//ps4)2명 이상 출력
//ps5)친구의 정보를 props를 통해서 하위 컴포넌트로 전달하여 출력
function App() {
  return (
    <div id='root'>
          <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* 자신의 정보를 출력하는 컴포넌트 */}
      {/* 친구의 정보를 출력하는 컴포넌트1 */}
      {/* 친구의 정보를 출력하는 컴포넌트2 */}
      <h1>MyInfo</h1>
      <info />
    </div>
  );
}

export default App;
