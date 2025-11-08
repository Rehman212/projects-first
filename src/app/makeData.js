// /src/app/makeData.js

export const makeData = (count = 100) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      firstName: `John ${i}`,
      middleName: `M`,
      lastName: `Doe ${i}`,
      email: `john${i}@example.com`,
      phoneNumber: `0300-123456${i}`,
      address: `Street ${i}, City ${i}`,
      zipCode: `100${i}`,
      city: `City ${i}`,
      state: `State ${i}`,
      country: `Country ${i}`,
      petName: `Dog ${i}`,
      age: 20 + (i % 10),
      salary: 50000 + i * 100,
      dateOfBirth: "1990-01-01",
      dateOfJoining: "2020-01-01",
      isActive: i % 2 === 0,
    });
  }
  return data;
};
