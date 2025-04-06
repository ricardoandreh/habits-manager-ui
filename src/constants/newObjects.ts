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
        name: "",
        email: "",
        isDarkMode: false,
        token: null,
    }
};