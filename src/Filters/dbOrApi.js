const dbOrApi = (array,db,api) => {
    const apisVideogames = [];
    const dbVideogames = [];

    array.map(e => {
        if(e.background_image === 'https://preview.redd.it/8d7f61ikv3s51.jpg?auto=webp&s=c8a8dc1e477ca522b5dc1f4eff4161bbc09719ac'){
            dbVideogames.push(e)
        } else {
            apisVideogames.push(e)
        }
    });

    if(db) {
    
    return dbVideogames;
    }

    if(api){
        return apisVideogames
    }
};

module.exports = dbOrApi;