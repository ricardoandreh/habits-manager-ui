export const NEW_OBJECTS = {
    TASK: {
        title: "",
        date: "",
        location: "",
        icon: { label: "", value: "" },
        color: "",
        completed: false,
        type: "" as "" | "Movement" | "ActiveMind" | "Recharge",
        description: "",
    },
    PROGRESS: {
        title: "",
        type: "",
        value: 0,
        color: "blue",
    },
    USER: {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        isDarkMode: false
    },
    ACCESS_TOKEN: {
        accessToken: '',
    }
};