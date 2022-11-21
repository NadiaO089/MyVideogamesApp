
const sortByName = (x, y) => {
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
}
        
const orderAtoZ = (array) => {
               
    let inOrder = array.sort(sortByName);
    return inOrder;

}

module.exports = orderAtoZ;
        