import PhilipsSelfie from "../assets/philip-selfie.png"

const HomeScreen = ({}) => {

    return(
        <div>
            <h1>Home Page</h1>
            <img src={PhilipsSelfie}></img>
            <br></br>

            <div>Hello. My name is Philip. I do some stuff.</div>

            <br></br>

            <a href="https://philidips.substack.com">My Newsletter</a> — <a href="/contact">My Contact</a>
        </div>
    );
};

export default HomeScreen;