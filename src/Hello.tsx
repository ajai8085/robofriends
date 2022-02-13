import './Hello.css';

const Hello = (props: { greetings: string, age: number }) => {

    return (
        <div className="f1 tc">
            <h1>Hello world</h1>
            <p>Welcome to react {props.greetings} with age {props.age}</p>
        </div>
    );

}

export default Hello;