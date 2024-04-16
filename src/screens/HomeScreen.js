import PhilipsSelfie from "../assets/philip-selfie.png";

const HomeScreen = () => {
    return (
        <div className="container my-4">
            <h1 className="mb-3">Home Page</h1>
            <img src={PhilipsSelfie} width="450" className="img-fluid mb-3"></img>

            <p className="lead">Hello. My name is Philip. I do some stuff.</p>

            <div>
                <a href="https://philidips.substack.com" className="btn btn-primary me-2">My Newsletter</a>
                <a href="/contact" className="btn btn-secondary">My Contact</a>
            </div>
        </div>
    );
};

export default HomeScreen;