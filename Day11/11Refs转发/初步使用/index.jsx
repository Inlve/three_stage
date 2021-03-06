const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();

ReactDOM.render(
    <FancyButton ref={ref}>Click me!</FancyButton>,
    document.getElementById('root')
);
console.log(ref.current,ref);

/**
 * 以下是对上述示例发生情况的逐步解释：
 * 我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量。
 * 我们通过指定 ref 为 JSX 属性，将其向下传递给 <FancyButton ref={ref}>。
 * React 传递 ref 给 fowardRef 内函数 (props, ref) => ...，作为其第二个参数。
 * 我们向下转发该 ref 参数到 <button ref={ref}>，将其指定为 JSX 属性。
 * 当 ref 挂载完成，ref.current 将指向 <button> DOM 节点。
 */