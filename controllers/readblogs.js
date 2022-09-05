const {response} = require("express");
const fs = require('fs');
const fspromises = fs.promises;
const path = require('path');

const postdir = 'node_files/posts';



const readblogs = async (req, res = response) => {
    let posts = [];
    // read all md files in the posts directory
    try {
        let filenames = await fspromises.readdir(postdir);

        filenames.forEach((filename) => {
            let post = fs.readFileSync(path.join(postdir, filename)).toString();
            const { birthtime } = fs.statSync(path.join(postdir, filename));
            posts.push(post + "\n" + birthtime.toDateString());
        })


        return res.status(200).json({
            posts: posts,
            msg: "read blog successfully"
        })

    } catch (err) {
        console.log(err);
    }
}

module.exports = {readblogs};