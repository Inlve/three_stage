class Login extends React.Component {
    constructor(props) {
        super(props);
        this.fIn = this.fIn.bind(this);
        this.fOut = this.fOut.bind(this);
        this.state = {
            status: false
        };
    }

    fIn () {
        this.setState({
            status: true
        })
    }

    fOut () {
        this.setState({
            status: false
        })
    }
    vIf () {
        // 如果返回null将不会渲染
        return null
    }

    out () {
        return (
            <div>
                <p>当前已登录</p>
                <button onClick={this.fOut}>退出</button>
                <div>{this.vIf()}</div>
            </div>
        )
    }
    in () {
        return (
            <div>
                <p>当前未登录</p>
                <button onClick={this.fIn}>登陆</button>
            </div>
        )
    }

    render () {
        return (
            <div>
                {this.state.status ? this.out() : this.in()}
            </div>
        )
    }


}

ReactDOM.render(
    <Login />,
    document.getElementById('root')
);

