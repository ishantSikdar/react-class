import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
import todos from "./todos";


// hardcoded recoil states
export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});


// async recoil state management
export const countAtom = atom({
    key: "countAtom",
    default: selector({
        key: "countSelector",
        get: async () => {
            await new Promise(r => setTimeout(r, 5000));
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
})


// selector
export const totalCountSelector = selector({
    key: "totalCountSelector",
    get: ({get}) => {
        const networkCount = get(networkAtom);
        const jobCount = get(jobsAtom);
        const notifCount = get(notificationAtom);
        const messageCount = get(messagingAtom);
        return networkCount + jobCount + notifCount + messageCount;
    }
})


// atom family
export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: (id) => {
        return todos.find(todo => todo.id == id)
    }
})

// async query for atomFamily (using selectorFamily)
export const todoAsyncAtomFamily = atomFamily({
    key: "todoAsyncAtomFamily",
    default: selectorFamily({
        key: "todoAsyncSelectorFamily",
        get: (id) => async ({ get }) => {
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo;
        }
    })
});