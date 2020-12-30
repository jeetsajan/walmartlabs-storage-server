var cache = require('memory-cache');

const searchKeywordInDescriptions = async (keyword) => {
    
    const idToDescription = cache.get('idToDescriptions');

    // console.log('get cache: ',idToDescription);
    console.log('get cache: ',idToDescription.length);
    console.log('get cache: ',typeof(idToDescription));

    let result = [];
    for (let i = 0; i < idToDescription.length; ++ i) {
        let item = idToDescription[i];
        if (item.shortDescription.indexOf(keyword) >= 0 || item.longDescription.indexOf(keyword) >= 0) {
            result.push(item.itemId);
        }
    }

    console.log('keyword: ', result);
    return result;
}

module.exports = {
    searchKeywordInDescriptions
}
