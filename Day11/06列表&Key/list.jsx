class List extends React.Component{
    constructor (props) {
        super(props);
        this.renderList = this.renderList.bind(this);
        this.state = {
            news:[
                "第一天",
                "第二天",
                "第三天"
            ]
        }
    }

    renderList(list){
        return list.map((el,index)=>{
            // 注意要绑定key
            return(<li key={index}>{el}</li>)
        })
    }

    render () {
        return (
            <div>
                {this.state.news}
                <ul>
                    {this.renderList(this.state.news)}
                </ul>
                <p>其他组件渲染:</p>
                <ListItem list={this.state.news} />
            </div>
        );
    }
}

class ListItem extends React.Component{
    constructor (props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    renderList(){
        return this.props.list.map((el,index)=>{
            return (
                <li key={index}>{el}</li>
            )
        })
    }

    render () {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);