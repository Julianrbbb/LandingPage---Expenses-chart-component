const CuerpoTabla = document.querySelector('.cuerpo__grafico__tablas')

const archivo = fetch("https://julianrbbb.github.io/LandingPage---Expenses-chart-component/data.json").then(response => {
    return response.json()
}).then(values => {
    values.forEach(v => {
        let div = document.createElement("DIV")
        let Tabla = document.createElement("DIV")
        let valor = document.createElement("SPAN")
        let p = document.createElement("P")
        let tamaño = v.amount * 2.8
        let MasAlto = false
        const filtrados = values.filter(value => value.amount > v.amount)
        
        div.className = 'cuerpo__grafico__tablas__t'

        Tabla.style.cssText = 'height:'+tamaño+'px;'
        if(filtrados.length == 0)
            MasAlto = true
        
        let ClaseColor = MasAlto ? 'columna__color__primario' : 'columna__color__secundario'
        Tabla.classList.add('cuerpo__grafico__tablas__t__columna')
        Tabla.classList.add(ClaseColor)

        valor.textContent = '$'+v.amount
        valor.hidden = true

        p.className = 'cuerpo__grafico__tablas__t__dia'
        p.textContent = v.day

        div.appendChild(valor)
        div.appendChild(Tabla)
        div.appendChild(p)

        Tabla.addEventListener('click', () => {
            valor.hidden = !div.firstChild.hidden
            valor.className= div.firstChild.hidden ? '' : 'cuerpo__grafico__tablas__t__valor'
            Tabla.classList.toggle('active')            
        })

        CuerpoTabla.appendChild(div)
    })
})