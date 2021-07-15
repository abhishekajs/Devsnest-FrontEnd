const Card = () => {
    const Image = () => {
        return (
            <img src="https://wishmeon.com/wp-content/uploads/2020/09/Apple-Users-My-Iphone-Apple-Meme.jpg" alt="react logo"/>
        );
    };

    return (
        <div className="card">
            <Image/>
            <h2>React Card</h2>
            <p>Meme card</p>
        </div>
    );
};

export default Card;