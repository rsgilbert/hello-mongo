import {MongoClient} from 'mongodb'

const url = 'mongodb://localhost:27017'

const client = new MongoClient(url)

async function run() {
    try {
    
        await client.connect()
        const db = client.db('test')
        const blog = db.collection('blog')
        const findCursor = blog.find()
        await findCursor.forEach(doc => {
            console.log(doc)
        })
    }
    finally {
       await client.close()
    }
} 
run()