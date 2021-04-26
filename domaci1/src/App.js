import logo from './logo.svg';
import './App.css';
import IdCard from "./components/idCard/IdCard";
import Movies from "./components/movies/Movies";
import Books from "./components/books/Books";
import Wrapper from "./components/wrapper/Wrapper";

function App() {
  return (
    <div className="App">
        <Wrapper>
            <IdCard name="Filip" surname="Marijanovic" phone="067123456" city="Andrijevica" src={"idCard/no_photo.png"}/>
            <IdCard name="Jovana" surname="Jovanovic" phone="068564152" src={"idCard/people1.jpg"}/>
            <IdCard name="Marko" surname="Markovic" phone="069789000" city="Cetinje" src={"idCard/people2.jpg"}/>
        </Wrapper>

        <Wrapper>
            <Movies name="The Father" year="2020." type="Drama" director="Florian Zeller" actors="Anthony Hopkins, Olivia Colman" src={"movie/the_father.jpg"}/>
            <Movies name="Inception" year="2010." type="Action" director="Christopher Nolan" actors="Leonardo di Caprio, Tom Hardy" src={"movie/inception.jpg"}/>
            <Movies name="Pirates of the Caribbean 3" year="2006." type="Adventure" director="Gor Verbinski" actors="Johnny Depp, Keira Knightley" src={"movie/potc.jpg"}/>
        </Wrapper>

        <Wrapper>
            <Books title="Lovac na zmajeve" year="2003." author="Haled Hoseini" src={"book/lovac_na_zmajeve.jpg"} quote="To je bilo davno, ali ljudi griješe kada kažu da prošlost može da se pokopa." />
            <Books title="Ubiti pticu rugalicu" year="1960." author="Harper Li" src={"book/ubiti_pticu_rugalicu.jpg"} quote="Ljudi obično vide ono što žele da vide i čuju ono što žele da čuju." />
            <Books title="Na Drini cuprija" year="1945." author="Ivo Andric" src={"book/na_drini_cuprija.jpg"} quote="Nije dovoljno jednoj stvari okrenuti leđa, pa da prestane da nas muči i goni" />
        </Wrapper>
    </div>
  );
}

export default App;
