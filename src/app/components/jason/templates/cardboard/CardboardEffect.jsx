export default function CardboardEffect (props) {
    const template = props.template
    const component = props.component;

    // if (template === "cardboard") {
        return (
            <div style={{height:'100%', width:'100%', position: 'absolute'}}>
                <div style={{
                    backgroundColor: component === 'JLinkButton' ? '#595c8d' : '#c1baba',
                    color: '#7679b3',
                    content: '',
                    position: 'absolute',
                    top: '5px',
                    right: '-10px',
                    width: '10px',
                    height: '100%',
                    transform: 'skewY(45deg)'
                    }}/>
                <div style={{
                        content: '',
                        position: 'absolute',
                        backgroundColor: component === 'JLinkButton' ? '#595c8d' : '#c1baba',
                        height: '10px',
                        width: '100%',
                        bottom: '-10px',
                        left: '5px',
                        top: 'auto',
                        right: 'auto',
                        transform: 'skewX(45deg)'
                    }}/>
            </div>
        )
    // }



}