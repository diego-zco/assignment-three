'use strict';

module.exports = {
    generateRandomTask,
    generateRandomTaskContent
};

const Faker = require('faker');

function generateRandomTask(userContext, events, done) {
    // Random task content
    const taskContent = Faker.random.words(3);
    // Random priority
    const taskPriority = Faker.random.number({
                                        'min': 1,
                                        'max': 4
    });
    // Choosing a random language between es and en
    const taskLang = Faker.random.arrayElement([ 
                                        'en',
                                        'es'
                                    ]);

    // Generate a random date with the expected format
    const randomDay = Faker.random.arrayElement([
                                        'today',
                                        'tomorrow'
                                    ]);
    const randomHour = Faker.random.number({
                                        'min': 0,
                                        'max': 23
                                    });
    const randomMinute = Faker.random.number({
                                            'min': 0,
                                            'max': 59
                                        });
    const taskDate = `${randomDay} at ${randomHour}:${randomMinute}`;

    userContext.vars.taskContent = taskContent;
    userContext.vars.taskPriority = taskPriority;
    userContext.vars.taskLang = taskLang;
    userContext.vars.taskDate = taskDate;
    //console.log(`${taskContent} ${taskPriority} ${taskLang} ${taskDate}`);

    return done();

}

function generateRandomTaskContent(userContext, events, done) {
    const taskContent = Faker.lorem.sentence(3);

    userContext.vars.taskContent = taskContent;

    return done();

}
