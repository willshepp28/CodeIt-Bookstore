'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
     *     title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    overview: DataTypes.TEXT,
    subjectId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    pages: DataTypes.INTEGER,
    price:{
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    purchase_url: {
      allowNull: false,
      type: DataTypes.TEXT
    }

   

    { title: "", overview: "", subjectId: "", authorId: "", pages: "", price: "", purchase_url:"" },
    */
   return await queryInterface.bulkInsert("Books", [
     { title: "Clean Code: A Handbook of Agile Software Craftsmanship", overview: "Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code―of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code.", subjectId: 6, authorId: 1, pages: 447, price: 31.19, purchase_url: "https://www.amazon.com/gp/product/B001GSTOAM/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0" },
     { title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design", overview: "Drawing on over a half-century of experience in software environments of every imaginable type, Martin tells you what choices to make and why they are critical to your success. As you’ve come to expect from Uncle Bob, this book is packed with direct, no-nonsense solutions for the real challenges you’ll face–the ones that will make or break your projects.", subjectId: 6, authorId: 1, pages: 430, price: 29.38, purchase_url: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure-dp-0134494164/dp/0134494164/ref=mt_other?_encoding=UTF8&me=&qid=" },
     { title: "The Clean Coder: A Code of Conduct for Professional Programmers ", overview: "Programmers who endure and succeed amidst swirling uncertainty and nonstop pressure share a common attribute: They care deeply about the practice of creating software. They treat it as a craft. They are professionals.", subjectId: 6, authorId: 1, pages: 242, price: 38.04, purchase_url: "https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073/ref=pd_bxgy_img_3/137-6635429-9609030?_encoding=UTF8&pd_rd_i=0137081073&pd_rd_r=832e203e-59d1-4f20-b254-ada8a2de7f86&pd_rd_w=yxvYq&pd_rd_wg=J0Cc0&pf_rd_p=ce6c479b-ef53-49a6-845b-bbbf35c28dd3&pf_rd_r=FK6QVTKYSP7YQ9R4EEFT&psc=1&refRID=FK6QVTKYSP7YQ9R4EEFT" },
     { title: "Professional JavaScript for Web Developers", overview: "Professional JavaScript for Web Developers is the essential guide to next-level JavaScript development. At 1,200 pages, this book is the most comprehensive JavaScript reference available anywhere. Written for intermediate-to-advanced programmers, this book jumps right into the technical details to help you clean up your code and become a more sophisticated JavaScript developer. This new fourth edition has been updated to cover through ECMAScript 2019; new frameworks and libraries, new techniques, new APIs, and more are explained in detail for the professional developer, with a practical focus that helps you put your new skills to work on real-world projects.", subjectId: 2, authorId: 2, pages: 1200, price: 31.55, purchase_url:"https://www.amazon.com/Professional-JavaScript-Developers-Matt-Frisbie-dp-1119366445/dp/1119366445/ref=mt_other?_encoding=UTF8&me=&qid=" },
     { title: "AngularJS Web Application Development Cookbook", overview: "AngularJS is one of the most popular frameworks in the world of web development today. Designed with an emphasis on simplicity, it offers an elegant solution to the many complex challenges of developing for the modern web. AngularJS Web Application Development Cookbook has been created to help you to get more from this immensely valuable tool, featuring more than 90 recipes that provide practical solutions to a huge range of problems. Whatever you are trying to achieve with AngularJS, this essential cookbook provides you with an extensive range of relevant and reliable AngularJS tutorials in one accessible place.", subjectId: 3, authorId: 2, pages: 346, price: 35.99, purchase_url:"https://www.amazon.com/AngularJS-Web-Application-Development-Cookbook-dp-1783283351/dp/1783283351/ref=mt_other?_encoding=UTF8&me=&qid=" },
     { title: "Node.js Design Patterns", overview: "Learn proven patterns, techniques, and tricks to take full advantage of the Node.js platform. Master well-known design principles to create applications that are readable, extensible, and that can grow big.", subjectId: 4, authorId: 3, pages: 660, price: 49.99, purchase_url:"https://www.amazon.com/Node-js-Design-Patterns-production-grade-applications-dp-1839214112/dp/1839214112/ref=mt_other?_encoding=UTF8&me=&qid=" },
     { title: "", overview: "", subjectId: "", authorId: "", pages: "", price: "", purchase_url:"" },
     { title: "", overview: "", subjectId: "", authorId: "", pages: "", price: "", purchase_url:"" },
     { title: "", overview: "", subjectId: "", authorId: "", pages: "", price: "", purchase_url:"" },
     { title: "", overview: "", subjectId: "", authorId: "", pages: "", price: "", purchase_url:"" },
     { title: "", overview: "", subjectId: "", authorId: "", pages: "", price: "", purchase_url:"" },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
