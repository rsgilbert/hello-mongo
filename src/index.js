import mongoose from 'mongoose'


async function main() {
    await mongoose.connect('mongodb://localhost:27017/test')

    const kittySchema = new mongoose.Schema({
        name: String 
    })

    kittySchema.methods.speak = function speak(){ 
        const greeting = this.name + ' is greeting you'
        console.log(greeting)
    }

    const Kitten = mongoose.model('Kitten', kittySchema)

    // const lazy = new Kitten({ name: 'Lazy' })
    // console.log(lazy.name)
    // lazy.speak()
    // let svd = await lazy.save()
    // console.log('saved lazy', {svd })
    // console.log({svd})

    const kittens = await Kitten.find({ name: /^L/ })
    console.log(kittens)
}

main()