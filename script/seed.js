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

  const [cody, mark] = await Promise.all([
    User.create({
      username: "cody",
      password: "123",
      fullName: "Cody Miller",
      city: "Brooklyn",
      email: "cody@email.com",
      phone_number: "5556667777",
    }),
    User.create({
      username: "mark",
      password: "123",
      fullName: "Mark Johnson",
      city: "Brooklyn",
      email: "murphy@email.com",
      phone_number: "1112223333",
    }),
  ]);
  const [codyInfo, codyPref, markInfo, markPref] = await Promise.all([
    UserInfo.create({
      cleanliness: 2,
      hasPets: "No",
      smoking: "yes",
      age: 24,
      drugs: "No",
      gender: "Male",
      workSchedule: "Nights",
      socialLevel: "5",
      noiseLevel: 4,
      overnightGuests: "Yes",
      sexualOrientation: "Straight",
      politicalViews: "N/A",
      religion: "N/A",
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
      socialLevel: "5",
      noiseLevel: 4,
      overnightGuests: "Yes",
      sexualOrientation: "Straight",
      politicalViews: "N/A",
      religion: "N/A",
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
      socialLevel: "5",
      noiseLevel: 4,
      overnightGuests: "Yes",
      sexualOrientation: "Straight",
      politicalViews: "N/A",
      religion: "N/A",
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
      socialLevel: "5",
      noiseLevel: 4,
      overnightGuests: "Yes",
      sexualOrientation: "Straight",
      politicalViews: "N/A",
      religion: "N/A",
      userId: mark.id,
    }),
  ]);

  console.log(`seeded successfully`);
  return {
    users: {
      cody,
      mark,
    },
    userPreferences: {
      codyPref,
    },
    userInfos: {
      codyInfo,
    },
  };
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
