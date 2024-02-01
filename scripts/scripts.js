const container = document.getElementById('container');
const color = 'goldenrod';

createRow(color);
rainbowMode();
clearGrid();

function createRow(color) {
    for(let i = 0; i < 16; i++){
        const column = document.createElement('div');
        column.id='column-'+i;
        column.className = 'column-'+i;
        for(let k = 0; k < 16; k++){
            const div = document.createElement('div');
            div.id = column.id+'-grid-'+k;
            div.className = 'grid'
            column.appendChild(div);
            div.addEventListener('mouseover', () => 
                div.style.background = color
            )
        }
        container.appendChild(column);
    }
}

function rainbowMode(){
    let btnRainbow = document.getElementById('btnRainbow');
    btnRainbow.addEventListener('click', () =>{
        for(let i = 0; i < 16; i++){
            let child = document.getElementById('column-'+i);
            container.removeChild(child);
        }
        createRow(rainbow());
    })
}

function rainbow() {
    return 'rgb('+randomNumber()+', '+randomNumber()+', '+ randomNumber()+')';
}

function randomNumber() {
    return Math.floor((Math.random() * 255));
}

function clearGrid() {
    const btnClear = document.getElementById('btnClear');
    btnClear.addEventListener('click', () => {
        for(let i = 0; i < 16; i++){
            let child = document.getElementById('column-'+i);
            container.removeChild(child);
        }
        createRow(color);
    })

}