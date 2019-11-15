class Account extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            user:'',
            pwd:'',
        };
        this.handleChangInput = this.handleChangInput.bind(this);
    }

    handleChangInput(e){
        // 处理多个input元素的时候,我们可以给每个元素添加name属性
        // 并让处理函数根据event.target.name的值来选择执行的操作
        const target = e.target;
        this.setState({
            [target.name] : target.value
        })
    }

    render () {
        return (
            <form>
                <label>
                    帐号:
                    <input type = "text" name = "user" onChange={this.handleChangInput} />
                </label>
                <label>
                    密码:
                    <input type = "password" name = "pwd" onChange={this.handleChangInput} />
                </label>
                {/*
                    指定value可以防止用户更改输入,
                    但是如果指定了value,设置为undefined或者null,仍然可以编辑
                */}
                <input type = "text" value="Hi" />
            </form>
        );
    }

}

ReactDOM.render(
    <Account />,
    document.getElementById('root')
);