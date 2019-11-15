class FancyBorder extends React.Component {
    render () {
        // 通过children  来将子组件传递到渲染结果中
        // 或者可以预留下prop
        return (
            <div className = {'FancyBorder FacnyBorder-' + this.props.color}>
                {this.props.children}
                <div>{this.props.div}</div>
            </div>
        )
    }
}

class WelcomeDialog extends React.Component {
    render () {
        return (
            // <FancyBorder></FancyBorder>中的子组件的内容会被传递到FancyBorder的children中
            <FancyBorder color = "bule"
                         div = {<p>这是通过预留的div prop插入的内容</p>}>
                <h1 className = "Dialog-title">
                    Welcome
                </h1>
                <p className = "Dialog-message">
                    Thank you for visiting our spacecraft!
                </p>
            </FancyBorder>
        )
    }
}


ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
);