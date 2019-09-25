if(process.env.NODE_ENV === 'production') {

    module.exports = {

        mongoURI: 'mongodb+srv://JackFF:JackF2304@studentnotes-prod-ya7xf.mongodb.net/test?retryWrites=true&w=majority'
    };
}

else {

    module.exports = {

        mongoURI: 'mongodb://localhost/studentnotes-dev'
    };
}