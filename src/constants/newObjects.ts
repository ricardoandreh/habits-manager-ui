export const NEW_OBJECTS = {
    TASK: {
        title: "",
        time: "",
        location: "",
        duration: "",
        icon: { label: "", value: "" },
        color: "",
        completed: false,
        type: "" as "" | "Movement" | "ActiveMind" | "Recharge",
    },
    PROGRESS: {
        title: "",
        type: "",
        value: 0,
        color: "blue",
    },
    USER: {
        id: "",
        name: "",
        email: "",
        token: null,
    }
};