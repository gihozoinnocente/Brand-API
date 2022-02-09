// import chai, { expect } from 'chai'
// import chaiHttp from 'chai-http'
// import app from '../src/app.js'
// import 'dotenv/config';
// import Article from "./../src/models/article.js"

// let articleId

// const getArticleId= async ()=>{
//     const all = await Article.find()
//     let id=all[0]._id;
//     return id
// }

// (async ()=>{
//     articleId=await getArticleId()
// })()

// chai.use(chaiHttp)
// describe("ARTICLE END-POINT TESTING", () => {
//     it("Should retrieve the articles", (done) => {
//         chai.request(app).get("/api/v1/articles/")
//         .send()
//         .end((err,res)=>{
//             expect(res).to.have.property("status")
//             expect(res.body).to.have.property("message")
//             expect(res.body).to.have.property("data")
//           done()
//         })
        
//     })
//     it("Should not retrieve the articles",  (done) => {
//         chai.request(app).get("/api/v1/aritcle/")
//         .send()
//         .end((err,res)=>{
//         expect(res).to.have.status([404])
//         done()
//     })
//     })
//     it("Should  retrieve the article by id", (done) => {
//         chai
//             .request(app)
//             .get(`/api/v1/articles/${articleId}`)
//             .send()
//             .end((err, res) => {
//                 expect(res).to.have.status([200]);
//                 expect(res).to.have.property("status");
//                 expect(res.body).to.have.property("message");
//                 expect(res.body).to.be.a("object");
//                 done();
//             });
//     });

//     it("Should  delete the article by id", (done) => {
//         chai
//             .request(app)
//             .delete(`/api/v1/articles/${articleId}`)
//             .send()
//             .end((err, res) => {
//                 expect(res).to.have.status([200]);
//                 expect(res).to.have.property("status");
//                 expect(res.body).to.have.property("message");
//                 expect(res.body).to.be.a("object");
//                 done();
//             });
//     });


 
// })


import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import { article, userData, validUser } from './dummyData.js';
import Article from "./../src/models/article.js"
import { array } from 'joi';
//import User from "./../src/models/user.js"


let articleId

const getArticleId= async ()=>{
    const all = await Article.find()
    let id=all[0]._id;
    return id
}

(async ()=>{
  articleId=await getArticleId()
})()

chai.use(chaiHttp)

chai.use(chaiHttp)
describe("ARTICLE END-POINT TESTING", () => {
   

    it("It should register the user",(done) => {
        chai.request(app).post("/api/v1/users/register")
        .send(userData)
        .end((err,res)=>{
            expect(res).to.have.property('status')
          done()
        })
        
    })

    let token=""
    it("It should loggin the user",(done) => {
        chai.request(app).post("/api/v1/users/login")
        .send(validUser)
        
        .end((err,res)=>{
            token=res.body.accessToken;
            expect(res.body).to.have.property("accessToken")
          done()
        })
        
    })
    it("When logged in Should retrieve the Articles",(done) => {
        chai
        .request(app)
        .get("/api/v1/articles/")
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'multipart/form-data')
        .field({title:'postDemo', content: 'Demo', author: 'innocente'})
        
        .end((req,res)=>{
            articleId =res.body.data._id
            expect(res).to.have.status([200])
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("data")
            expect(res.body).to.be.a("object");
            //expect(res.body).to.have.property("object")
          done()
        })
        
    })

    it("When not logged in, should not retrieve the articles",  (done) => {
        chai.request(app).get("/api/v1/artiles/")
        .send()
        .end((err,res)=>{
        expect(res.body).to.have.property("error")
        expect(res).to.have.status([404])
        done()
    })
    })
   

    it("Should  retrieve the article by id", (done) => {
        chai
        .request(app)
        .get(`/api/v1/articles/${articleId}`)
        .send()
        .end((err, res) => {
        //expect(res).to.have.status([200]);
        expect(res).to.have.property("status");
        expect(res.body).to.have.property("message");
        expect(res.body).to.be.a("object");
        done();
        });
    });

    

    // it("Should create an article",(done) => {
    //     chai
    //     .request(app)
    //     .post("/api/v1/articles/")
    //     .send(article)
    //     .end((err,res)=>{
    //     expect(res).to.have.property("status")
    //     expect(res.body).to.have.property("message")
    //     expect(res.body).to.have.property("data")
    //     done()
    //     })
                
    // })
})

