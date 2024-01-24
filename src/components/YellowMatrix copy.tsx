import { useRef, useEffect } from "preact/hooks"
// import { h } from 'preact'

interface size {
    width: number,
    height: number,
}
/**
 * MATRIX EFFECT CONSTANTS
 */
const MINIMAL_SPEED: number = 0.8   // original 1
const MAX_ADD_SPEED: number = 0.4   // original 0
const REDROP_AFTER_INVISIBLE_RATIO: number = 0.975
const FONT_COLOR: string = "#ff0"
const FONT_SIZE: number = 10
const MATRIX_CANVAS_TRAIL_INDICE: number = 0.04
const FONT: string = "arial"
const MATRIX_BASE: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~"
/**
 * DEV
 * 0 = prod |  300 = show hydration dev mode
 */
const DEV_SHOW_HYDRATION = 50

export function YellowMatrix() {
    const MatrixCanvasRef: any = useRef()
    const MatrixCanvasChars: string[] =  MATRIX_BASE.split('')
    let windowDimensions: size = getWindowDimensions()
    let MatrixCanvasDrops: number[] = []
    let MatrixCanvasSpeeds : number[] = []
    let MatrixCanvasColumns: number = 0
    let MatrixCanvas_rqAF: number = 0
    let MatrixCanvasCTX: any = null
    let toggleMatrixCanvasEvent = true
        
    function getWindowDimensions() {
        const hasWindow: boolean = typeof window !== 'undefined'
        const width: number = hasWindow ? window.innerWidth : 0
        const height: number = hasWindow ? window.innerHeight : 0
        return {
            width,
            height,
        }
    }

    function draw() {
        cancelAnimationFrame(MatrixCanvas_rqAF) 
        MatrixCanvasCTX.fillStyle = "rgba(0, 0, 0, "+MATRIX_CANVAS_TRAIL_INDICE+")"
        MatrixCanvasCTX.fillRect(0, 0, MatrixCanvasRef.current.width, MatrixCanvasRef.current.height)
        MatrixCanvasCTX.fillStyle = FONT_COLOR 
        MatrixCanvasCTX.font = FONT_SIZE + "px "+FONT
        for(var i = 0; i < MatrixCanvasDrops.length; i++) {
            var text = MatrixCanvasChars[Math.floor(Math.random()*MatrixCanvasChars.length)]
            MatrixCanvasCTX.fillText(text, i*FONT_SIZE, MatrixCanvasDrops[i]*FONT_SIZE)
            if(MatrixCanvasDrops[i]*FONT_SIZE > MatrixCanvasRef.current.height && Math.random() > REDROP_AFTER_INVISIBLE_RATIO) {
                MatrixCanvasDrops[i] = 0
                MatrixCanvasSpeeds[i] = MINIMAL_SPEED + (Math.random() * MAX_ADD_SPEED)
            }
            MatrixCanvasDrops[i] += MatrixCanvasSpeeds[i]
        }
        MatrixCanvas_rqAF = requestAnimationFrame(draw)
    }

    const handleMatrixCanvasResize = () => {
        if (DEV_SHOW_HYDRATION > 0) console.log('resize')
        windowDimensions = getWindowDimensions()
        MatrixCanvasRef.current.height = windowDimensions.height
        MatrixCanvasRef.current.width = windowDimensions.width
        MatrixCanvasColumns = MatrixCanvasRef.current.width / FONT_SIZE 
        for(var x = MatrixCanvasDrops.length; x < MatrixCanvasColumns; x++){
            MatrixCanvasDrops[x] = window.innerHeight
            MatrixCanvasSpeeds[x] = MINIMAL_SPEED + (Math.random() * MAX_ADD_SPEED)
        }
        MatrixCanvasDrops = MatrixCanvasDrops.slice(0, x)        // reducing window size will 
        MatrixCanvasSpeeds = MatrixCanvasSpeeds.slice(0, x)     // reduce MatrixCanvasDrops & MatrixCanvasSpeeds length to column
    }

    function handleMatrixCanvasEvents() {
        if (DEV_SHOW_HYDRATION > 0 && toggleMatrixCanvasEvent == true) console.log("scroll")
        const header = document.querySelector("#page-header") as HTMLElement
        const page = document.documentElement
        const d: number = page.clientHeight - page.scrollTop - header.offsetHeight - DEV_SHOW_HYDRATION
        if (d < 0 && toggleMatrixCanvasEvent == true) {
            if (DEV_SHOW_HYDRATION > 0) console.log('dropping Matrix Canvas Events')
            removeEventListener('resize', handleMatrixCanvasResize)
            toggleMatrixCanvasEvent = false
            cancelAnimationFrame(MatrixCanvas_rqAF) 
        }
        if (d >= 0 && toggleMatrixCanvasEvent == false) {
            if (DEV_SHOW_HYDRATION > 0) console.log('re-init Matrix Canvas Events')
            windowDimensions = getWindowDimensions()
            if (MatrixCanvasRef.current.width != windowDimensions.width) handleMatrixCanvasResize()
            window.addEventListener('resize', handleMatrixCanvasResize)
            toggleMatrixCanvasEvent = true
            MatrixCanvas_rqAF = requestAnimationFrame(draw)
        }
     }

    useEffect(() => {
        console.log(`Yellow Matrix MATRIX is LOADED !!!!!!!!  MATRIXXX  !!!!!!`)
        if (MatrixCanvasRef.current) 
            MatrixCanvasCTX = MatrixCanvasRef.current.getContext('2d')        
        handleMatrixCanvasResize()
        MatrixCanvas_rqAF = requestAnimationFrame(draw)        
        window.addEventListener('resize', handleMatrixCanvasResize)
        document.addEventListener('scroll', handleMatrixCanvasEvents)
        // COMPOSANTS REGULAR EVENT REMOVE @DISMOUNT (dont proc atm)
        return(removeEventListener('scroll', handleMatrixCanvasEvents))
    }, [])

    return (
        <>
        <canvas 
            id="matrix_canvas"
            height={windowDimensions.height}
            width={windowDimensions.width}
            style="position: absolute; width: 100%; height: 100%;"
            ref={MatrixCanvasRef}
        ></canvas>     
        </>      
    )
}