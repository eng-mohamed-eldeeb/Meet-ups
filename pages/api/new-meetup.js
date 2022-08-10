// /api/new-meetup

import {MongoClient} from 'mongodb'


async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;
        const {title, image, address, description} = data;

        const client = MongoClient.connect('mongodb+srv://eldeeb:jeDPCElKTiijTol1@cluster0.llmfdo2.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = (await client).db();
        const meetupsCollection = 
    }
}

export default handler;