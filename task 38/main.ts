function describe_city(city:string,country:string = "default country"){
    console.log(`${city} is in ${country}}`);
}
describe_city(`karachi`,"pakistan");
describe_city(`tokyo`,"japan");
describe_city(`paris`);