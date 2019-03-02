import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Navbar, Collapse, NavDropdown, Form, Nav, FormControl, Jumbotron, Carousel, Button } from 'react-bootstrap';
import Test from './Test'
// import Navigation from './Navigation'

class App extends Component {
  styles = {
    caroItem: {
      height:  '100vh',
    },
    caroImage: {
      filter: `brightness(${50}%)`
    },
    caroCaption: {
      top: `50%`,
      fontSize: '3rem'
    },
  }
  
  state = {
    isTop: window.scrollY < (document.documentElement.clientHeight - 56),
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < (document.documentElement.clientHeight - 56);
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {
    return (
      <div className="App">
      <Navbar bg="dark" variant="dark" className={
        (this.state.isTop ? 'transparent-bg' : '') + ' navbary'
      }>
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>
        <div className="carouselly">
        </div>
        <div className="image-container">
        <img
          style={this.styles.caroImage}
          src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="First slide"
        />
        </div>
        <div className="caption-holder">
          <h3 className="caption">Hello I'm <span>Jakob Rolik</span><br/>I'm a full-stack web developer</h3>
        </div>
        <Container>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At autem quis doloribus dignissimos inventore assumenda, laborum explicabo commodi aperiam harum facilis, saepe repellendus mollitia corrupti veniam distinctio illum culpa error.
        Deleniti similique asperiores quasi ab, ea corporis consectetur. Veritatis omnis facere doloribus quo minima ea eum dignissimos voluptate cum nemo eos soluta, suscipit assumenda iusto, est culpa dolorem dicta! Nesciunt!
        Sit veritatis maxime animi. Error iste necessitatibus nulla voluptates. Iste enim, dicta sit eum, facilis impedit beatae ea nostrum autem, explicabo molestias id. Nihil reprehenderit fugit ullam pariatur accusantium quam.
        Quia temporibus minus at eum animi eos rem sed magni assumenda quod, velit ab ad illo rerum veniam a. Sapiente sed architecto incidunt omnis. Vitae sint accusamus velit dolor sequi.
       Ex ipsam maiores in, harum modi nam temporibus dolorem odit est iusto delectus ipsum ullam eveniet soluta quas ratione eaque voluptate a incidunt numquam itaque! Laudantium ipsa quos vel maxime.</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia tempore perspiciatis provident ipsa explicabo dicta, dolorum dolores tenetur. Debitis magnam voluptates minima explicabo, similique vero laudantium iure delectus alias.
        Commodi sit illo quidem quaerat laborum quam! Laborum distinctio incidunt voluptatibus veniam expedita eum quidem soluta sunt provident optio numquam aliquid ad adipisci nihil id sapiente earum, excepturi vero dicta.
        Voluptate enim eveniet alias dolores quis facilis, fugiat, reprehenderit doloremque ab commodi assumenda cum ratione, dolore mollitia iusto excepturi eum veritatis fugit ipsam a vitae. Commodi quae hic temporibus sit.
        Doloremque omnis officiis eum porro dicta tenetur earum deleniti nulla accusamus ab animi rem corporis, ullam libero laboriosam! Voluptatum dolor omnis aperiam quidem saepe eligendi aut fuga deserunt obcaecati in.
        Vel asperiores cum impedit, quidem, ut distinctio unde dolorum placeat quam aut consequatur autem deleniti animi reprehenderit, labore aperiam numquam harum nihil saepe nulla rerum assumenda itaque dolor perspiciatis! Fuga!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus quasi voluptatibus minus earum sequi magni maxime accusamus distinctio, ratione, alias adipisci explicabo! Suscipit et nesciunt vero ab saepe ipsam!
        Rerum id ullam odio facere exercitationem. Similique eaque veritatis quia suscipit iste, incidunt aut accusantium fugit. Tempora distinctio unde corporis alias libero omnis labore aut, necessitatibus ab obcaecati natus quos!
        Deserunt, eveniet est iure alias laudantium velit non nihil accusamus tempora at ut voluptatum, voluptates corrupti corporis esse odit sapiente repudiandae doloribus quam odio mollitia natus ex maiores. Tenetur, beatae?
        Vero pariatur, aperiam ratione aliquam libero nostrum dolorum deleniti similique, amet quod ex dolore quia adipisci, fugiat provident recusandae veritatis nulla. Quia deserunt minus eum repellendus vel expedita laudantium dicta?
        Minus temporibus aut quis cupiditate saepe tempora nisi quasi maxime dolorem rem ducimus repellat aliquam a, ullam expedita. Minus, facere sint. Quas harum quam tempore pariatur, consequatur dolore temporibus consequuntur?
        Quam impedit placeat nihil saepe, libero ea. Aspernatur ab error eius accusantium voluptas commodi incidunt neque, eaque ea reprehenderit earum hic tempore, minima totam consequuntur debitis, dolorum ex temporibus ipsa.
        Expedita autem doloribus a alias accusamus itaque tempore enim natus ab obcaecati, accusantium perspiciatis esse ipsam? Cumque debitis, officia dolor rerum delectus enim at assumenda, animi magni nihil quos voluptates.
        Ullam dolorum, libero fugiat, qui obcaecati sequi aliquam non porro molestiae voluptatibus placeat beatae aut, sint laudantium unde! Blanditiis qui quos cumque autem consectetur? Earum vitae molestias rem ipsum cum.
        Tempore officiis harum error voluptatibus ducimus sed provident. Ut a, tempora maiores voluptates dolores ratione dolor doloribus officia eum harum necessitatibus, asperiores at dignissimos veniam officiis. Repudiandae ea atque maiores.
        Accusamus non modi saepe nemo commodi optio, ipsa nam! Ipsa illum illo magnam sint exercitationem excepturi totam dignissimos ut velit atque, enim officia nihil fugiat ex aliquam voluptatibus, tempora modi!
        Cum quisquam similique, consequuntur, et fugit saepe dolore recusandae ipsum eius quae error quis perferendis soluta necessitatibus? Inventore magnam nisi ipsum cum exercitationem eaque. Dolor temporibus dicta vero fugit cumque!
        Explicabo porro labore non, sequi magni ut expedita! Nihil ipsa ea neque aspernatur enim expedita nostrum, ab, sit vel quo illo iste, labore voluptatibus in quibusdam! Rerum illo explicabo commodi!
        Atque vero, laborum velit possimus ut, odio inventore, saepe modi dolorem suscipit eaque et libero tempore iure illo. Reprehenderit aut suscipit sequi dolorum fugiat quaerat aperiam officia fugit in excepturi.
        Eveniet nesciunt non velit nam excepturi tempora ea alias harum eligendi ratione aliquam qui odio architecto quis magni itaque vero, ut consequatur error iste porro assumenda dicta? Veritatis, asperiores maiores?
        Odio itaque a ullam assumenda cupiditate tempora dolores numquam quia fugiat odit repellendus deserunt eligendi maiores nulla alias accusantium tempore praesentium modi repudiandae exercitationem similique id, enim facilis. Eveniet, in?
        Aliquam facere officiis itaque cum tenetur aut in hic, illo excepturi officia! Earum voluptatem possimus totam eos exercitationem, natus architecto nesciunt, quam sit, ipsa eligendi dolore? A fugiat quis corporis!
        Voluptates quod molestiae ea praesentium libero laudantium quidem, in, quam ad doloremque nobis sequi repudiandae mollitia maiores? Cumque quisquam in perspiciatis nostrum, corrupti dolore culpa ut aspernatur autem voluptas dignissimos.
        Similique inventore nulla nobis natus. Sint voluptate laudantium eius ducimus, reprehenderit aut provident nam voluptas praesentium corrupti, sed veritatis expedita amet quia facilis exercitationem, molestiae enim doloremque alias ratione nihil!
        Cum veniam animi cupiditate nam minus laboriosam recusandae quam quod iusto soluta eligendi fugiat, distinctio a nemo tempora voluptas dolorem ipsum voluptates eaque rem sequi sapiente sit? Voluptates, rerum doloremque.
        Maiores commodi qui culpa, ex tenetur, dolore excepturi mollitia perferendis, blanditiis vitae nobis! Similique saepe aliquam esse sit atque adipisci nihil minima, vero possimus ex culpa numquam eum corrupti minus?
        </Container>
      </div>
    );
  }
}


export default App;
