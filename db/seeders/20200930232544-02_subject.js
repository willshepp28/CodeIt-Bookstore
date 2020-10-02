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


    { category: "", imageUrl: "", description: ""},
    */

    return await queryInterface.bulkInsert("Subjects", [
      { category: "Design Patterns", imageUrl: "https://jakubturek.com/content/images/2016/09/designpatterns02.jpg", description: "In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn't a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations.", createdAt: new Date(), updatedAt: new Date()},
      { category: "Javascript", imageUrl: "https://img.pngio.com/logo-javascript-png-transparent-logo-javascriptpng-images-pluspng-javascript-png-587_330.png", description: "JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages", createdAt: new Date(), updatedAt: new Date()},
      { category: "Angular", imageUrl: "https://miro.medium.com/max/800/1*7WeQGvRghyIVWVliG3kMsQ.png", description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript", createdAt: new Date(), updatedAt: new Date()},
      { category: "Node", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", description: "Node is an open source development platform for executing JavaScript code server-side", createdAt: new Date(), updatedAt: new Date()},
      { category: "Postgres", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", description: "Postgres  is an open source relational database management system (DBMS) developed by a worldwide team of volunteers", createdAt: new Date(), updatedAt: new Date()},
      { category: "Computer Science", imageUrl: "https://www.logolynx.com/images/logolynx/d3/d365dc0d2500fca3a530d032f01a25cc.jpeg", description: "Computer Science is the study of computers and computational systems.", createdAt: new Date(), updatedAt: new Date()},
       { category: "SQL", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDq1xKaMKQqC5McRuXuwa9GWomfejPV-9vHQ&usqp=CAU", description: "SQL is Structured Query Language, which is a computer language for storing, manipulating and retrieving data stored in a relational database.", createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Subjects", null, {});
  }
};
