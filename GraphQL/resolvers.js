const myPersonality = {
    name: "Shin Leejong",
    age: 27
}

const resolvers = {
    Query: {
        person: () => myPersonality
    }
};

export default resolvers;