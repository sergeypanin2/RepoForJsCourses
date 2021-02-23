function checkInput() {
    const p = /[^a-zа-я0-9]+/g
    let str = document.getElementById("input").value
    str = str.toLowerCase()
    str = str.replace(p, '')
    let result = true
    for ( let i = 0; i < str.length/2; i++) {
        if ( str[i] !== str[str.length - i - 1]) {
            result = false
            break
        }
    }
    alert(result)
}