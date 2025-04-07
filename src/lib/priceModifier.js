export default function priceModifier(price) {
    let arr = price.toString().split('');
    for(let i = arr.length-3; i >= 0; i-=3) {
        arr.splice(i, 0, ',')
    }
    return arr.join('');
}