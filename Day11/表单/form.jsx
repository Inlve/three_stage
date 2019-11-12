class NameForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: '',
            show: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({
            value: e.target.value.toUpperCase()
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        this.setState({
            show: this.state.value
        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字:
                    <input type = "text" name = "name"
                           value = {this.state.value}
                           onChange = {this.handleChange} />
                </label>
                <input type = "submit" value = "提交" />
                <p>提交的名字:{this.state.show}</p>
            </form>
        );
    }

}

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('提交的文章: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    文章:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('你喜欢的风味是: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你喜欢的风味:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="葡萄柚">葡萄柚</option>
                        <option value="酸橙">酸橙</option>
                        <option value="椰子">椰子</option>
                        <option value="芒果">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

ReactDOM.render(
    <div>
        <p>input,textarea,select都是受控组件 input:file是非受控组件</p>
        <NameForm />
        <EssayForm />
        <FlavorForm />
    </div>,
    document.getElementById('root')
);