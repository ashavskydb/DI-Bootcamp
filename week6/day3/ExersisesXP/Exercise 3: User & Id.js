const users = { user1: 18273, user2: 92833, user3: 90315 }

    const usersArray = Object.entries(users); // 1st part of exercise

    Object.entries(users).forEach(([key, value]) => { // 2nd part of exercise
        usersArray.push([key, value * 2]);
    });

    console.log(usersArray);



