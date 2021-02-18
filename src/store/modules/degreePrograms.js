import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    degreePrograms: [
        {
            name: "Front end developer program",
            routePath: "frontend",
            image: "frontend",
            id: 1,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus auctor massa in congue. Integer arcu nibh, aliquam ac dignissim sed, tempor sed metus. Vivamus quis egestas dui, non sollicitudin lacus. Aenean fermentum rhoncus gravida. Etiam pretium libero libero, et consequat odio faucibus sed. Curabitur faucibus, ante in fringilla dignissim, arcu urna porttitor mi, vel imperdiet velit erat sit amet augue. Nulla at nisi euismod turpis ultricies faucibus. Maecenas molestie gravida diam nec euismod. Integer in nisl efficitur dolor fringilla efficitur.",
            courses: [
                {
                    name: "HTML, CSS",
                    routePath: "htmlcss",
                    image: "html-css",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus auctor massa in congue. Integer arcu nibh, aliquam ac dignissim sed, tempor sed metus. Vivamus quis egestas dui, non sollicitudin lacus. Aenean fermentum rhoncus gravida. Etiam pretium libero libero, et consequat odio faucibus sed. Curabitur faucibus, ante in fringilla dignissim, arcu urna porttitor mi, vel imperdiet velit erat sit amet augue. Nulla at nisi euismod turpis ultricies faucibus. Maecenas molestie gravida diam nec euismod. Integer in nisl efficitur dolor fringilla efficitur."
                },
                {
                    name: "JavaScript",
                    routePath: "javascript",
                    image: "javascript",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus auctor massa in congue. Integer arcu nibh, aliquam ac dignissim sed, tempor sed metus. Vivamus quis egestas dui, non sollicitudin lacus. Aenean fermentum rhoncus gravida. Etiam pretium libero libero, et consequat odio faucibus sed. Curabitur faucibus, ante in fringilla dignissim, arcu urna porttitor mi, vel imperdiet velit erat sit amet augue. Nulla at nisi euismod turpis ultricies faucibus. Maecenas molestie gravida diam nec euismod. Integer in nisl efficitur dolor fringilla efficitur."
                },
                {
                    name: "Responsive web design",
                    routePath: "rwd",
                    image: "rwd",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus auctor massa in congue. Integer arcu nibh, aliquam ac dignissim sed, tempor sed metus. Vivamus quis egestas dui, non sollicitudin lacus. Aenean fermentum rhoncus gravida. Etiam pretium libero libero, et consequat odio faucibus sed. Curabitur faucibus, ante in fringilla dignissim, arcu urna porttitor mi, vel imperdiet velit erat sit amet augue. Nulla at nisi euismod turpis ultricies faucibus. Maecenas molestie gravida diam nec euismod. Integer in nisl efficitur dolor fringilla efficitur."
                },
                {
                    name: "Javacript Frameworks",
                    routePath: "js-frameworks",
                    image: "js-frameworks",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus auctor massa in congue. Integer arcu nibh, aliquam ac dignissim sed, tempor sed metus. Vivamus quis egestas dui, non sollicitudin lacus. Aenean fermentum rhoncus gravida. Etiam pretium libero libero, et consequat odio faucibus sed. Curabitur faucibus, ante in fringilla dignissim, arcu urna porttitor mi, vel imperdiet velit erat sit amet augue. Nulla at nisi euismod turpis ultricies faucibus. Maecenas molestie gravida diam nec euismod. Integer in nisl efficitur dolor fringilla efficitur."
                }
            ]
        },
        {
            name: "Backend developer program",
            routePath: "backend",
            image: "backend",
            id: 2,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus auctor massa in congue. Integer arcu nibh, aliquam ac dignissim sed, tempor sed metus. Vivamus quis egestas dui, non sollicitudin lacus. Aenean fermentum rhoncus gravida. Etiam pretium libero libero, et consequat odio faucibus sed. Curabitur faucibus, ante in fringilla dignissim, arcu urna porttitor mi, vel imperdiet velit erat sit amet augue. Nulla at nisi euismod turpis ultricies faucibus. Maecenas molestie gravida diam nec euismod. Integer in nisl efficitur dolor fringilla efficitur.",
            courses: [
                {
                    name: "Java",
                    routePath: "java",
                    image: "java",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus auctor massa in congue. Integer arcu nibh, aliquam ac dignissim sed, tempor sed metus. Vivamus quis egestas dui, non sollicitudin lacus. Aenean fermentum rhoncus gravida. Etiam pretium libero libero, et consequat odio faucibus sed. Curabitur faucibus, ante in fringilla dignissim, arcu urna porttitor mi, vel imperdiet velit erat sit amet augue. Nulla at nisi euismod turpis ultricies faucibus. Maecenas molestie gravida diam nec euismod. Integer in nisl efficitur dolor fringilla efficitur."
                },
                {
                    name: ".NET",
                    routePath: "dotnet",
                    image: "dot-net",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus auctor massa in congue. Integer arcu nibh, aliquam ac dignissim sed, tempor sed metus. Vivamus quis egestas dui, non sollicitudin lacus. Aenean fermentum rhoncus gravida. Etiam pretium libero libero, et consequat odio faucibus sed. Curabitur faucibus, ante in fringilla dignissim, arcu urna porttitor mi, vel imperdiet velit erat sit amet augue. Nulla at nisi euismod turpis ultricies faucibus. Maecenas molestie gravida diam nec euismod. Integer in nisl efficitur dolor fringilla efficitur."
                },
                {
                    name: "Relational Database",
                    routePath: "database",
                    image: "database",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus auctor massa in congue. Integer arcu nibh, aliquam ac dignissim sed, tempor sed metus. Vivamus quis egestas dui, non sollicitudin lacus. Aenean fermentum rhoncus gravida. Etiam pretium libero libero, et consequat odio faucibus sed. Curabitur faucibus, ante in fringilla dignissim, arcu urna porttitor mi, vel imperdiet velit erat sit amet augue. Nulla at nisi euismod turpis ultricies faucibus. Maecenas molestie gravida diam nec euismod. Integer in nisl efficitur dolor fringilla efficitur."
                },
                {
                    name: "Scripting languages (Node.js, Python)",
                    routePath: "script-langs",
                    image: "script-langs",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus auctor massa in congue. Integer arcu nibh, aliquam ac dignissim sed, tempor sed metus. Vivamus quis egestas dui, non sollicitudin lacus. Aenean fermentum rhoncus gravida. Etiam pretium libero libero, et consequat odio faucibus sed. Curabitur faucibus, ante in fringilla dignissim, arcu urna porttitor mi, vel imperdiet velit erat sit amet augue. Nulla at nisi euismod turpis ultricies faucibus. Maecenas molestie gravida diam nec euismod. Integer in nisl efficitur dolor fringilla efficitur."
                }
            ]
        }
    ]
}

const getters = {
    alldegreePrograms: (state) => state.degreePrograms,
    degreeProgramByName: (state) => (dname) => {
        return state.degreePrograms.find(degree => degree.routePath === dname)
    }
};

const mutations = {
};

const actions = {
};

export default {
    state,
    getters,
    mutations,
    actions
};
