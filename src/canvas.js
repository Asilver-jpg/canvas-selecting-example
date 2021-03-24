

export default class Canvas extends React.Component {
    state = {
        mainCTX: "",
        mainCanvas:"",
        canvasWidth: 450,
        canvasHeight: 450,
        hitCTX: "",
        colorsHash: {},
        shapes: [],
        color: "#0000FF",

        mouseX: 0,
        mouseY: 0,
    }

    _onMouseMove(e){
        this.setState({mouseX: e.nativeEvent.offsetX, mouseY: e.nativeEvent.offsetY})
    }
    componentDidMount() {
        let mainCanvas = document.querySelector("#canvas")
        let mainContext = mainCanvas.getContext("2d")
        let hitCanvas= document.createElement('canvas')
        let hitCTX = hitCanvas.getContext("2d")

        hitCanvas.width = 450
        hitCanvas.height = 450


    }

    render () {
        return(
            <div id = "canvasDiv">
                <canvas id="canvas" height = {this.state.canvasHeight} wifth = {this.state.canvasWidth}></canvas>
            </div>

        )

    }

    draw = () => {
        this.clearCanvas(this.state.mainContext)
        this.drawAllShapes()

    }

    clearCanvas = (context) => {
        context.clearRect(0,0, this.state.canvasWidth, this.state.canvasHeight)
    }

    getRandomColor =() => {
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
     }

     hexToRgb = (hex) => {
        
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}


//classes

class Rectangle {
    constructor(posX, posY, width, height, fill){
        this.posX = posX
        this.posY= posY
        this.width = width
        this.height = height   
    }
    drawRectangle(context){


    }


}