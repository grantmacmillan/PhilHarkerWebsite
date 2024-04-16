import PhilipsSelfie from "../assets/philip-selfie.png"
import styles from "../styles/ScreenStyles.module.css"

const HomeScreen = ({}) => {

    return(
        <div>
            <h1>Home Page</h1>
            <img src={PhilipsSelfie} width="450"></img>
            <br></br>

            <div>Hello. My name is Philip. I do some stuff.</div>

            <br></br>

            <a href="https://philidips.substack.com">My Newsletter</a> — <a href="/contact">My Contact</a>

        </div>
    );
};

export default HomeScreen;