       
const byGenre = (array, genre) => {
    console.log('array', array)
    console.log('genre',genre)

let filterByGenre = [];

    array.map(e => {
        e.genres.map(g => {
            if(g.name === genre){
             filterByGenre.push(e)
            }
        })
    });

    return filterByGenre;
}

module.exports = byGenre;