
const sortByRating = (x, y) => {
    if (x.rating > y.rating) {
      return 1;
    }
    if (x.rating < y.rating) {
      return -1;
    }
    
    return 0;

}
    
const byLowRating = (array) => {
           
let inOrder = array.sort(sortByRating);
return inOrder;

}

module.exports = byLowRating;