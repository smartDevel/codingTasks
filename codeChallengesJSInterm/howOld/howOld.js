
const howOld = (age, year) => {
    let currYear = new Date().getFullYear();
    let calcAge = year - currYear + age;
    switch (true) {
      case calcAge > age : return `You will be ${calcAge} in the year ${year}`;
      case calcAge < 0 : return `The year ${year} was ${Math.abs(calcAge)} years before you were born`;
      case calcAge <= age : return `You were ${calcAge} in the year ${year} passed in`;    
    }
  }
  
  
  console.log(howOld(57,2035));
  console.log(howOld(57,2023));