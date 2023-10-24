import { useParams, useNavigate, Link } from "react-router-dom"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


export default function Info() {
    const { id, animal } = useParams()
    const navigate = useNavigate()

    function handleBtnPress() {
        navigate("/")
    }

    return(
        <>
            <Navbar/>
            <main>
                <h1 id="text">This is the id: {id}, and this is the animal: {animal} </h1>
                <button onClick={handleBtnPress}>Press me</button>
                <Link to={"/"}>Link tag</Link>
                <a href="#text">Anchor</a>
            </main>
            <Footer/> 
        </>
    )
}