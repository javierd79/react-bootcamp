import React from 'react'
import { Container, Col, Row } from 'reactstrap';
import '../Assets/index.scss';

function Home() {
  return (
    <div className='home'>
      <div className='tittle'>
          <img className='img-fluid rounded mx-auto d-block' src={process.env.PUBLIC_URL + "/digimon-logo.png"} alt='Digimon-Logo'/>
      </div>
      <Container className='contents'>
        <div>
          <p>
            <b>Digimon</b> (デジモン Dejimon?), término tomado de <b>Digital Monsters</b> (デジタルモンスタ ー Dejitaru monsutā?) literalmente en español <b>Monstruos Digitales</b>, estilizado como <b>DIGIMON</b>, es una franquicia de medios creado por Akiyoshi Hongo, que incluye productos como mascotas virtuales, videojuegos, películas, animes, mangas, juguetes y juegos de cartas coleccionables. La saga comenzó en 1997 a partir de una mascota virtual conocida como Digimon Virtual Pet, basado en la franquicia Tamagotchi. Sin embargo, su popularidad aumentó con la emisión en 1999 de una serie de anime (Digimon Adventure) y el lanzamiento de un videojuego titulado Digimon World. La saga Digimon ocupó, en una encuesta realizada en la TV Asahi en 2006, el puesto número 54 de entre los 100 mejores animes de la historia. 
            Modelo de Virtual pet distribuido en el mercado japonés por Bandai,, que permitió la popularización de Digimon en Japón y vendió 50 mil unidades en todo el mundo hasta marzo de 2004. <br/><br/>
            El argumento de la saga está basado en un mundo paralelo conocido como Mundo Digital, que está habitado por unas criaturas ficticias llamadas Digimon. Son formas de vida artificial creadas a partir de bits y piezas perdidas de datos de ordenadores, que habitan dentro de los aparatos electrónicos que posean memorias no volátiles. Los Digimon son criados por humanos llamados "Tamers" (niños elegidos en Digimon Adventure y en su secuela Digimon 02) para combatir a los villanos que amenazan con destruir el equilibrio del Mundo Digital.
          </p>
        </div>
        <Col className='digiCol'>
          <h2>Digimon (Criatura)</h2>
          <a href='/digimons'>
            <button className='digiBtn'>Go to Digimon</button>
          </a>
          <hr/>
          <p>
          <img className='img-fluid' src={process.env.PUBLIC_URL + "/Agumon.png"} alt='Agumon'/>
            Dentro de la franquicia Digimon, los Digimon son criaturas digitales que digievolucionan para mejorar su nivel de poder y habilidades con respecto a su anterior forma. Los Digimon se dividen según diferentes tipos o atributos, actuando o cumpliendo un determinado rol (como un programa informático) que pueden ser principalmente de tipo: datos, vacuna o virus. El número de digievoluciones naturales llega hasta seis. Normalmente los digimons habitan en el Mundo Digital, un mundo digital posiblemente ubicado en la red de comunicaciones. Los Digimon absorben información, por ejemplo de diversos enemigos, y, eventualmente digievolucionan o bien, con el paso del tiempo y los sucesos. Los digimon primeros están en etapa Digi-Huevo (que todavía no nacen, pero el cuidado del huevo tiene que ver mucho su digievolución), Etapa Bebé (que no tienen poderes por lo tanto su transformación se hará dándole de comer y con entrenamiento básico), Etapa Bebé II (técnica burbujas/defensa), Etapa Niño (con poderes/técnicas según que clase de digimon sea), Etapa Campeón (ya entrenado y con técnicas poderosas), Etapa Ultra (ultra poderoso y más fuerte que el anterior) y Etapa Mega (mega poderoso, más que el anterior). Debido a que después de digievolucionar su apariencia cambia de acuerdo a su grado, actualmente se han contado más de 2000 especies distintas de Digimon. Las especies resultantes de las digievoluciones difieren según la región donde se hayan criado los Digimon. Además, los Digimon digievolucionan en diversas formas dependiendo de la situación, sin tamers (Entrenadores) o con tamers. Hay muchos Digimon que no llegan al nivel mega debido a que el poder ya es demasiado grande y mueren antes de alcanzarla a menos que tengan un dueño. Algunos Digimon llegan a un poder tan alto al alcanzar su última etapa que se le considera super definitiva.
          </p>
        </Col>
        <Row>
          <Col className='mangaCol'>
            <h3>Manga</h3>
            <img className='img-fluid' style={{
                float: "right",
                width: "10%",
                margin: "5px",
            }}
            src={process.env.PUBLIC_URL + "/prota.png"} alt='Taichi Yagami'/>
            <hr/>
            <p>
              Existen varios mangas: la primera un único capítulo autoconclusivo, fue lanzado en verano de 1996, lo que después dio lugar a un segundo manga oficial de los mismos creadores, llamado «Digimon Adventure V-Tamer 01», la cual fue publicada en noviembre de 1998.
              <br/><br/>
              En años siguientes se publica Digimon D-Cyber, basado en la entrega creada para los V-Pets conocido como Digimon Chronicle. Finalmente, en 2005 empieza a publicarse Digimon Next, manga que se hizo a la par que el anime Digimon Savers y con el cual comparte muchos elementos.
              <br/><br/>
              En 2010 se realizó un manga complementario a la temporada número 6 de la serie animada, Digimon Xros Wars.
              <br/><br/>
              A partir del 2016, está en circulación el manga correspondiente a la serie animada Digimon Universe: Appli Monsters, séptima temporada de la franquicia.            
              <br/><br/>
            <ul class="list-group">
              <li class="list-group-item Manga">Digimon World Re:Digitize - 2012</li>
              <li class="list-group-item Manga">Digimon World Re:Digitize Encode - 2013</li>
              <li class="list-group-item Manga">Digimon Story: Cyber Sleuth - 2015</li>
              <li class="list-group-item Manga">A fourth item</li>
              <li class="list-group-item Manga">Digimon Universe: Appli Monsters - 2016</li>
            </ul>
            </p>
            <Col className='imgCol'>
              <img className='img-fluid' src={process.env.PUBLIC_URL + "/digimons.png"} alt='Digimons'/>
            </Col>
          </Col>
          <Col className='animeCol'>
            <h3>Anime</h3>
            <img className='img-fluid' style={{
                float: "right",
                width: "15%",
                margin: "5px",
            }}
            src={process.env.PUBLIC_URL + "/gomamon.png"} alt='Gomamon'/>
            <hr/>
            <p>
              Seguido del estreno de la primera película de Digimon a comienzos de 1999, en marzo Fuji TV comenzó a emitir la primera temporada de anime de esta saga, conocida como Digimon Adventure, a la cual sucedieron varias otras temporadas. La primera y segunda temporada se basan en una misma continuidad, mientras el resto de temporadas de televisión desarrollan una historia diferente cada vez, siempre basadas en el concepto <b>"Digimon"</b>.
              <br/><br/>
              El 1 de agosto de 2014, en el evento del 15 aniversario de Digimon Adventure, se dio a conocer como Digimon Adventure tri, que es una nueva secuela, la cual ocurre tres años tras los acontecimientos de Digimon Adventure 02. El protagonista es Tai Yagami y los otros niños elegidos que vuelven al mundo digital para nuevas aventuras. La nueva serie se emitió en el formato de 6 OVAs, estrenadas en los cines nipones y posteriormente aparecieron en formato DVD y Blu-Ray. La primera OVA se emitió el 21 de noviembre de 2015 y la última se estrenó el 5 de mayo de 2018.
              <br/><br/>
              <ul class="list-group">
                <li class="list-group-item Manga"><b>Digimon</b> (2000) (54 episodios - 2 películas)</li>
                <li class="list-group-item Manga"><b>Digimon 2</b> (2001) (50 episodios - 2 películas)</li>
                <li class="list-group-item Manga"><b>Digimon 3</b> (2002) (51 episodios - 2 películas)</li>
                <li class="list-group-item Manga"><b>Digimon 4</b> (2003) (50 episodios - 1 película)</li>
                <li class="list-group-item Manga"><b>Digimon Data Squad</b> (2010-2011) (48 episodios - 1 película)</li>
                <li class="list-group-item Manga"><b>Digimon Digimon Fusion</b> (2014-2016) (54 episodios)</li>
                <li class="list-group-item Manga"><b>Digimon Xros Wars-Hunters</b> (2011-2012) (25 episodios)</li>
                <li class="list-group-item Manga"><b>Digimon Universe: Appli Monsters</b> (2016-2017) (52 episodios)</li>
                <li class="list-group-item Manga"><b>Digimon Adventure: Ψ</b> (2020-2021) (67 episodios)</li>
                <li class="list-group-item Manga"><b>Digimon Ghost Game</b> (2021 en emisión)</li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
