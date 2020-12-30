
const request=require('request')

var rp = require('request-promise');

const csv=require('csvtojson')

var _ = require('lodash');

const CONFIG = require('./config');

const { URL_ITEM_IDS, API_WALMARTLABS_HOST, API_VERSION_NUM, API_KEY, TIME_LIMIT } = CONFIG;

var cache = require('memory-cache');

const readItemsIds = () => {
    return new Promise((resolve, reject) => {
        const obj = [];
            csv()
                    .fromStream(request.get(URL_ITEM_IDS))
                    .on('csv',(csvRow)=>{
                        // csvRow is an array
                        obj.push(csvRow[0]);
                    })
                    .on('done',(error)=>{
                        if (error) reject(error);
                        console.log('obj=', obj);
                        resolve(obj);
                    });
    });
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchItem = async (id) => {
    return new Promise((resolve, reject) => {
        let path = `/${API_VERSION_NUM}/items/${id}?format=json&apiKey=${API_KEY}`;
        let url = API_WALMARTLABS_HOST + path;
        rp(url).then(res => resolve(res)).catch(err => reject(err))
    })
}

const fetchItems = async (itemIds) => {
    const result = [];
    while (itemIds.length > 0) {
        let id = itemIds.shift();
        let item = await fetchItem(id)
        result.push(item);
        console.log('promise: ', itemIds.length);

        await delay(TIME_LIMIT);    
    }
    return result;
}

module.exports = async () => {
    console.log('Fetch item description ...');
    let idToDescriptions = [];
    const itemIds = await readItemsIds();
    const fetchedContent = await fetchItems(itemIds);
    console.log(itemIds.length)
    console.log(fetchedContent.length);

    for (let i = 0; i < fetchedContent.length; ++ i) {
        const item = JSON.parse(fetchedContent[i]);
        idToDescriptions.push({
            'itemId':item.itemId,
            'shortDescription':item.shortDescription,
            'longDescription': item.longDescription
        }); 
    }

    cache.put('ids', itemIds);
    cache.put('idToDescriptions', idToDescriptions)
};
