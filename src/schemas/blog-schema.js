import mongoose from "mongoose";

const { Schema } = mongoose

const blogSchema = new Schema(
    {
        title: String,
        author: {
            firstName: String,
            lastName: String,
        },
        body: String,
        comments: [{
            body: String,
            date: Date
        }],
        date: {
            type: Date,
            default: Date.now
        },
        hidden: Boolean,
        meta: {
            votes: Number,
            favs: Number
        }
    },
    {
        methods: {
            printTitle() {
                console.log('The title is', this.title)
            }
        },
        statics: {
            shout(n) {
                console.log('Shouted', n)
            }
        },
        query: {
            byAuthorName(nm) {
                return this.where({ author: /nm/ })
            }
        },
        virtuals: {
            authorFullName: {
                get() {
                     return this.author.firstName + ' ' + this.author.lastName 
                }
            }
        }
    }
)


// console.log(blogSchema.path('meta.votes'))

let Blog = mongoose.model('TestBlogModel', blogSchema)
const b1 = new Blog({
    title: 'Kalypso',
    author: {
        firstName: "Jonathan",
        lastName: 'Irons'
    }
})

console.log(b1)
b1.printTitle()
Blog.shout('python')
console.log(b1.authorFullName)


// Blog.findOne().byAuthorName('jack').exec((err, author) => {
//     console.log({ author })
// })
