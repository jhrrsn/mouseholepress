class ButtonClick extends React.Component {
    buttonClicked() {
        console.log('Button was clicked!')
    }

    render() {
        return (<div>
            <p>Hello, {chance.first()}.</p>
            <button onClick={this.buttonClicked}>xxx</button>
        </div>);
    }
}

export default ButtonClick;
