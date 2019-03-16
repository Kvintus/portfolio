import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container } from 'react-bootstrap';
var Banner = require('./components/Banner/index.jsx').default
import "react-typeit/build/styles.min.css"
import Navbar from './components/CustomNavbar'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Banner/>
        <Container>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, dignissimos sequi beatae deleniti rem doloribus ducimus molestiae velit, accusamus omnis eius nesciunt dicta consectetur? Odio nulla molestias officiis nobis dolore?
          Corrupti odit aliquid sint quidem. Corporis amet repellat ullam ad quas impedit. Doloremque tempora eveniet doloribus quaerat dignissimos non culpa libero sunt qui, eius et porro eum id alias nihil!
          Soluta consequatur provident ducimus? Nobis, natus magni reprehenderit dolor vero voluptatum, eos, ea facilis rem dolorem sit consectetur tempore enim molestiae delectus maxime soluta! Eligendi tempore aliquam eum laudantium quis!
          Autem labore rerum culpa iusto quos hic, nemo enim repellat minus aliquid praesentium dolore ipsam. Consectetur, laboriosam modi cum, delectus aut obcaecati doloribus repudiandae totam, officiis maiores iusto velit molestiae?
          Minima ipsa eius nemo fugiat placeat rem ipsum voluptatem molestiae error! Tempora nihil incidunt, magni quod eveniet harum cumque, enim provident, architecto repellat aperiam sed magnam tenetur in maxime praesentium.
          Tenetur est soluta reprehenderit a, harum excepturi delectus consequatur perspiciatis sapiente culpa, ipsum laborum nemo et rerum ducimus iusto non, similique mollitia perferendis odio aliquam? Quae mollitia molestiae accusantium nulla!
          Reiciendis, eaque eos dolorem beatae quibusdam perferendis asperiores modi. Error recusandae impedit delectus rem, inventore non qui, consequuntur, deserunt sint illo praesentium amet? Sed harum temporibus fugiat cum, inventore quam.
          Dolores reiciendis tempore inventore sapiente debitis ratione porro similique excepturi. Obcaecati, commodi corporis? Ut, incidunt soluta. Unde officia, accusamus excepturi eos ratione harum laudantium, voluptates, impedit labore omnis deserunt cumque!
          Adipisci non eaque velit, autem dolor veniam. Dignissimos tempora ut soluta neque harum illum culpa, cupiditate voluptates! Nihil sint consequuntur quas laudantium sunt. Placeat neque laudantium maiores sequi tempora ratione.
          Adipisci ea, ipsum dolor minima perspiciatis animi? Placeat maxime magni corrupti possimus natus unde dolore, saepe suscipit architecto quas quasi quibusdam impedit, doloribus nam ad labore, quam recusandae! Quo, adipisci.
        </Container>
      </div>
    );
  }
}


export default App;
