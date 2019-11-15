// Context可以让我们无需明确地传递给每一个组件,就能将值传递深入到每一个组件
// 为当前的theme创建一个context,light为默认值
const ThemeContext = React.createContext('light');

class App extends React.Component {
    render () {
        // 使用Provider来讲当前的theme传递给以下的组件树.
        // 无论多深,任何组件都能够读取这个值
        // 在这个例子中,我们将"dark"作为当前的值传递下去
        return (
            <ThemeContext.Provider value = "dark">
                <Toolbar theme = "dark" />
            </ThemeContext.Provider>
        );
    }
}

class Toolbar extends React.Component {
    render () {
        // Toolbar组件接受一个额外的"theme"属性,然后传递给ThemedButton组件.
        // 如果应用中每一个单独的但牛都需要知道theme的值,这样会很麻烦
        // 因为必须将这个值层层的传递给所有的组件
        // 而使用了Context就可以避免中间元素传递props

        //  使用了Context之后,不需要像这样:
        // <ThemedButton theme={this.props.theme} />
        // 来指定往下传递theme了
        return (
            <div>
                <ThemedButton />
            </div>
        );
    }
}

class ThemedButton extends React.Component {
    // 指定contextType 读取当前的Theme context
    // React会往上找到最近的theme Provider,然后使用他的值
    static contextType = ThemeContext;

    render () {
        return (
            <Button theme = {this.context} />
        );
    }
}

class Button extends React.Component {
    render () {
        return (
            <div>{this.props.theme}</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/**
 * 一般来说需要谨慎使用Context
 * 使用的步骤是:
 * 1. React.createContext();生成一个Context对象
 * 2. Context.Provider;订阅Context变化
 * 3. 挂在Class.contextType,使用this.context来读取最近的Context对象上的那个值
 *
 * const MyContext = React.createContext(defaultValue); // defaultValue 一个默认值
 * <MyContext.Provider value = { 某一个值 } />
 * class MyClass extends React.Component{
 *     componentDidMount(){
 *         ket value = this.context;
 *     }
 *     // 或者使用
 *     static contextType = MyContext
 * }
 */