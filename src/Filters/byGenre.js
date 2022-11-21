       
const byGenre = (array, genre) => {
    console.log('array', array)
    console.log('genre',genre)

let filterByGenre = [];

    array.map(e => {
        return (
        e.genres.map(g => {
            if(g.name === genre){
             filterByGenre.push(e);
            }
        return filterByGenre;
    })
    )});

    return filterByGenre;
}

module.exports = byGenre;