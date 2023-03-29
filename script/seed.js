"use strict";

const {
  db,
  models: { User, UserInfo, UserPreference },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const [cody, mark, lucy, jill, larry, tom] = await Promise.all([
    User.create({
      username: "cody",
      password: "123",
      fullName: "Cody Miller",
      city: "Brooklyn",
      email: "cody@email.com",
      phone_number: "5556667777",
      imgUrl:
        "https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    }),
    User.create({
      username: "mark",
      password: "123",
      fullName: "Mark Johnson",
      city: "Brooklyn",
      email: "murphy@email.com",
      phone_number: "1112223333",
      imgUrl:
        "https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    }),
    User.create({
      username: "Lucy",
      password: "123",
      fullName: "Lucy Cook",
      city: "Brooklyn",
      email: "lucy@email.com",
      phone_number: "1112223333",
      imgUrl:
        "https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    }),
    User.create({
      username: "Jill",
      password: "123",
      fullName: "Jill Moore",
      city: "Brooklyn",
      email: "jill@email.com",
      phone_number: "1112223333",
      imgUrl:
        "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=",
    }),
    User.create({
      username: "Larry",
      password: "123",
      fullName: "Larry Baker",
      city: "Brooklyn",
      email: "larry@email.com",
      phone_number: "1112223333",
      imgUrl:
        "https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=",
    }),
    User.create({
      username: "Tom",
      password: "123",
      fullName: "Tom Davis",
      city: "Brooklyn",
      email: "tom@email.com",
      phone_number: "1112223333",
      imgUrl:
        "https://media.istockphoto.com/id/1278978817/photo/portrait-of-happy-mature-man-smiling.jpg?s=612x612&w=0&k=20&c=GPniKSszzPgprveN7sCT5mb-_L3-RSlGAOAsmoDaafw=",
    }),
  ]);
  await Promise.all([
    UserInfo.create({
      cleanliness: 2,
      hasPets: "No",
      smoking: "yes",
      age: 24,
      drugs: "No",
      gender: "Male",
      workSchedule: "Nights",
      socialLevel: 5,
      noiseLevel: 4,
      overnightGuests: "Yes",
      sexualOrientation: "Straight",
      politicalViews: "Democrat",
      religion: "Non-Religious",
      userId: cody.id,
    }),
    UserPreference.create({
      cleanliness: 3,
      allowPets: "Yes",
      smoking: "Yes",
      minAge: 21,
      maxAge: 32,
      drugs: "No",
      gender: "Male",
      workSchedule: "Nights",
      socialLevel: 5,
      noiseLevel: 4,
      overnightGuests: "Yes",
      sexualOrientation: "No Preference",
      politicalViews: "No Preference",
      religion: "No Preference",
      userId: cody.id,
    }),
    UserInfo.create({
      cleanliness: 2,
      hasPets: "No",
      smoking: "yes",
      age: 27,
      drugs: "No",
      gender: "Male",
      workSchedule: "Nights",
      socialLevel: 5,
      noiseLevel: 4,
      overnightGuests: "Yes",
      sexualOrientation: "Straight",
      politicalViews: "Democrat",
      religion: "Non-Religious",
      userId: mark.id,
    }),
    UserPreference.create({
      cleanliness: 3,
      allowPets: "Yes",
      smoking: "Yes",
      minAge: 21,
      maxAge: 32,
      drugs: "No",
      gender: "Male",
      workSchedule: "Nights",
      socialLevel: 5,
      noiseLevel: 4,
      overnightGuests: "Yes",
      sexualOrientation: "No Preference",
      politicalViews: "No Preference",
      religion: "No Preference",
      userId: mark.id,
    }),
    UserInfo.create({
      cleanliness: 5,
      hasPets: "No",
      smoking: "No",
      age: 22,
      drugs: "No",
      gender: "Female",
      workSchedule: "Week Days",
      socialLevel: 5,
      noiseLevel: 2,
      overnightGuests: "Yes",
      sexualOrientation: "Straight",
      politicalViews: "Democrat",
      religion: "Non-Religious",
      userId: lucy.id,
    }),
    UserInfo.create({
      cleanliness: 5,
      hasPets: "No",
      smoking: "No",
      age: 24,
      drugs: "No",
      gender: "Female",
      workSchedule: "Week Days",
      socialLevel: 5,
      noiseLevel: 2,
      overnightGuests: "Yes",
      sexualOrientation: "Straight",
      politicalViews: "Democrat",
      religion: "Non-Religious",
      userId: jill.id,
    }),
    UserInfo.create({
      cleanliness: 1,
      hasPets: "Yes",
      smoking: "Yes",
      age: 55,
      drugs: "Yes",
      gender: "Male",
      workSchedule: "Weekends",
      socialLevel: 1,
      noiseLevel: 1,
      overnightGuests: "No",
      sexualOrientation: "Straight",
      politicalViews: "Neither",
      religion: "Non-Religious",
      userId: larry.id,
    }),
    UserInfo.create({
      cleanliness: 2,
      hasPets: "Yes",
      smoking: "Yes",
      age: 42,
      drugs: "Yes",
      gender: "Male",
      workSchedule: "Weekends",
      socialLevel: 1,
      noiseLevel: 5,
      overnightGuests: "No",
      sexualOrientation: "Straight",
      politicalViews: "Neither",
      religion: "Non-Religious",
      userId: tom.id,
    }),
    UserPreference.create({
      cleanliness: 5,
      allowPets: "No",
      smoking: "No",
      minAge: 20,
      maxAge: 38,
      drugs: "No",
      gender: "Female",
      workSchedule: "Week Days",
      socialLevel: 5,
      noiseLevel: 3,
      overnightGuests: "Yes",
      sexualOrientation: "No Preference",
      politicalViews: "No Preference",
      religion: "No Preference",
      userId: lucy.id,
    }),
    UserPreference.create({
      cleanliness: 5,
      allowPets: "No",
      smoking: "No",
      minAge: 20,
      maxAge: 38,
      drugs: "No",
      gender: "Female",
      workSchedule: "Week Days",
      socialLevel: 5,
      noiseLevel: 3,
      overnightGuests: "Yes",
      sexualOrientation: "No Preference",
      politicalViews: "No Preference",
      religion: "No Preference",
      userId: jill.id,
    }),
    UserPreference.create({
      cleanliness: 2,
      allowPets: "Yes",
      smoking: "Yes",
      minAge: 20,
      maxAge: 60,
      drugs: "No",
      gender: "Male",
      workSchedule: "Weekends",
      socialLevel: 1,
      noiseLevel: 1,
      overnightGuests: "No",
      sexualOrientation: "No Preference",
      politicalViews: "No Preference",
      religion: "No Preference",
      userId: larry.id,
    }),
    UserPreference.create({
      cleanliness: 2,
      allowPets: "Yes",
      smoking: "Yes",
      minAge: 20,
      maxAge: 60,
      drugs: "No",
      gender: "Male",
      workSchedule: "Weekends",
      socialLevel: 1,
      noiseLevel: 1,
      overnightGuests: "No",
      sexualOrientation: "No Preference",
      politicalViews: "No Preference",
      religion: "No Preference",
      userId: tom.id,
    }),
  ]);

  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
