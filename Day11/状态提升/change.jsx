class BoilingVerdict extends React.Component {
    render () {
        if (this.props.celsius >= 100) {
            return (
                <p>水会沸腾</p>
            );
        } else {
            return (
                <p>水不会沸腾</p>
            )
        }
    }
}

class TemperatureInput extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        // this.setState({
        //     temperature: e.target.value
        // })
        // 现在需要更新temperature需要来自父组件的onTemperatureChange来更新
        this.props.onTemperatureChange(e.target.value);
    }

    render () {
        return (
            <fieldset>
                <legend>
                    输入温度(单位:{this.props.scale})
                </legend>
                <input type = "text"
                       value = {this.props.temperature}
                       onChange = {this.handleChange} />
            </fieldset>
        )
    }
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
class Calculator extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            temperature: ''
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange (temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange (temperature) {
        this.setState({scale: 'f', temperature});
    }

    render () {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                {/*
                 如果希望输入温度时,另一个也会保持同步,
                 这就需要状态提升
                 状态提升,就是将多个组件中需要的state向上移动到她们最近的共同父组件中,
                 便可以实现共享state
                 */}
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />

                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);