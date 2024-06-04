import axios from "axios";
import { atom, selector } from "recoil";


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
